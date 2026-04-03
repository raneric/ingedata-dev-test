import express from 'express';
import { registerMetric } from '../middleware/metrics.middleware.js';
const router = express.Router();

router.get('/metrics', registerMetric);

export default router;
