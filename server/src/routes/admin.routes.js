import express from "express";
import validateToken from "../middleware/authMiddleware.js";

import { getStats, getBookings } from "../controller/admin.controller.js";
const router = express.Router();

// Admin routes for the home page which display rooms stats
router.get("/", validateToken, getStats);

// Admin routes for displaying all booking list with all user info
router.get("/bookings", validateToken, getBookings);

export default router;
