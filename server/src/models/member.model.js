import {mongoose,Schema} from "mongoose"

const MembersSchema= new Schema({
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
},
{timestamps:true}
)