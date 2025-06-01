import axios from 'axios';
import { BASE_URL } from '../utils/appConstant';

async function getRooms() {
  const response = await axios.get(`${BASE_URL}/rooms`);
  return response.data;
}

async function getRoom(id) {
  const response = await axios.get(`${BASE_URL}/room/${id}`);
  return response.data;
}

async function getRoomWithBookings(id) {
  const response = await axios.get(`${BASE_URL}/room/${id}/bookings`);
  return response.data;
}

export{
  getRooms,
  getRoom,
  getRoomWithBookings
}