import axios from 'axios';
import { BASE_URL } from '../utils/appConstant';
import AppError from '../utils/AppError';

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