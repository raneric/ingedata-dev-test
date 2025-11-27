import express from 'express';
import { login, signin, refreshToken } from '../controller/auth.controller.js';

const router = express.Router();

router.post('/login', login);
router.post('/signin', signin);
router.post('/refresh', refreshToken);

export default router;
