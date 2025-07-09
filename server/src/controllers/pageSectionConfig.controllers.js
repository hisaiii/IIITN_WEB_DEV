import { PageSectionConfig } from "../models/pageSectionConfig.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createSectionConfig = asyncHandler(async (req, res, next) => {
    try {
        const { sectionName, alias } = req.params;
        let { sectionData } = req.body;


        // Ensure all fields are provided
        if (!sectionName || !alias || !sectionData) {
            throw new ApiError(400, "All fields are required");
        }

        // Parse sectionData safely
        sectionData = typeof sectionData === "string" ? JSON.parse(sectionData) : sectionData;

        if (!Array.isArray(sectionData)) {
            throw new ApiError(400, "Invalid section data format");
        }

        // Find the page by alias or create a new one
        let page = await PageSectionConfig.findOne({ alias });
        if (!page) {
            page = await PageSectionConfig.create({ alias, sections: [] });
        }

        // Find the section or create a new one
        let sectionIndex = page.sections.findIndex((sec) => sec.sectionName === sectionName);
        if (sectionIndex === -1) {
            page.sections.push({ sectionName, fields: [] });
            sectionIndex = page.sections.length - 1;
        }

        // Append fields to the section
        if (sectionData.length > 0) {
            page.sections[sectionIndex].fields.push(...sectionData);
        }

        // Save to DB
        await page.save();

        return res.status(201).json(new ApiResponse(201, "Section created successfully", page.sections[sectionIndex]));
    } catch (error) {
        next(error);
    }
});


const getAllSectionConfig =asyncHandler(async(req,res,next)=>{
    try {
        const {alias}= req.params;
        const page=await PageSectionConfig.findOne({alias});
        if(!page){
            throw new ApiError(401,`PageSectionConfig not found for ${alias} page`,);
        }

        let sections={};
        page.sections.map((section)=>{
            sections[section.sectionName]=section.fields;
        });
        return res.status(202).json(new ApiResponse(202,"Sections config Schema fetched successfully",sections));
        
    } catch (error) {
        next(error);
    }
})
const getAllSections = asyncHandler(async (req, res, next) => {
    try {
        const { alias} = req.params;
        const page = await PageSectionConfig.findOne({ alias });
        // console.log("this is page",page);
        if (!page) throw new ApiError(404, "Page not found");
        let sections=[];
           page.sections.forEach((section)=>{
             sections.push(section.sectionName)
         });
        // console.log("this is section",section); 
        res.status(200).json(new ApiResponse(200, "Section fetched successfully", sections));
    } catch (error) {
        next(error);
    }
});

export {createSectionConfig,getAllSectionConfig,getAllSections}