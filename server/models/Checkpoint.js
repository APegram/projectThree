import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    answerNum: {
        type: Number,
        required: "Answer number is required"
    },
    correct: {
        type: Boolean,
        required: "Answer correct is required."
    }
});

const QuestionSchema = new Schema({
    questionNum: {
        type: Number,
        required: "Question number is required"
    },
    text: {
        type: String,
        required: "Question text is required."
    },
    answers: [AnswerSchema]
});

const CheckpointSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Checkpoint name is required."
    },
    description: {
        type: String,
        required: "Checkpoint description is required.",
        trim: true
    },
    dueDate: {
        type: Date,
        required: "Due date is required."
    },
    questions: [QuestionSchema],
    scores: [
        {
            type: Schema.Types.ObjectId,
            ref: "CheckpointScore"
        }
    ]
});

const Checkpoint = mongoose.model("Checkpoint", CheckpointSchema);

export default Checkpoint;