import axios from 'axios';
import { BASE_URL } from '../utils/appConstant';
import AppError from '../utils/AppError';

/**
 * Fetches a user's bookings.
 *
 * @param {string} userId - The ID of the user whose bookings to fetch.
 * @returns {Promise<object[]>} A promise that resolves to the bookings.
 * @throws {AppError} Throws an AppError if the request fails.
 */
async function getBookings(userId) {
  try {
    const response = await axios.get(`${BASE_URL}/user/${userId}/bookings`);
    return response.data;
  } catch (error) {
    throw new AppError(error);
  }
}


/**
 * Fetches a specific booking for a user by booking ID.
 *
 * @param {string} userId - The ID of the user whose booking to fetch.
 * @param {string} bookingId - The ID of the booking to fetch.
 * @returns {Promise<object>} A promise that resolves to the booking object.
 * @throws {AppError} Throws an AppError if the request fails.
 */
async function getBooking(userId, bookingId) {
  try {
    const response = await axios.get(`${BASE_URL}/user/${userId}/booking/${bookingId}`);
    return response.data;
  } catch (error) {
    throw new AppError(error);
  }
}

/**
 * Delete a booking for a user.n  
 *
 * @param {string} userId - The ID of the user whose booking to cancel.
 * @param {string} bookingId - The ID of the booking to cancel.
 * @returns {Promise<object>} A promise that resolves to the cancelled booking object.
 * @throws {AppError} Throws an AppError if the request fails.
 */
async function cancelBooking(userId, bookingId) {
  try {
    const response = await axios.delete(`${BASE_URL}/user/${userId}/booking/${bookingId}`);
    return response.data;
  } catch (error) {
    throw new AppError(error);
  }
}

/**
 * Creates a new booking for a user.
 *
 * @param {string} userId - The ID of the user making the booking.
 * @param {string} roomId - The ID of the room to be booked.
 * @param {Object} bookedDate - The dates for the booking.
 * @param {string} bookedDate.checkInDate - The check-in date.
 * @param {string} bookedDate.checkOutDate - The check-out date.
 * @param {number} price - The total price for the booking.
 * @returns {Promise<object>} A promise that resolves to the created booking object.
 * @throws {AppError} Throws an AppError if the request fails.
 */
async function createBooking(userId, roomId, bookedDate, price) {
  const data = {
    roomId,
    ...bookedDate,
    price
  };

  try {
    return await axios.post(`${BASE_URL}/user/${userId}/booking/new`, data);
  } catch (error) {
    throw new AppError(error);
  }
}


export {
  getBookings,
  getBooking,
  cancelBooking,
  createBooking
}