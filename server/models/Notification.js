import mongoose from "mongoose";
const Schema = mongoose.Schema;

// const ReadSchema = new Schema({
//     userName: {
//         type: String,
//         required: "User name is requried."
//     },
//     userEmail: {
//         type: String,
//         required: "User email is required."
//     },
//     read: {
//         type: Boolean,
//         default: false
//     }
// });

const NotificationSchema = new Schema({
    notificationType: {
        type: String,
        required: "Notification type is required.",
    },
    text: {
        type: String,
        required: "Notification text is required.",
        trim: true
    },
    userEmail: {
        type: String,
        required: "User email is required."
    },
    read: {
        type: Boolean,
        default: false
    }
});

const Notification = mongoose.model("Notification", NotificationSchema);

export default Notification;