import axios from 'axios';
import { AppPath, BASE_URL } from '../utils/appConstant';
import { getAccessToken, setAccessToken } from '../services/authServices';

//const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

// ...existing code...

// dedicated auth instance without the app interceptors to avoid recursion
const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

// single shared promise to dedupe concurrent refreshes
let pendingRefresh = null;
const MAX_REFRESH_ATTEMPTS = 1; // per-request refresh attempts

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const currentConfig = err?.config;
    const status = err?.response?.status;

    // basic guards
    if (!currentConfig || !err) return Promise.reject(err);
    if (status !== 401) return Promise.reject(err);

    // avoid retrying refresh/login endpoints (prevent recursion)
    const url = (currentConfig.url || '').toString();
    if (url.includes(AppPath.auth.refresh) || url.includes(AppPath.auth.login)) {
      return Promise.reject(err);
    }

    // avoid retrying same request multiple times
    if (currentConfig._retry) {
      return Promise.reject(err);
    }
    currentConfig._retry = true;

    // optional per-request limit
    currentConfig.__retryCount = currentConfig.__retryCount || 0;
    if (currentConfig.__retryCount >= MAX_REFRESH_ATTEMPTS) {
      return Promise.reject(err);
    }
    currentConfig.__retryCount += 1;

    // dedupe refresh calls: create single pendingRefresh used by concurrent 401 handlers
    const doRefresh = () => {
      if (!pendingRefresh) {
        pendingRefresh = authApi
          .post(AppPath.auth.refresh, {}, { withCredentials: true })
          .then((resp) => {
            const newToken = resp?.data?.accessToken;
            if (newToken) setAccessToken(newToken);
            return newToken;
          })
          .catch((refreshErr) => {
            // clear pending so future attempts can try again if desired
            pendingRefresh = null;
            throw refreshErr;
          })
          .finally(() => {
            // ensure pendingRefresh is cleared after resolution/failure
            pendingRefresh = null;
          });
      }
      return pendingRefresh;
    };

    try {
      const newToken = await doRefresh();
      if (!newToken) return Promise.reject(err);

      // attach new token and retry original request once
      currentConfig.headers = currentConfig.headers || {};
      currentConfig.headers['Authorization'] = `Bearer ${newToken}`;

      return api(currentConfig);
    } catch (refreshError) {
      return Promise.reject(refreshError);
    }
  },
);

export default api;
