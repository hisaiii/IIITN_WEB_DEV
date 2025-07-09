import { mongoose, Schema } from "mongoose";

const AdmissionDegreeSchema= new Schema({
    title:{
        type:String,   //degree type
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    cutoff:[
        {
            name:{
                type:String
            },
            pdf:{
                pdf:String
            }

        }  
    ],
    loanSchemes:[
        {
            name:{
                type:String
            },
            pdf:{
                pdf:String
            }

        }  
    ],
    forms:[
        {
            name:{
                type:String
            },
            pdf:{
                pdf:String
            }

        }  
    ],
    centralFormates:[
        {
            name:{
                type:String
            },
            pdf:{
                pdf:String
            }

        }  
    ],
    InstitueFormates:[
        {
            name:{
                type:String
            },
            pdf:{
                pdf:String
            }

        },
    ],
    AcademicFees:{
        name:{
            type:String,
        },
        pdf:{
            type:String
        }
    },
    HostelFees:{
        name:{
            type:String,
        },
        pdf:{
            type:String
        }
    },
    feesPaymentMethods:{
        upiId:{
            type:String,
        },
        qrCode:{
            type:String
        }
    },
    academicRuleBook:{
        type:String,
        pdf:String

    },
    InstituteRules:{
        type:String,
        pdf:String

    },
    importantLinks:[  //jossalinks ,csabLinks,guestHosuseLinks,Important Notices related to hostel
        {
            name:{
                type:String,
                required:true
            },
            pdf:{
                type:String,
                required:true
            }
        }
    ]
    
    
})


const AdmissionDegree = mongoose.model("AdmissionDegree", AdmissionDegreeSchema);
export { AdmissionDegree };
