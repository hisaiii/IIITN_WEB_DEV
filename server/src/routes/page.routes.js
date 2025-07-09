import express from "express";
import { addContentSet,deleteContentSet,deleteSection,editContentSet,getPage,getSection,getAllPages,getAllSections,setActiveStatus, createSection, createPage, getSectionsActiveSet } from "../controllers/page.controllers.js";
import {upload}from "../middlewares/uploadMiddleware.js"; // Middleware for handling file uploads

const router = express.Router();

// Route to add contentSet (Handles text fields & file uploads)
router.get("/getAllPages",getAllPages);
router.get("/getAllSections/:alias",getAllSections);
router.post("/createPage/:alias",createPage);
router.get("/getPage/:alias",getPage);
router.get("/getSection/:alias/:sectionName",getSection);
router.get("/getSectionsActiveSet/:alias/:sectionName",getSectionsActiveSet);
router.delete("/createSection/:alias/:sectionName",createSection);
router.delete("/deleteSection/:alias/:sectionName",deleteSection);
router.post("/addContentSet/:alias/:sectionName", upload.any(),addContentSet);
router.delete("/deleteContentSet/:alias/:sectionName/:contentSetId",deleteContentSet);
router.put("/editContentSet/:alias/:sectionName", upload.any(),editContentSet);
router.patch("/setActiveStatus/:alias/:sectionName/:contentSetId", setActiveStatus);

export default router;
