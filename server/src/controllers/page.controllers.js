
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Page } from "../models/page.model.js";

const getAllPages =asyncHandler(async (req,res,next)=>{
    try {
        const pages=await Page.find();
        if(!pages){
            throw new ApiError(404,"No pages found");
        }
        res.status(201).json(new ApiResponse(201,"Pages fetched",pages))
        
    } catch (error) {
        next(error);
    }
})
const createPage =asyncHandler(async(req,res,next)=>{
    try {
        const {alias}=req.params;
        const page=await Page.create({
            alias,
            sections:[]
        });
        if(!page){
            throw new ApiError(404,"Page not created ! Internal server error");
        }
        return res.status(202).json(new ApiResponse(202,"Page created succesfully"));
    } catch (error) {
        next(error);
    }
})
const getPage = asyncHandler(async(req,res,next)=>{
    try {
        const {alias}=req.params;
        const page=await Page.findOne({alias});
        if(!page){
            throw new ApiError(404,"Page not found");
        }

        res.status(200).json(new ApiResponse(200,"Page Successfully fetched",page))
        
    } catch (error) {
        next(error);
        
    }
});

const getAllSections = asyncHandler(async (req, res, next) => {
    try {
        const { alias} = req.params;
        const page = await Page.findOne({ alias });
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
const getSection = asyncHandler(async (req, res, next) => {
    try {
        const { alias, sectionName } = req.params;
        const page = await Page.findOne({ alias });
        if (!page) throw new ApiError(404, "Page not found");

        let sectionIndex = page.sections.findIndex((sec) => sec.sectionName === sectionName);
        if(sectionIndex==-1){
            page.sections.push({sectionName,contentSets:[]});
            sectionIndex=page.sections.length - 1;
        }
        let section=page.sections[sectionIndex];
        // console.log("this is section",section); 
        res.status(200).json(new ApiResponse(200, "Section fetched successfully", section));
    } catch (error) {
        next(error);
    }
});

const getSectionsActiveSet = asyncHandler(async(req,res,next)=>{
    try {
        const {alias,sectionName}=req.params;
        // console.log("this is alias",alias,"this is section Name",sectionName);
        if(!sectionName)
         throw new ApiError(401,"Provide section Name");
        const page=await Page.findOne({alias});
        if(!page){
            throw new ApiError(401,"Page not found");
        }
        const section=page.sections.find(sec=>sec.sectionName===sectionName);
        if(!section){
            throw new ApiError(401,"Section not found");
        }
        // console.log("this is section",section);
        let data={};
        let contentSet={};
        if(section.contentSets?.length){
           contentSet= section.contentSets.find((set)=>set.isActive== true);     
        }
        // console.log("this is active set",contentSet);
        if(contentSet?.fields?.length){
            contentSet.fields.forEach((field)=>{
                if(field.type==="image"){
                    data[field.field]=field.url;
                    // console.log("this is field",field.field ,field.url)
                }else{
                    data[field.field]=field.value;
                    // console.log("this is field",field.field ,field.value)
                }
                ;
            });
        }
        
        return res.status(202).json(new ApiResponse(202,"Content fetched successfully",data));
        
    } catch (error) {
        next(error);
    }
})
const createSection = asyncHandler(async(req,res,next)=>{
    try {
        const {alias,sectionName}=req.params;
        const {sectionData} =req.body;
        const page=await Page.findOne({alias});
        if(!page){
            page=await Page.create({
              alias ,
              sections:[]
        })
        }
        page.sections.push({sectionName:sectionName,contentSets:[]});
        await page.save();
        res.status(200).json(new ApiResponse(200,`${sectionName} created successfully`,page))
        
    } catch (error) {
        next(error);
        
    }
})

const editSection =asyncHandler(async(req,res,next)=>{
     try {
           const {alias,sectionName} =req.params;
           const {content}=req.body;

           const page=await Page.findOne({alias});
        //    console.log(page);
           const section=page.sections.find(sec=>sec.sectionType===sectionName);
           if(!section){
            throw new ApiError(404,"Section not found !please create section first");
           }
           section.content=content;
           await page.save();
           res.status(201).json(new ApiResponse(201,`${sectionName} updated successfully`,page))

     } catch (error) {
         next(error);
     }
})

const deleteSection = asyncHandler(async(req,res,next)=>{
    try {
          const{alias,sectionName}=req.params;
          const page=await Page.findOne({alias});
          if(!page){
            throw new ApiError(404,"Page not found");
          }
          page.sections=page.sections.filter(section=>section.sectionName!==sectionName);
          await page.save();
          res.status(200).json(new ApiResponse(200,`${sectionName} deleted successfully`,));

        
    } catch (error) {
        next(error);
        
    }
})



const addContentSet = asyncHandler(async (req, res, next) => {
    try {
        const { alias, sectionName } = req.params;
        const { formData } = req.body;

        // console.log("data  from frontend",formData);
        // console.log("alias",alias,"section Name",sectionName);
        // console.log("Files received:", req.files);

        if(!sectionName){
            throw new ApiError(404,"Please provide sectionName");
        }
       
        let parsedFields=[];
        if(formData){
           parsedFields = typeof formData==="string" ? JSON.parse(formData):formData;
        }
        if (!Array.isArray(parsedFields)) {
            parsedFields = [];
        }

        if(req.files?.length>0){
             req.files.forEach((file,index)=>{
                // console.log(`this is file ${file.path}`);
                parsedFields.push({
                    type:"image",
                    field:`image-${index+1}`,
                    url:file.path
                });
             });
          
        }
        
            
        // Find or create the page
        let page = await Page.findOne({ alias });
        if (!page) {
            page = new Page({ alias, sections: [] });
        }

        // Find or create the section
        let sectionIndex= page.sections.findIndex((sec)=>sec.sectionName==sectionName);
        if(sectionIndex==-1){
            page.sections.push({sectionName,contentSets:[]});
            sectionIndex=page.sections.length -1;

        }
        
        // console.log(`parsedfields is parsedFields`,JSON.stringify(parsedFields,null,2));
        const newContentSet={
            isActive:true,
            fields:parsedFields
        }
         
        // console.log(`content to be added `,JSON.stringify(newContentSet,null,2));

        // Add content to the section
        page.sections[sectionIndex].contentSets.push(newContentSet);
        await page.save();

        res.status(201).json(new ApiResponse(200, "Content added successfully", page));
    } catch (error) {
        next(error);
    }
});


const editContentSet =asyncHandler(async(req,res,next)=>{
    try {
        const {alias,sectionName}=req.params;
        const {contentSetId,updatedContent}=req.body;
        const page = await Page.findOne({alias});
        if(!page){
            throw new ApiError(404,"Page not found");
        }
        const section = page.sections.find((sec)=>sec.sectionName===sectionName);
        if(!section){
            throw new ApiError(401,"Section not found");
        }
        const index=section.contentSets.findIndex((item)=>item._id.toString()===contentSetId);
        if(index==-1){
            throw new ApiError(404,"Content not found");
        }
        section.contentSets[index]=updatedContent;
        await page.save();
        res.status(200).json(new ApiResponse(200,"Content edited successfully",page))

    } catch (error) {
        next(error);
    }
})


const deleteContentSet =asyncHandler(async(req,res,next)=>{
    try {
        const {alias,sectionName,contentSetId}=req.params;
        const page = await Page.findOne({alias});
        if(!page){
            throw new ApiError(404,"Page not found");
        }
        const section = page.sections.find((sec)=>sec.sectionName===sectionName);
        if(!section){
            throw new ApiError(401,"Section not found");
        }
        section.contentSets = section.contentSets.filter((item)=>item._id.toString()!=contentSetId);
       
        await page.save();
        res.status(200).json(new ApiResponse(200,"Content deleted successfully",page))

    } catch (error) {
        next(error);
    }
});

// admin.page.controllers.js
const setActiveStatus = asyncHandler(async (req, res, next) => {
    try {
        const { alias, sectionName, contentSetId } = req.params;
        const { isActive } = req.body; // Boolean to toggle visibility
        let page = await Page.findOne({ alias });
        if (!page) throw new ApiError(404, "Page not found");

        const section = page.sections.find(sec => sec.sectionName === sectionName);
        if (!section) throw new ApiError(404, "Section not found");

        const content = section.contentSets.find(item => item._id.toString() === contentSetId);
        if (!content) throw new ApiError(404, "Content not found");
        // console.log("this is content visibility and content",content.isVisible,content);

        content.isActive = isActive !== undefined ? isActive : !content.isActive;
        await page.save();
        // console.log("after toggel content",content);
        res.status(200).json(new ApiResponse(200, "Content selection updated", content));
    } catch (error) {
        next(error);
    }
});



// GET /api/v1/page/home/latest
const getHomepageLatest = async (req, res, next) => {
    try {
        const page = await Page.findOne({ alias: "latest" });
        if (!page) throw new ApiError(404, "Page not found");

        const visibleSections = page.sections.map(section => ({
            sectionType: section.sectionType,
            content: section.content.filter(item => item.isVisible).slice(0, 5) // Limit to 5 items
        }));

        res.status(200).json(new ApiResponse(200, "Homepage latest fetched", visibleSections));
    } catch (error) {
        next(error);
    }
};

// GET /api/v1/page/latest/:sectionName
const getLatestSection = async (req, res, next) => {
    try {
        const { sectionName } = req.params;
        const page = await Page.findOne({ alias: "latest" });
        if (!page) throw new ApiError(404, "Page not found");

        const section = page.sections.find(sec => sec.sectionType === sectionName);
        if (!section) throw new ApiError(404, "Section not found");

        res.status(200).json(new ApiResponse(200, "All section content fetched", section.content));
    } catch (error) {
        next(error);
    }
};


export{
    getAllPages,
    createPage,
    getPage,
    getSection,
    getSectionsActiveSet,
    createSection,
    editSection,
    deleteSection,
    addContentSet,
    editContentSet,
    deleteContentSet,
    setActiveStatus,
    getHomepageLatest,
    getLatestSection,
    getAllSections
}