import axios from 'axios';
import { BASE_URL } from '../utils/appConstant';
import AppError from '../utils/AppError';

async function getRooms({ checkInDate, checkOutDate }) {
  let response;
  try {
    if (checkInDate && checkOutDate) {
      response = await axios.get(`${BASE_URL}/rooms?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`);
    } else {
      response = await axios.get(`${BASE_URL}/rooms`);
    }

  } catch (error) {
    throw new AppError(error);
  }
  return response.data;
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