import axios from 'axios';
import { BASE_URL } from '../utils/appConstant';
import AppError from '../utils/AppError';

async function getBookings(userId) {
  try {
    const response = await axios.get(`${BASE_URL}/user/${userId}/bookings`);
    return response.data;
  } catch (error) {
    throw new AppError(error);
  }
}

async function getBooking(userId, bookingId) {
  try {
    const response = await axios.get(`${BASE_URL}/user/${userId}/booking/${bookingId}`);
    return response.data;
  } catch (error) {
    throw new AppError(error);
  }
}
export {
  getBookings,
  getBooking
}