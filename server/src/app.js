import express from 'express';
import roomRouter from './routes/RoomRoute.js';

const app = express();

app.use('/', roomRouter);

export default app;