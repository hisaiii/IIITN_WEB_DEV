import mongoose, { Schema } from "mongoose";

const AcademicProgramSchema = new Schema({
    programName: {
         type: String, 
        required: true
     }, 

    degreeType: { 
        type: String,
         enum: ["Undergraduate", "PhD", "Student Exchange"],
         required: true
         },
    department: { 
        type: String, 
        enum: ["CSE", "ECE", "BASIC SCIENCE"], 
        required: true 
    },
    studentsSeat:{
        type:Number,
        required:true},
    description: {
         type: String },
    image: { 
        type: String }, // Image URL
    Links:[   //program Scheme link(pdf)
        {
           name:{
            type:String
           },
           pdf:{
            type:String
           }
        }
    ]
}, 
{ timestamps: true }
);

const AcademicPrograms = mongoose.model("AcademicPrograms", AcademicProgramSchema);
export { AcademicPrograms };
