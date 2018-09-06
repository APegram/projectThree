import mongoose from "mongoose";
import db from "../../models";
import userSeed from "./userSeed.js";
import attendanceSeed from "./attendanceSeed.js";
import assignmentSeed from "./assignmentSeed.js";
import submissionSeed from "./submissionSeed.js";
import sessionSeed from "./sessionSeed.js";
import moduleSeed from "./moduleSeed.js";
import announcementSeed from "./announcementSeed.js";
import notificationSeed from "./notificationSeed.js";
import requestSeed from "./requestSeed.js";

let seedsNum = 0;

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/ProjectThree"
);

requestSeed.forEach((request, index) => {
    db.Request.create(request).then(dbRequest => {
        db.User.findOneAndUpdate({ email: dbRequest.studentEmail }, { $push: { requests: dbRequest._id } }, { new: true })
            .then(result => {
                if (index === requestSeed.length - 1) {
                    seedsNum++;
                    if (seedsNum === 12) {
                        process.exit(0);
                    }
                }
            }).catch(err => console.log(err));
        db.Session.findOneAndUpdate({ name: dbRequest.sessionName }, { $push: { requests: dbRequest._id } }, { new: true })
            .then(result => {
                if (index === requestSeed.length - 1) {
                    seedsNum++;
                    if (seedsNum === 12) {
                        process.exit(0);
                    }
                }
            }).catch(err => console.log(err));
    }).catch(err => console.log(err));
});

announcementSeed.forEach((announcement, index) => {
    db.Announcement.create(announcement).then(dbAnnouncement => {
        if (index === announcementSeed.length - 1) {
            seedsNum++;
            if (seedsNum === 12) {
                process.exit(0);
            }
        }
    });
});

userSeed.forEach((user, index) => {
    db.User.create(user).then(dbUser => {
        if (index === userSeed.length - 1) {
            seedsNum++;
            if (seedsNum === 12) {
                process.exit(0);
            }
        }
    }).catch(err => console.log(err));
});

sessionSeed.forEach((session, index) => {
    db.Session.create(session).then(dbSession => {
        if (index === sessionSeed.length - 1) {
            seedsNum++;
            if (seedsNum === 12) {
                process.exit(0);
            }
        }
    }).catch(err => console.log(err));
});

assignmentSeed.forEach((assignment, index) => {
    db.Assignment.create(assignment).then(dbAssignment => {
        if (index === assignmentSeed.length - 1) {
            seedsNum++;
            if (seedsNum === 12) {
                process.exit(0);
            }
        }
    }).catch(err => console.log(err));
});

notificationSeed.forEach((notification, index) => {
    db.Notification.create(notification).then(dbNotification => {
        db.User.findOneAndUpdate({ email: dbNotification.userEmail }, { $push: { notifications: dbNotification._id } }, { new: true })
            .then(result => {
                if (index === notificationSeed.length - 1) {
                    seedsNum++;
                }
                if (seedsNum === 12) {
                    process.exit(0);
                }
            }).catch(err => console.log(err));
    }).catch(err => console.log(err));
});

attendanceSeed.forEach((attendance, index) => {
    db.Attendance.create(attendance).then(dbAttendance => {
        db.User.findOneAndUpdate({ email: dbAttendance.studentEmail }, { $push: { attendance: dbAttendance._id } }, { new: true })
            .then(result => {
                if (index === attendanceSeed.length - 1) {
                    seedsNum++;
                    if (seedsNum === 12) {
                        process.exit(0);
                    }
                }
            }).catch(err => console.log(err));
        db.Session.findOneAndUpdate({ name: dbAttendance.sessionName }, { $push: { attendance: dbAttendance._id } }, { new: true })
            .then(result => {
                if (index === attendanceSeed.length - 1) {
                    seedsNum++;
                    if (seedsNum === 12) {
                        process.exit(0);
                    }
                }
            }).catch(err => console.log(err));
    }).catch(err => console.log(err));
});

submissionSeed.forEach((submission, index) => {
    db.Submission.create(submission).then(dbSubmission => {
        db.User.findOneAndUpdate({ email: dbSubmission.studentEmail }, { $push: { submissions: dbSubmission._id } }, { new: true })
            .then(result => {
                if (index === submissionSeed.length - 1) {
                    seedsNum++;
                    if (seedsNum === 12) {
                        process.exit(0);
                    }
                }
            }).catch(err => console.log(err));
        db.Assignment.findOneAndUpdate({ name: dbSubmission.assignmentName }, { $push: { submissions: dbSubmission._id } }, { new: true })
            .then(result => {
                if (index === submissionSeed.length - 1) {
                    seedsNum++;
                    if (seedsNum === 12) {
                        process.exit(0);
                    }
                }
            }).catch(err => console.log(err));
    }).catch(err => console.log(err));
});

moduleSeed.forEach((model, index) => {
    db.Module.create(model).then(dbModule => {
        if (index === moduleSeed.length - 1) {
            seedsNum++
            if (seedsNum === 12) {
                process.exit(0);
            }
        }
    })
});
