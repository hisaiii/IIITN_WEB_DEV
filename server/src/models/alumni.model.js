import mongoose, { Schema } from "mongoose";

const AlumniSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    batch: {
      type: String,
      required: true,
      trim: true,
    },
    degree: {
      type: String,
      enum: ["B.Tech", "M.Tech", "PhD"],
      required: true,
    },
    department: {
      type: String,
      enum: ["CSE", "ECE", "AI", "Other"],
      required: true,
    },
    currentPosition: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    linkedIn: {
      type: String,
      trim: true,
      lowercase: true,
      match: [/^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/, "Invalid LinkedIn URL"],
    },
    achievements: {
      type: [String], 
    },
    profileImage: {
      type: String, 
      trim: true,
    },
  },
  {
    timestamps: true, 
  }
);


AlumniSchema.index({ name: 1, batch: 1, department: 1 });

const Alumni = mongoose.model("Alumni", AlumniSchema);
export { Alumni };
