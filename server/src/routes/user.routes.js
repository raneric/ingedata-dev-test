import express from 'express';
import {
  getUserBookings,
  getUserBooking
} from '../controller/user.controller.js';

const router = express.Router();

router.get('/:userId/bookings', getUserBookings);
router.get('/:userId/booking/:id', getUserBooking);
export default router;