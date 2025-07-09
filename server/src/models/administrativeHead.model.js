import {mongoose,Schema} from "mongoose"

const AdministrativeHeadSchema=new Schema({
    member_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "members", 
        required: true },
  role: { 
    type: String, 
    required: true, 
    enum: ["Director", "Chairman", "Registrar"] // Ensures only valid roles are used
  },
  tenure: { 
    type: String, 
    required: true },
  vision_statement: { // for director only
     type: String }, 
  agenda: { 
    type: String },
  responsibilities: [ // for registrar only
    { 
        type: String }
    ],
  office_location: { 
    type: String }, 
  reports_to: {
     type: String }, 
}, { timestamps: true }
)

const AdministrativeHeads=mongoose.model("AdministrativeHeads",AdministrativeHeadSchema);