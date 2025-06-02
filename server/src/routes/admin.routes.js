import express from 'express';

import { getStats, getBookings } from '../controller/admin.controller.js';
const router = express.Router();

router.get('/', getStats);
router.get('/bookings', getBookings);

export default router;