import {mongoose,Schema} from "mongoose";

const SectionSchema= new Schema({
    sectionName:{
        type:String,
        required:true
    },
    fields:[{}]
});
const PageSectionConfigSchema= new Schema({
    alias:{
        type:String,
        required:true,
        unique:true

    },
    sections:[SectionSchema],

},
{timestamps:true}
);

const PageSectionConfig = mongoose.model("PageSectionConfig",PageSectionConfigSchema);
export {PageSectionConfig};