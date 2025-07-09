import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";

// Routes
import adminRouter from "./src/routes/admin.routes.js";
import alumniRouter from "./src/routes/alumni.routes.js";
import academicProgramRouter from "./src/routes/academicPrograms.routes.js";
import achievementRouter from "./src/routes/achievement.routes.js";
import pageRouter from "./src/routes/page.routes.js";
import pageSectionConfigRouter from "./src/routes/pageSectionConfig.routes.js";

import { ConnectDB } from "./src/db/index.js";
// Middleware
import { errorHandler } from "./src/middlewares/errorHandler.js";

dotenv.config();
const app = express();

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors({
  origin:" https://iiitn-web-dev.onrender.com",
  credentials: true,
}));

ConnectDB()

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

// Static assets (images/pdfs)
app.use(express.static("public"));

const PORT = process.env.PORT || 8000;

// API routes
// app.get("/", (req, res) => {
//   res.json({ college: "IIITN" });
// });
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/alumni", alumniRouter);
app.use("/api/v1/page", pageRouter);
app.use("/api/v1/pageSectionConfig", pageSectionConfigRouter);
app.use("/api/v1/academic-program", academicProgramRouter);
app.use("/api/v1/achievement", achievementRouter);

// Error handler
app.use("/error", errorHandler);

// 🧠 Serve frontend from ../frontend/dist
const frontendPath = path.join(__dirname, "../client/dist");
app.use(express.static(frontendPath));

// For SPA routing
app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
