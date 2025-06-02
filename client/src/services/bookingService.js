import axios from 'axios';
import { BASE_URL } from '../utils/appConstant';
import AppError from '../utils/AppError';

async function getBookings() {
  try {
    const response = await axios.get(`${BASE_URL}/bookings`);
    return response.data;
  } catch (error) {
    throw new AppError(error.response);
  }
}


export {
  getBookings
}