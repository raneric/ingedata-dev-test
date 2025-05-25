import express from 'express';
import {
  getBookingByRoomId,
  getBookings,
  getBookingById
} from '../controller/booking.controller.js';
import bookingDateValidator from '../validators/booking.validator.js';

const router = express.Router();

router.get('/bookings/:roomId', getBookingByRoomId);
router.get('/bookings', bookingDateValidator, getBookings);
router.get('/booking/:id', getBookingById);

export default router;