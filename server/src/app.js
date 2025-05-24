import express from 'express';
import cors from 'cors'
import roomRouter from './routes/room.routes.js';
import bookingRouter from './routes/booking.routes.js'
import errorHandler from './middleware/error.middleware.js'
const app = express();

// Configurations middlewares 
app.use(express.json());
app.use(cors());

// Routes middlewares 
app.use('/', roomRouter);
app.use('/', bookingRouter);

// Error handling middleware
app.use(errorHandler);

export default app;