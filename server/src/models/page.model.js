
import {mongoose,Schema} from "mongoose";

const contentSetSchema = new Schema({
        isActive: { 
            type: Boolean, 
            default: true }, 
        fields: [] 

})
const sectionSchema = new Schema({
      sectionName:{
        type:String,
        required:true,
        
      }, 
      contentSets:[contentSetSchema]
})
const pageSchema = new Schema(
    {
    
        alias:{
            type:String,
            unique:true,
            required:true
        },
        sections:[sectionSchema]
    },
    {
        timestamps:true
    })

const Page = mongoose.model("Page",pageSchema);
export {Page}

