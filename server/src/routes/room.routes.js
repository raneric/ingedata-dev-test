import express from 'express';
import {
  findAllRooms,
  findAvailableRoomWithinDate,
  findRoom
} from '../controller/room.controller.js';

const router = express.Router();

router.get('/rooms', findAllRooms);
router.get('/room/:id', findRoom);

export default router;