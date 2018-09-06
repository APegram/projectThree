import User from "../models/User.js";
import Attendance from "../models/Attendance.js";
import Submission from "../models/Submission.js";
import Assignment from "../models/Assignment.js";
import Session from "../models/Session.js";
import Checkpoint from "../models/Checkpoint.js";
import CheckpointScore from "../models/CheckpointScore.js";
import Module from "../models/Module.js";
import Announcement from "../models/Announcement.js";
import Notification from "../models/Notification.js";
import Request from "../models/Request.js";

const db = {User, Attendance, Submission, Assignment, Session, Checkpoint, CheckpointScore, Module, Announcement, Notification, Request};

export default db;
