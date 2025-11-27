import AppError from '../utils/AppError';
import api from '../api/api';

/**
 * Fetches fulfillment rates for rooms.
 *
 * @param {Object} [options] - The options object.
 * @returns {Promise<object>} A promise that resolves to the room stats data.
 * @throws {AppError} Throws an AppError if the request fails.
 */
async function getRoomStats({ month } = {}) {
  const query = new URLSearchParams({ month }).toString();
  const url = `/admin?${query}`;
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    throw new AppError(error);
  }
}

export { getRoomStats };
