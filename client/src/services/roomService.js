import axios from 'axios';
import { BASE_URL } from '../utils/appConstant';
import AppError from '../utils/AppError';

/**
 * Fetches rooms based on check-in and check-out dates.
 *
 * @param {Object} [options] - The options object.
 * @param {string} [options.checkInDate] - The check-in date.
 * @param {string} [options.checkOutDate] - The check-out date.
 * @returns {Promise<object[]>} A promise that resolves to the rooms data.
 * @throws {AppError} Throws an AppError if the request fails.
 */
async function getRooms({ checkInDate, checkOutDate } = {}) {
  const query = new URLSearchParams({ checkInDate, checkOutDate }).toString();
  const url = `${BASE_URL}/rooms?${query}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new AppError(error);
  }
}


/**
 * Fetches room details by room ID.
 *
 * @param {string} id - The ID of the room to fetch.
 * @returns {Promise<object>} A promise that resolves to the room data.
 * @throws {AppError} Throws an AppError if the request fails.
 */
async function getRoom(id) {
  let response;
  try {
    response = await axios.get(`${BASE_URL}/room/${id}`);
  } catch (error) {
    throw new AppError(error.response);
  }
  return response.data;
}

/**
 * Fetches a room with all its bookings.
 *
 * @param {string} id - The ID of the room to fetch.
 * @returns {Promise<object>} A promise that resolves to the room with its bookings.
 * @throws {AppError} Throws an AppError if the request fails.
 */
async function getRoomWithBookings(id) {
  let response;
  try {
    response = await axios.get(`${BASE_URL}/room/${id}/bookings`);
  } catch (error) {
    throw new AppError(error.response);
  }
  return response.data;
}

export{
  getRooms,
  getRoom,
  getRoomWithBookings
}