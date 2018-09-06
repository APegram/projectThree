import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CheckpointScoreSchema = new Schema({
    studentID: {
        type: Schema.Types.ObjectId,
        required: "Student ID is required." 
    },
    studentName: {
        type: String,
        trim: true,
        required: "Student name is required."
    },
    checkpointName: {
        type: String,
        required: "Checkpoint name is required."
    },
    checkpointID: {
        type: Schema.Types.ObjectId,
        required: "Checkpoint ID is required."
    },
    score: {
        type: Number,
        default: "Not yet graded",
        trim: true,
        required: "Grade is required."
    },
    dateSubmitted: {
        type: Date,
        default: Date.now
    },
});

const CheckpointScore = mongoose.model("CheckpointScore", CheckpointScoreSchema);

export default CheckpointScore;