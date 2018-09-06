import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CompletedSchema = new Schema({
    studentName: {
        type: String,
        required: "Student email is required."
    },
    studentEmail: {
        type: String,
        required: "Student email is required."
    }
});

const StepSchema = new Schema({
    stepNum: {
        type: Number,
        required: "Step number is required."
    },
    text: {
        type: String,
        trim: true,
        required: "Step text is required."
    },
    completed: [CompletedSchema]
});

const ExerciseSchema = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: "Exercise name is required."
    },
    steps: [StepSchema]
});

const ModuleSchema = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: "Module name is required."
    },
    moduleNum: {
        type: Number,
        required: "Module number is requried."
    },
    exercises: [ExerciseSchema]
});

const Module = mongoose.model("Module", ModuleSchema);

export default Module;