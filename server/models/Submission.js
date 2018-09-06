import mongoose from "mongoose";
const Schema = mongoose.Schema;

const LinkSchema = new Schema({
    url: {
        type: String,
        required: "Link url is required."
    }
});

const CommentSchema = new Schema({
    userName: {
        type: String,
        required: "User name is required."
    },
    email: {
        type: String,
        required: "User email is required."
    },
    text: {
        type: String,
        required: true
    }
});

const SubmissionSchema = new Schema({
    studentName: {
        type: String,
        trim: true,
        required: "Student name is required."
    },
    studentEmail: {
        type: String,
        trim: true,
        required: "Email is required."
    },
    assignmentName: {
        type: String,
        required: "Assignment name is required."
    },
    assignmentNum: {
        type: Number,
        required: "Assignment number is required."
    },
    status: {
        type: String
    },
    grade: {
        type: String,
        default: "Not yet graded",
        trim: true
    },
    dateSubmitted: {
        type: Date,
        default: Date.now
    },
    links : [LinkSchema],
    comments: [CommentSchema]
});

const Submission = mongoose.model("Submissions", SubmissionSchema);

export default Submission;
