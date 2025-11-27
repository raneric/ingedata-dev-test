import AppError from '../utils/AppError';
import api from '../api/api';
import { AppPath } from '../utils/appConstant';

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
  let endpoint = AppPath.room.all;
  if (checkInDate && checkOutDate) {
    const query = new URLSearchParams({ checkInDate, checkOutDate }).toString();
    endpoint = `?${query}`;
  }

  try {
    const response = await api.get(endpoint);
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
    response = await api.get(`${AppPath.room.details}/${id}`);
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
    response = await api.get(`/room/${id}/bookings`);
  } catch (error) {
    throw new AppError(error.response);
  }
  return response.data;
}

export { getRooms, getRoom, getRoomWithBookings };
