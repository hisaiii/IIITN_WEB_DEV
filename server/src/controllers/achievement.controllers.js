import { Achievement } from "../models/achivements.model.js";
import { Faculty } from "../models/faculty.model.js";
import { ResearchDomain } from "../models/researchDomain.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { cloudinary } from "../config/cloudinary.config.js";


 const createAchievement = asyncHandler(async (req, res,next) => {
  try {
    const { year, category, name, title, description, relatedLinks, associatedPeople, department, researchDomain, amount } = req.body;

    if (!req.file) throw new ApiError(400, "File not uploaded");

        const fileUrl = req.file.path; // Ensure Cloudinary or Multer provides the path
    const newAchievement = new Achievement({
      year,
      category,
      name,
      title,
      description,
      relatedLinks: JSON.parse(relatedLinks),
      associatedPeople: JSON.parse(associatedPeople),
      department,
      researchDomain,
      image:fileUrl,
      amount: title === "Grant Received" ? amount : null,
    });

    await newAchievement.save();

    // Update Faculty Documents
    if (associatedPeople.length) {
      await Faculty.updateMany(
        { _id: { $in: associatedPeople } },
        { $push: { achievements: newAchievement._id } }
      );
    }

    // Update Research Domain Document
    if (researchDomain) {
      await ResearchDomain.findByIdAndUpdate(
        researchDomain,
        { $push: { achievements: newAchievement._id } }
      );
    }
   res.status(202).json(new ApiResponse(202,"Achievement created succesfully",newAchievement));
  } catch (error) {
      next(error);
  }
});

export {createAchievement}