import axios from 'axios';
import { AppPath } from '../utils/appConstant';
import { getAccessToken, setAccessToken } from '../services/authServices';

const BASE_URL = process.end.API_URL;

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

const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

let pendingRefresh = null;
const MAX_REFRESH_ATTEMPTS = 1;

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const currentConfig = err?.config;
    const status = err?.response?.status;

    if (!currentConfig || !err) return Promise.reject(err);
    if (status !== 401) return Promise.reject(err);

    const url = (currentConfig.url || '').toString();
    if (url.includes(AppPath.auth.refresh) || url.includes(AppPath.auth.login)) {
      return Promise.reject(err);
    }

    if (currentConfig._retry) {
      return Promise.reject(err);
    }
    currentConfig._retry = true;

    currentConfig.__retryCount = currentConfig.__retryCount || 0;
    if (currentConfig.__retryCount >= MAX_REFRESH_ATTEMPTS) {
      return Promise.reject(err);
    }
    currentConfig.__retryCount += 1;

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
            pendingRefresh = null;
            throw refreshErr;
          })
          .finally(() => {
            pendingRefresh = null;
          });
      }
      return pendingRefresh;
    };

    try {
      const newToken = await doRefresh();
      if (!newToken) return Promise.reject(err);

      currentConfig.headers = currentConfig.headers || {};
      currentConfig.headers['Authorization'] = `Bearer ${newToken}`;

      return api(currentConfig);
    } catch (refreshError) {
      return Promise.reject(refreshError);
    }
  }
);

export default api;
