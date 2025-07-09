import {mongoose,Schema} from "mongoose";
const DepartmentSchema = new Schema({
    name: String, // CSE, ECE, Basic Science
    description: String,
    hod:{
      type:String,
      required:true,
    },
    faculty: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Faculty' }],
    research: {
      domain: { type: String, ref: 'ResearchDomain' },
      projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
      publications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Publication' }]
    },
    staff:[
      
    ]
  });
  
  const Department=mongoose.model("Department",DepartmentSchema);
  export {Department};