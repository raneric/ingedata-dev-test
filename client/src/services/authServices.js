import { AppPath } from '../utils/appConstant';
import axiosInstance from '../loader/config';

async function login(userCredentials) {
  try {
    const response = await axiosInstance.post(AppPath.auth.login, userCredentials);
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
