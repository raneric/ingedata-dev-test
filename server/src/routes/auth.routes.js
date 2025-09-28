import express from "express";
import { login, signin } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/login", login);
router.post("/signin", signin);

export default router;
