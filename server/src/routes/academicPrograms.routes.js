import { Router } from "express";
import {
    createAcademicProgram,
    deleteAcademicProgram,
    getAllAcademicPrograms,
    getUniqueDegreeTypes
} from "../controllers/academicPrograms.controllers.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = Router();

router.route("/academic").get(getAllAcademicPrograms);


router.route("/degrees").get(getUniqueDegreeTypes);


router.route("/create").post(upload.single("image"), createAcademicProgram);


router.route("/delete/:id").delete(deleteAcademicProgram);

export default router;
