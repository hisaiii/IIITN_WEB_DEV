import {mongoose,Schema} from "mongoose";

const ResearchDomainSchema = new Schema({
    name: {
        type:String,
    } ,
    description:{
        type: String,
    },
    department: {
        type: String,
        required: true,
        enum: ["CSE", "ECE", "Basic Science"], 
      },
    researchAreas: [
        {
            title: String,
            description: String,
        },
        ],
    
    faculty: [{ type: mongoose.Schema.Types.ObjectId, ref: "Faculty" }],
    publications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Publication" }]
});
const ResearchDomain = mongoose.model("ResearchDomain", ResearchDomainSchema);
export { ResearchDomain };
