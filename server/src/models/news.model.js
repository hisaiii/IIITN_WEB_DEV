import { mongoose,Schema } from "mongoose";

const NewsSchema = new Schema({
    title: { 
        type: String, 
        required: true },
    description: { 
        type: String, 
        required: true },
    image: { 
        type: String },
    link:{
        type:String},
    createdAt: { 
        type: Date, 
        default: Date.now },
    showOnHome:{
        type:Boolean,
        default:false
    }
});

const News = mongoose.model("News",NewsSchema)