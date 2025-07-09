import { Router } from "express";
import { createAlumni, uploadAlumniImage } from "../controllers/alumni.controllers.js";

const router = Router();

router.post("/create", uploadAlumniImage, createAlumni);

export default router;
