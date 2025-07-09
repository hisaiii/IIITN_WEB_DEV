import express from "express";
import { createSectionConfig,getAllSectionConfig, getAllSections } from "../controllers/pageSectionConfig.controllers.js";
const router=express.Router();

router.post("/createSection/:alias/:sectionName",createSectionConfig);
router.get("/getAllSectionConfig/:alias",getAllSectionConfig);
router.get("/getAllSections/:alias",getAllSections);

export default router;