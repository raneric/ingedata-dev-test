import axios from 'axios';
import { BASE_URL } from '../utils/appConstant';
import AppError from '../utils/AppError';

/**
 * Fetches all bookings with all user info for admin page.
 *
 * @returns {Promise<object[]>} A promise that resolves to the bookings.
 * @throws {AppError} Throws an AppError if the request fails.
 */
async function getBookings() {
  try {
    const response = await axios.get(`${BASE_URL}/admin/bookings`);
    return response.data;
  } catch (error) {
    throw new AppError(error);
  }
}


export {
  getBookings
}