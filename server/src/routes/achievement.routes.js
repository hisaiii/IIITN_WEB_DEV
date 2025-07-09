import { Router } from "express";
import { upload } from "../middlewares/uploadMiddleware.js";

import { createAchievement } from "../controllers/achievement.controllers.js";
const router = Router();

router.post("/create",upload.single, createAchievement);

export default router;
