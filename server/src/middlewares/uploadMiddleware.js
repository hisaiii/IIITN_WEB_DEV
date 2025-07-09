import { CloudinaryStorage } from "multer-storage-cloudinary";
import { cloudinary } from "../config/cloudinary.config.js";
import multer from "multer";

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
        const folder = file.mimetype === "application/pdf" ? "pdfs" : "images";
        return {
            folder: folder,
            resource_type: file.mimetype === "application/pdf" ? "raw" : "image",
            format: file.mimetype === "application/pdf" ? "pdf" : "webp",
            public_id: `${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`
        };
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB Limit
    fileFilter: (req, file, cb) => {
        const allowedTypes = ["image/jpeg", "image/png", "image/webp", "application/pdf"];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Invalid file type. Only JPEG, PNG, WEBP, and PDF are allowed."));
        }
    }
});

export { upload };
