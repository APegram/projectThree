import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AnnouncementSchema = new Schema({
    announcementType: {
        type: String,
        required: "Announcement type is required."
    },
    title: {
        type: String,
        required: "Announcement title is required."
    },
    text: {
        type: String,
        required: "Announcement text is required."
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

const Announcement = mongoose.model("Announcement", AnnouncementSchema);

export default Announcement;