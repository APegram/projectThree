import mongoose from "mongoose";
const Schema = mongoose.Schema;

const InstructionSchema = new Schema ({
    stepNum: {
        type: Number,
        trim: true,
        unique: true,
        required: "Step number is required"
    },
    text: {
        type: String,
        trim: true,
        required: "Instruction text is required."
    }
});

const AssignmentSchema = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: "Assignment name is required."
    },
    assignmentType: {
        type: String,
        trim: true,
        required: "Assignment type is required."
    },
    assignmentNum: {
        type: Number,
        required: "Assignment number is required"
    },
    description: {
        type: String,
        trim: true,
        required: "Assignment description is required."
    },
    dueDate: {
        type: String,
        trim: true,
        required: "Due date is required."
    },
    dateInt: {
        type: Number,
        trim: true
    },
    instructions: [InstructionSchema],
    submissions: [
        {
            type: Schema.Types.ObjectId,
            ref: "Submission"
        }
    ]
});

const Assignment = mongoose.model("Assignment", AssignmentSchema);

export default Assignment;