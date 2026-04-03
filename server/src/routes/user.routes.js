import express from 'express';
import {
  getUserBookings,
  getUserBooking,
  deleteBooking,
  addBooking,
} from '../controller/user.controller.js';
import validateToken from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/:userId/bookings', validateToken, getUserBookings);
router.get('/:userId/booking/:id', validateToken, getUserBooking);
router.post('/:userId/booking/new', validateToken, addBooking);
router.delete('/:userId/booking/:id', validateToken, deleteBooking);

export default router;
