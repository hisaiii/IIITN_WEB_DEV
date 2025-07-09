import { Router } from "express";
import { upload } from "../middlewares/uploadMiddleware.js";
import {
  createGalleryItem,
  getAllGalleryItems,
  deleteGalleryItem,
} from "../controllers/campusGallery.controllers.js";

const router = Router();

// ✅ Route to create a new gallery item (Allow multiple images)
router.post("/campus-gallery/create", upload.array("images", 5), createGalleryItem);

// ✅ Route to get all gallery items
router.get("/campus-gallery", getAllGalleryItems);

// ✅ Route to delete a gallery item
router.delete("/campus-gallery/:id", deleteGalleryItem);

export default router;
