import express from 'express';
import {
  findAllRooms,
  findRoom,
  findRoomBookings
} from '../controller/room.controller.js';

const router = express.Router();

router.get('/rooms', findAllRooms);
router.get('/room/:id', findRoom);
router.get('/room/:id/bookings', findRoomBookings);
export default router;