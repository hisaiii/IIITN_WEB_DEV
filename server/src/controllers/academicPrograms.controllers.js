import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { AcademicPrograms } from "../models/academicProgram.model.js";


const createAcademicProgram = asyncHandler(async (req, res, next) => {
    try {
        const { name, degreeType, studentsSeat, description } = req.body;

        if (!name || !degreeType || !studentsSeat) {
            return next(new ApiError(400, "Program Name, Degree Type, and Students Seat are required"));
        }

        let imageUrl = "";
        if (req.file) {
            imageUrl = req.file.path; // Cloudinary auto-generates and stores the image URL
        }

        const program = new AcademicPrograms({
            name,
            degreeType,
            studentsSeat,
            description,
            image: imageUrl,  // Save Cloudinary URL
        });

        await program.save();

        res.status(201).json(new ApiResponse(201, "Academic Program created successfully", program));
    } catch (error) {
        next(error);
    }
});


const getAllAcademicPrograms = asyncHandler(async (req, res, next) => {
    const programs = await AcademicPrograms.find();
    res.status(200).json(new ApiResponse(200, "Academic Programs fetched successfully", programs));
});




const getUniqueDegreeTypes = asyncHandler(async (req, res, next) => {
    try {
        const programs = await AcademicPrograms.find(); // Fetch all academic programs

        if (!programs.length) {
            return next(new ApiError(404, "No academic programs found"));
        }

       
        const groupedPrograms = programs.reduce((acc, program) => {
            if (!acc[program.degreeType]) {
                acc[program.degreeType] = [];
            }
            acc[program.degreeType].push(program);
            return acc;
        }, {});

        res.status(200).json(new ApiResponse(200, "Grouped academic programs fetched successfully", groupedPrograms));
    } catch (error) {
        return next(new ApiError(500, "Internal Server Error"));
    }
});


const deleteAcademicProgram = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const program = await AcademicPrograms.findByIdAndDelete(id);

    if (!program) {
        return next(new ApiError(404, "Academic Program not found"));
    }

    res.status(200).json(new ApiResponse(200, "Academic Program deleted successfully"));
});

export {
    getAllAcademicPrograms,
    getUniqueDegreeTypes,
    createAcademicProgram,
    deleteAcademicProgram
}