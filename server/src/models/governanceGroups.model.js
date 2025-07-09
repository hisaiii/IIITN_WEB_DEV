import {mongoose,Schema} from "mongoose"
const GovernanceGroupsSchema= new Schema({
    type: { 
        type: String, 
        required: true, 
        enum: ["BoG", "Committee", "Senate"] // Ensures only valid types are used
      },
      name: { 
        type: String,
        required: true }, // Name of the group (e.g., "Finance Committee", "Board of Governors")
      members: [
        {
          member_id: { 
            type: mongoose.Schema.Types.ObjectId,
             ref: "members", 
            required: true },
          role: { 
            type: String,
             required: true }, // Chairperson, Member, Secretary, etc.
        }
      ],

      term_period: { 
        type: String }, 

      description: { 
        type: String }, 
    }, { timestamps: true }

)

const GovernanceGroups = mongoose.model("GovernanceGroups",GovernanceGroupsSchema);