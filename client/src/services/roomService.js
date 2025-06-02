import axios from 'axios';
import { BASE_URL } from '../utils/appConstant';
import AppError from '../utils/AppError';

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

async function getRoom(id) {
  let response;
  try {
    response = await axios.get(`${BASE_URL}/room/${id}`);
  } catch (error) {
    throw new AppError(error.response);
  }
  return response.data;
}

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