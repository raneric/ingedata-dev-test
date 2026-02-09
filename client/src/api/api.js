import axios from 'axios';
import { AppPath, BASE_URL } from '../utils/appConstant';
import { getAccessToken, setAccessToken } from '../services/authServices';

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = getAccessToken();
  console.log('Token from interceptor ', token);
  if (token) config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const currentConfig = err.config;
    console.log('Error from interceptor ', err);
    if (err.response.status === 401 && !currentConfig._retry) {
      currentConfig._retry = true;

      const refreshToken = await axios.post(AppPath.auth.refresh, {}, { withCredentials: true });
      setAccessToken(refreshToken.data.accessToken);

      currentConfig.headers['Authorization'] = 'Bearer ' + refreshToken.data.accessToken;
      return api(currentConfig);
    }

    return Promise.reject(err);
  },
);

export default api;
