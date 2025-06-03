import express from 'express';
import {
  getUserBookings,
  getUserBooking,
  deleteBooking,
  addBooking
} from '../controller/user.controller.js';

const router = express.Router();

router.get('/:userId/bookings', getUserBookings);
router.get('/:userId/booking/:id', getUserBooking);
router.post('/:userId/booking/new', addBooking);
router.delete('/:userId/booking/:id', deleteBooking);

export default router;