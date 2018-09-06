import mongoose from "mongoose";
const Schema = mongoose.Schema;

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

const SessionSchema = new Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        required: "Session name is required."
    },
    sessionType: {
        type: String,
        default: "Academic"
    },
    date: {
        type: String,
        required: "Session date is required."
    },
    dateInt: {
        type: Number
    },
    sessionNum: {
        type: Number
    },
    status: {
        type: String,
        default: "Upcoming"
    },
    description: {
        type: String,
        trim: true,
        required: "Session description is required."
    },
    videoLink: {
        type: String,
        trim: true
    },
    comments: [CommentSchema],
    attendance: [
        {
            type: Schema.Types.ObjectId,
            ref: "Attendance"
        }
    ],
    requests: [
        {
            type: Schema.Types.ObjectId,
            ref: "Request"
        }
    ]
});

const Session = mongoose.model("Session", SessionSchema);

export default Session;