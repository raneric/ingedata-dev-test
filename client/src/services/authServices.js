import axios from 'axios';
import { AppPath, BASE_URL } from '../utils/appConstant';

async function login(userCredentials) {
  try {
    const loginPath = `${BASE_URL}${AppPath.auth.login}`;
    const response = await axios.post(loginPath, userCredentials);

    return {
      success: true,
      token: response.data.token,
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: error.response.data.message,
    };
  }
}

export { login };
