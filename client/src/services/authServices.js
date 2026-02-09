import { AppPath } from '../utils/appConstant';
import api from '../api/api';

let accessToken = null;

const setAccessToken = (token) => {
  accessToken = token;
};

const getAccessToken = () => accessToken;

async function login(userCredentials) {
  try {
    const response = await api.post(AppPath.auth.login, userCredentials);
    setAccessToken(response.data.token);
    return {
      success: true,
      token: response.data.token,
    };
  } catch (error) {
    return {
      success: false,
      message: error.response.data.message ?? error.message,
    };
  }
}

export { login, getAccessToken, setAccessToken };
