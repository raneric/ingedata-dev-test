import express from 'express';
import {
  getBookings,
  getBookingById
} from '../controller/booking.controller.js';
import bookingDateValidator from '../validators/booking.validator.js';

const router = express.Router();

// Route dedicated for getting all bookings within date if specified
router.get('/bookings', bookingDateValidator, getBookings);

// Route for getting a specific booking
router.get('/booking/:id', getBookingById);

export default router;