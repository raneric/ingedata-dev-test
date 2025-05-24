import express from 'express';
import Booking from '../models/booking.model.js';
import { getBookingByRoomId, getBookings } from '../controller/booking.controller.js';

const router = express.Router();

router.get('/bookings/:roomId', getBookingByRoomId);
router.get('/bookings', getBookings);

export default router;