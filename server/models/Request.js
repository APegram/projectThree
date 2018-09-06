import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    studentEmail: {
        type: String,
        required: "Student email is required."
    },
    studentName: {
        type: String,
        required: "Student name is required."
    },
    sessionName: {
        type: String,
        required: "Session name is required"
    },
    sessionNum: {
        type: Number,
        required: "Session number is required."
    },
    reason: {
        type: String,
        required: "Request reason is required."
    },
    status: {
        type: String,
        default: "pending"
    }
});

const Request = mongoose.model("Request", RequestSchema);

export default Request;