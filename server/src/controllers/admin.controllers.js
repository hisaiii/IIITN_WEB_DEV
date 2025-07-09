import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Admin } from "../models/admin.model.js";
import jwt from "jsonwebtoken";

// ✅ **Predefined Admin Credentials**
const PREDEFINED_ADMIN = {
    email: "admin@iiitn.ac.in",
    password: "admin@iiitn",
};

// ✅ **Generate Access & Refresh Tokens**
const generateTokens = async (adminId) => {
    const admin = await Admin.findById(adminId);
    const accessToken = jwt.sign(
        { _id: admin._id, email: admin.email, role: admin.role },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );

    const refreshToken = jwt.sign(
        { _id: admin._id, email: admin.email },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );

    admin.refreshToken = refreshToken;
    await admin.save();
    return { accessToken, refreshToken };
};

// ✅ **Admin Login**
export const handleAdminLogin = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    
    if (email !== PREDEFINED_ADMIN.email || password !== PREDEFINED_ADMIN.password) {
        return next(new ApiError(401, "Invalid admin credentials!"));
    }

    // 🔹 **Find Admin in Database**
    let admin = await Admin.findOne({ email });

    // 🔹 **Create Admin If Not Exists**
    if (!admin) {
        admin = new Admin({
            name: "Super Admin",
            email: PREDEFINED_ADMIN.email,
            password: PREDEFINED_ADMIN.password,
            role: "admin-head",
        });
        await admin.save();
    }

    // 🔹 **Generate Tokens**
    const { accessToken, refreshToken } = await generateTokens(admin._id);

    // 🔹 **Set Secure Cookies**
    const isProduction = process.env.NODE_ENV === "production";
    const cookieOptions = {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "None" : "Lax",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 Days
    };

    return res
        .status(200)
        .cookie("accessToken", accessToken, cookieOptions)
        .cookie("refreshToken", refreshToken, cookieOptions)
        .json(new ApiResponse(200, "Admin login successful", { admin }));
});

// ✅ **Show Admin Profile**
export const showAdminProfile = asyncHandler(async (req, res) => {
    const admin = await Admin.findById(req.admin._id).select("-password -refreshToken");
    res.status(200).json(new ApiResponse(200, "Admin profile fetched", admin));
});

// ✅ **Logout Admin**
export const logoutAdmin = asyncHandler(async (req, res) => {
    res.clearCookie("accessToken", { httpOnly: true, sameSite: "Lax" });
    res.clearCookie("refreshToken", { httpOnly: true, sameSite: "Lax" });

    res.status(200).json(new ApiResponse(200, "Logged out successfully"));
});
