import express from 'express';
import { getAllRooms, getRoomById } from '../controller/roomController.js';

const router = express.Router();

router.get('/rooms', getAllRooms);
router.get('/room/:id', getRoomById);

export default router;