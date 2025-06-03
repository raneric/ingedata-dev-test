import axios from 'axios';
import { BASE_URL } from '../utils/appConstant';
import AppError from '../utils/AppError';

/**
 * Fetches fulfillment rates for rooms.
 *
 * @param {Object} [options] - The options object.
 * @returns {Promise<object>} A promise that resolves to the room stats data.
 * @throws {AppError} Throws an AppError if the request fails.
 */
async function getRoomStats({ month } = {}) {
  const query = new URLSearchParams({ month }).toString();
  const url = `${BASE_URL}/admin?${query}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new AppError(error);
  }
}

export {
  getRoomStats
}