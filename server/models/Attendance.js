import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AttendanceSchema = new Schema({
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
    presence: {
        type: String,
        required: "Presence is required."
    },
    sessionNum: {
        type: Number,
        required: "Session number is required."
    }
});

const Attendance = mongoose.model("Attendance", AttendanceSchema);

export default Attendance;