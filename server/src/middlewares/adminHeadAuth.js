import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { Admin } from "../models/admin.model.js";
import { ApiError } from "../utils/apiError.js";

// ✅ **Middleware to Verify Admin JWT Token**
export const verifyAdminToken = asyncHandler(async (req, res, next) => {
    const token = req.cookies.accessToken;

    if (!token) {
        return next(new ApiError(401, "Unauthorized! Token not provided."));
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.admin = await Admin.findById(decoded._id).select("-password -refreshToken");

        if (!req.admin) {
            return next(new ApiError(401, "Unauthorized! Admin not found."));
        }

        next();
    } catch (error) {
        return next(new ApiError(403, "Forbidden! Invalid token."));
    }
});
