import {mongoose,Schema} from "mongoose";

const EventSchema = new Schema({
   title:{
    type:String,
    required:true,
   },
   description:{
    type:String,
   },
   image:{
    type:String,
    required:true
   },
   eventDate:{
    type:Date,
    required:true
   },
   eventTime:{
    type:String
   },
   expiryDate:{
    type:Date
   },
   showOnHome:{
    type:Boolean,
    default:false
   }
});
const Event = mongoose.model("Event", EventSchema);
export { Event };