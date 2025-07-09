import mongoose,{Schema} from "mongoose"
const PlacementSchema= new Schema({
    year: { type: Number, required: true },
    studentsAppeared:{type:Number,required:true},
    studentsPlaced: { type: Number, required: true },
    highestPackage: { type: Number, required: true },
    averagePackage: { type: Number, required: true },
    companiesVisited: [{ type: String }]
});

PlacementStatistics= mongoose.model("PlacementStatics",PlacementSchema);
export {PlacementStatistics};