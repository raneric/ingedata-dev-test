import express from 'express';
import {
  getBookings,
  getBookingById
} from '../controller/booking.controller.js';
import bookingDateValidator from '../validators/booking.validator.js';

const router = express.Router();

router.get('/bookings', bookingDateValidator, getBookings);
router.get('/booking/:id', getBookingById);

export default router;