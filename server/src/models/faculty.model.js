import { mongoose, Schema } from "mongoose";

const FacultySchema = new Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  contact: { type: String },
  email: { type: String, required: true, unique: true },
  socials: {
    linkedin: { type: String },
    googleScholar: { type: String },
    researchGate: { type: String },
  },
  education: [{ type: String }],
  experience: [{ type: String }],
  department: { type: String, enum: ["CSE", "ECE", "BASIC SCIENCE"], required: true }, // No need for ObjectId
  researchDomains: [{ type: mongoose.Schema.Types.ObjectId, ref: "ResearchDomain" }], // Connected with Research Domain
  achievements: [{ type: mongoose.Schema.Types.ObjectId, ref: "Achievement" }], // References achievements
  irinsProfileLink: { type: String },
});

const Faculty = mongoose.model("Faculty", FacultySchema);
export { Faculty };
