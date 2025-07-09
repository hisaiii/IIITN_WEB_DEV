import { mongoose, Schema } from "mongoose";

const AchievementSchema = new Schema(
  {
    year: {
         type: Number, 
         required: true },
    category: { 
      type: String, 
      enum: ["Student", "Faculty", "Other"], 
      required: true 
    },
    name: { 
        type: String, 
        required: true },
    title: {
      type: String,
      enum: [
        "Paper Published",
        "Conference Paper",
        "Journal Paper",
        "Grant Received",
        "Patent Received",
        "Competition Won",
        "Other"
      ],
      required: true,
    },
    description: { type: String, required: true },
    relatedLinks: [{ type: String }],
    associatedPeople: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Faculty" }
    ], // Linking to Faculty
    department: { 
      type: String, 
      enum: ["CSE", "ECE", "BASIC SCIENCE"], 
      required: true 
    },
    image: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      default: null, // Only applicable if title is "Grant Received"
    },
    isActive:{
      type:Boolean,
      default:false
    }
  },
  { timestamps: true }
);

const Achievement = mongoose.model("Achievement", AchievementSchema);
export { Achievement };
