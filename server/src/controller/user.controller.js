import UserRepository from '../repositories/UserRepository.js';
import BookingRepository from '../repositories/BookingRepository.js';

/**
 * Controller to fetch a all specific user's bookings.
 *
 * Route parameter:
 *   - userId (string): the ID of the user whose bookings to fetch.
 *
 * Response:
 *   - 200 OK with a list of booking objects.
 *   - 500 Internal Server Error for other failures.
 */
async function getUserBookings(req, res, next) {
  const uid = req.params.userId;
  try {
    const bookings = await UserRepository.findBookings(uid);
    res.json(bookings);
  } catch (error) {
    next(error)
  }
}

/**
 * Controller to fetch a specific booking for a specific user by booking ID.
 *
 * Route parameters:
 *   - userId (string): the ID of the user whose booking to fetch.
 *   - id (string): the ID of the booking to retrieve.
 *
 * Response:
 *   - 200 OK with the booking object if found.
 *   - 404 Not Found if the booking does not exist.
 *   - 500 Internal Server Error for other failures.
 */
async function getUserBooking(req, res, next) {
  const id = req.params.id;
  const userId = req.params.userId;
  try {
    const booking = await UserRepository.findBooking(userId, id);
    res.json(booking);
  } catch (error) {
    next(error)
  }
}

/**
 * Controller to delete a booking by its ID.
 *
 * Route parameter:
 *   - id (string): the ID of the booking to delete.
 *
 * Response:
 *   - 200 OK if the booking is deleted.
 *   - 404 Not Found if the booking does not exist.
 *   - 500 Internal Server Error for other failures.
 */
async function deleteBooking(req, res, next) {
  const id = req.params.id;
  try {
    UserRepository.deleteBooking(id);
  } catch (error) {
    next(error);
  }
}

/**
 * Controller to add a new booking for a specific user.
 *
 * Route parameter:
 *   - userId (string): the ID of the user making the booking.
 *
 * Request body:
 *   - data (object): the booking details including roomId, checkInDate, checkOutDate, and price.
 *
 * Response:
 *   - 200 OK if the booking is successfully added.
 *   - 500 Internal Server Error for other failures.
 */

async function addBooking(req, res, next) {
  const userId = req.params.userId;
  const data = req.body;
  try {
    if (!data) data['userId'] = userId
    const result = await UserRepository.addBooking(userId, data);
    res.status(200).json();
  } catch (error) {
    next(error);
  }
}

export {
  getUserBookings,
  getUserBooking,
  deleteBooking,
  addBooking
}