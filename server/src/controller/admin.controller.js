import BookingRepository from "../repositories/BookingRepository.js";
import { calculateFulfillmentRates } from '../utils/statsHelper.js';

/**
 * Controller to fetch the fulfillment rates for rooms.
 *
 * Response:
 *   - 200 OK with the fulfillment rates data.
 *   - 500 Internal Server Error for other failures.
 */
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

/**
 * Controller to fetch all bookings for admin space including their user details.
 *
 * Response:
 *   - 200 OK with a list of booking objects if found.
 *   - 500 Internal Server Error for other failures.
 */
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