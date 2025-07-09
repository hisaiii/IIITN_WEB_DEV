import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asynHandler.js";
import { Page } from "../models/page.model.js";
import { cloudinary } from "../config/cloudinary.config.js";


const uploadFile = asyncHandler(async (req, res, next) => {
    try {
        const { alias, sectionName, type } = req.params; // <-- type is optional
        const { heading, description } = req.body;

        let page = await Page.findOne({ alias });
        if (!page) {
            page = new Page({ alias, sections: [] });
        }

        let section = page.sections.find((sec) => sec.sectionType === sectionName);
        if (!section) {
            section = { sectionType: sectionName, content: [] };
            page.sections.push(section);
        }

        // 📝 **Text Upload**
        if (!type) {
            section.content.push({ type: "text", heading, description, isVisible: true });
        } else {
            // 📂 **File Upload (Image/PDF)**
            if (!req.file) {
                throw new ApiError(401, "No file uploaded");
            }
            const fileUrl = req.file.path;
            const contentType = req.file.mimetype.includes("pdf") ? "pdf" : "image";
            section.content.push({ type: contentType, value: fileUrl, isVisible: true });
        }

        await page.save();
        res.status(201).json(new ApiResponse(201, "File uploaded successfully", { page }));

    } catch (error) {
        next(error);
    }
});

const uploadContent = asyncHandler(async (req, res, next) => {
    try {
        const { alias, sectionName } = req.params;
        const { heading, description } = req.body;

        if (!req.file) throw new ApiError(400, "File not uploaded");

        const fileUrl = req.file.path; // Ensure Cloudinary or Multer provides the path

        // Save to MongoDB
        const page = await Page.findOne({ alias });
        const section = page.sections.find((sec) => sec.sectionType === sectionName);
        section.content.push({
            type: "image-text",
            value: fileUrl,
            heading,
            description,
            isVisible: true
        });

        await page.save();
        res.status(201).json(new ApiResponse(201, "Content uploaded successfully"));
    } catch (error) {
        next(error);
    }
});



const deleteFile = asyncHandler(async (req, res, next) => {
    try {
        const { alias, sectionName, contentId } = req.params;

        let page = await Page.findOne({ alias });
        if (!page) {
            throw new ApiError(404, "Page not found");
        }

        // Find the section
        let section = page.sections.find((sec) => sec.sectionType === sectionName);
        if (!section) {
            throw new ApiError(404, "Section not found");
        }

        // Find the content within the section
        const content = section.content.find((item) => item._id.toString() === contentId);
        if (!content) {
            throw new ApiError(404, "Content not found");
        }

        // Delete the file from Cloudinary if it's not text
        if (content.type !== "text") {
            const public_id = content.value.split("/").pop().split(".")[0];
            const resource_type = content.type === "pdf" ? "raw" : "image";
            await cloudinary.uploader.destroy(public_id, { resource_type });
        }

        // Remove the content from the section
        section.content = section.content.filter((item) => item._id.toString() !== contentId);

        await page.save();
        res.status(200).json(new ApiResponse(200, "File deleted successfully"));
    } catch (error) {
        next(error);
    }
});
const uploadImageWithText = asyncHandler(async (req, res, next) => {
    try {


        const { alias, sectionName } = req.params;
        const { heading, description } = req.body;

        const page = await Page.findOne({ alias });
        if (!page) throw new ApiError(404, "Page not found");

        let section = page.sections.find((sec) => sec.sectionType === sectionName);
        if (!section) {
            section = { sectionType: sectionName, content: [] };
            page.sections.push(section);
        }

        const fileUrl = req.file ? req.file.path : null;

        const content = {
            type: fileUrl ? "image-text" : "text",
            value: fileUrl || "",
            heading: heading || "",
            description: description || "",
            isVisible: true
        };

        section.content.push(content);
        await page.save();

        res.status(201).json(new ApiResponse(201, "Content uploaded successfully", content));
    } catch (error) {
        next(error);
    }
});


export {uploadFile,uploadContent,deleteFile,uploadImageWithText}