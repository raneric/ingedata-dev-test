import Booking from "../models/booking.model.js";
import { Op, where } from "sequelize";

import { ResourceNotFoundError } from '../utils/errors.js';

/**
 * Controller to fetch all bookings for a specific room by its ID.
 *
 * Route parameter:
 *   - roomId (string): the ID of the room (e.g., 'S1', 'P2', etc.)
 *
 * Response:
 *   - 200 OK with list of booking objects if found
 *   - 404 Not Found if no bookings exist for the room
 *   - 500 Internal Server Error for other failures
 */
async function getBookingByRoomId(req, res, next) {
  const roomId = req.params.roomId;
  try {
    const bookings = await Booking.findAll({ where: { roomId } });
    if (!bookings) {
      throw new ResourceNotFoundError(`No booking found for ${roomId}`);
    }
    res.json(bookings);
  } catch (error) {
    next(error)
  }
}


/**
 * Controller to fetch all bookings or all bookings that are within a specific date range.
 *
 * Query parameters:
 *   - checkInDate (string): the start date of the range (inclusive)
 *   - checkOutDate (string): the end date of the range (inclusive)
 *
 * Response:
 *   - 200 OK with list of booking objects if found
 *   - 404 Not Found if no bookings exist for the room
 *   - 500 Internal Server Error for other failures
 */
async function getBookings(req, res, next) {
  const { checkInDate, checkOutDate } = req.query
  try {
    let bookings;

    if (checkInDate && checkOutDate) {
      bookings = await Booking.findAll(
        {
          where: {
            checkInDate: {
              [Op.gte]: new Date(checkInDate)
            },
            checkOutDate: {
              [Op.lte]: new Date(checkOutDate)
            }
          }
        });
    } else {
      bookings = await Booking.findAll();
    }

    if (!bookings) {
      throw new ResourceNotFoundError(`No bookings found`);
    }
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
    const booking = await Booking.findByPk(id);
    if (!booking) {
      throw new ResourceNotFoundError(`No bookings with ${id} found`);
    }
    res.json(booking);
  } catch (error) {
    next(error)
  }
}

export {
  getBookingByRoomId,
  getBookings,
  getBookingById
}