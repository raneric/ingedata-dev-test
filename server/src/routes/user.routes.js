import express from 'express';
import {
  getUserBookings,
  getUserBooking,
  deleteBooking
} from '../controller/user.controller.js';

const router = express.Router();

router.get('/:userId/bookings', getUserBookings);
router.get('/:userId/booking/:id', getUserBooking);
router.delete('/:userId/booking/:id', deleteBooking);

export default router;