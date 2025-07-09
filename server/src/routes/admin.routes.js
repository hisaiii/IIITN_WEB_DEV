import { Router } from "express";

import { handleAdminLogin, showAdminProfile, logoutAdmin } from "../controllers/admin.controllers.js";

import { verifyAdminToken } from "../middlewares/adminHeadAuth.js";

const router = Router();

// ✅ **Admin Authentication Routes**
router.post("/login", handleAdminLogin);                  // Admin Login
router.get("/profile", verifyAdminToken, showAdminProfile); // Get Admin Profile (Protected)
router.post("/logout", verifyAdminToken, logoutAdmin);      // Logout Admin (Protected)


export default router;
