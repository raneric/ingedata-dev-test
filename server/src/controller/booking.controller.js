import BookingRepository from "../repositories/BookingRepository.js";
import { ResourceNotFoundError } from '../utils/ApplicationError.js';

/**
 * Controller to fetch all bookings that fit the given filter criteria based on 
 * [authorizedRequestQuery] list
 * If no filter is specified, it will return all bookings
 * 
 *
 * Response:
 *   - 200 OK with list of booking objects if found
 *   - 500 Internal Server Error for other failures
 */
async function getBookings(req, res, next) {

  const filters = Object.fromEntries(
    Object.entries(req.query).filter(([key]) => authorizedRequestQuery.includes(key))
  );

  try {
    let bookings;
    bookings = await BookingRepository.findAll(filters);
    res.json(bookings);
  } catch (error) {
    next(error)
  }
}

/**
 * Controller to fetch a booking by its ID.
 *
 * Route parameter:
 *   - id (Int): the ID of the booking to retrieve.
 *
 * Response:
 *   - 200 OK with the booking object if found.
 *   - 404 Not Found if the booking does not exist.
 *   - 500 Internal Server Error for other failures.
 */
async function getBookingById(req, res, next) {
  const id = req.params.id;
  try {
    const booking = await BookingRepository.findById(id);
    if (!booking) {
      throw new ResourceNotFoundError(`Bookings with ${id} doesn't exist`);
    }
    res.json(booking);
  } catch (error) {
    next(error)
  }
}

const authorizedRequestQuery = ['roomId', 'checkInDate', 'checkOutDate'];

export {
  getBookings,
  getBookingById
}