import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Alumni } from "../models/alumni.model.js";
import { upload } from "../middlewares/uploadMiddleware.js"; // Multer middleware

const createAlumni = asyncHandler(async (req, res, next) => {
  const { name, batch, degree, department, currentPosition, company, location, linkedIn, achievements } = req.body;

  if (!name || !batch || !degree || !department || !currentPosition) {
    return next(new ApiError(400, "All required fields must be filled"));
  }

  const profileImage = req.file ? req.file.path : null; // Get file URL if uploaded

  const alumni = await Alumni.create({
    name,
    batch,
    degree,
    department,
    currentPosition,
    company,
    location,
    linkedIn,
    achievements: achievements ? achievements.split(",").map((item) => item.trim()) : [],
    profileImage,
  });

  res.status(201).json(new ApiResponse(201, "Alumni record created successfully", alumni));
});

// ✅ Multer middleware for image upload
const uploadAlumniImage = upload.single("profileImage");

export { createAlumni, uploadAlumniImage };
