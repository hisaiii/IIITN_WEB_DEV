import { mongoose, Schema } from "mongoose";

const AdministrativePeopleSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    contact_number:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true,
    },
    profileImage:{
        type:String
    },
    additionalInfo:[
        {
            education:{
                type:String
            },
            specialization:{
                type:String
            },
            experince:{
                type:String
            }

        }
    ]
})

const AdministrativePeoples= mongoose.model("AdministrativePeoples",AdministrativePeopleSchema);

export {AdministrativePeopleSchema};