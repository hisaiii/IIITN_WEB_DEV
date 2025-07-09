import { CampusGallery } from "../models/campusGallery.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// ✅ Create a new gallery item (allows multiple image uploads)
export const createGalleryItem = asyncHandler(async (req, res) => {
    const { title, description, category } = req.body;

    if (!title || !category || !req.files || req.files.length === 0) {
        throw new ApiError(400, "Title, category, and at least one image are required");
    }

    const imageUrls = req.files.map((file) => ({
        url: file.path, // Cloudinary URL
        caption: req.body.caption || "",
    }));

    const newGalleryItem = await CampusGallery.create({
        title,
        description,
        category,
        images: imageUrls,
    });

    res.status(201).json(new ApiResponse(201, "Gallery item created successfully", newGalleryItem));
});
