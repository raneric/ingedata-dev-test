import BookingRepository from "../repositories/BookingRepository.js";
import { ResourceNotFoundError } from '../utils/ApplicationError.js';
import { calculateFulfillmentRates } from '../utils/statsHelper.js';

async function getStats(req, res, next) {
  let bookings;
  try {
    bookings = await BookingRepository.findAll();
    const stats = calculateFulfillmentRates(bookings);
    res.json(stats);
  } catch (error) {
    next(error)
  }
}

async function getBookings(req, res, next) {
  try {
    let bookings;
    bookings = await BookingRepository.findAllBookingWithUsers();
    res.json(bookings);
  } catch (error) {
    next(error)
  }
}

export {
  getStats,
  getBookings
}