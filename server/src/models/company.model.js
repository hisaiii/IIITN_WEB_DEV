import {mongoose,Schema} from "mongoose";

const CompanySchema = new Schema({
    name: { type: String, required: true },
    logo: { type: String },
    yearsVisited: [{ type: Number }]
});

const Company =mongoose.model("Company",CompanySchema);
export {Company}