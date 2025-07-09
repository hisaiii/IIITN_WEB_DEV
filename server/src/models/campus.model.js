import mongoose, { Schema } from "mongoose";

const CampusGallerySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    }, // e.g., "Hostel", "Labs", "Sports Complex"

    description: {
      type: String,
      trim: true,
    }, // Short description (optional)

    images: [
      {
        url: { type: String, required: true }, // Cloudinary Image URL
        caption: { type: String, trim: true }, // Optional caption for the image
      },
    ],

    category: {
      type: String,
      enum: ["Hostel", "Labs", "Sports", "Campus", "Events", "Others"],
      required: true,
    }, // Category for easy filtering

    createdAt: {
      type: Date,
      default: Date.now,
    }, // Timestamp for record creation
  },
  { timestamps: true }
);

const CampusGallery = mongoose.model("CampusGallery", CampusGallerySchema);
export { CampusGallery };
