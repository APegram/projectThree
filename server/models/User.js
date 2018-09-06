import mongoose from "mongoose";
import bcrypt from "bcrypt";
import db from "../models";
import assignmentSeed from "./Seeds/assignmentSeed";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  admin: {
    type: Boolean,
    default: false
  },
  firstName: {
    type: String,
    trim: true,
    required: "A first name is required."
  },
  lastName: {
    type: String,
    trim: true,
    required: "A last name is required."
  },
  fullName: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: "Email address is required",
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    trim: true,
    required: "A password is required.",
    validate: [
      function (input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  cohort: {
    type: String
  },
  gitHub: {
    type: String,
    trim: true
  },
  linkedIn: {
    type: String,
    trim: true
  },
  userCreated: {
    type: Date,
    default: Date.now
  },
  notifications: [
    {
      type: Schema.Types.ObjectId,
      ref: "Notification"
    }
  ],
  settings: {
    quote: {
      type: String,
      default: "I love UNCC Code!"
    },
    cardColor: {
      type: String,
      default: "aqua-gradient"
    },
    image: {
      type: String,
      default: "https://mdbootstrap.com/img/Photos/Others/photo6.jpg"
    }
  },
  attendance: [
    {
      type: Schema.Types.ObjectId,
      ref: "Attendance"
    }
  ],
  submissions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Submissions"
    }
  ],
  requests: [
    {
      type: Schema.Types.ObjectId,
      ref: "Request"
    }
  ],
  checkpoints: [
    {
      type: Schema.Types.ObjectId,
      ref: "CheckpointScore"
    }
  ]
});

UserSchema.methods.comparePassword = function comparePassword(
  password,
  callback
) {
  bcrypt.compare(password, this.password, callback);
};

UserSchema.pre("save", function saveHook(next) {
  const user = this;

  if (!user.isModified("password")) return next();

  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) {
      return next(saltError);
    }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) {
        return next(hashError);
      }

      user.password = hash;

      return next();
    });
  });
});

// UserSchema.post("save", function saveHook(doc, next) {
//   db.Session.find({}).then(sessions => {
//     sessions.forEach(session => {
//       if (doc.fullName !== "Stephen Hodges" && doc.fullName !== "Stewart Capps") {
//         db.Attendance.create({
//           studentEmail: doc.email,
//           studentName: doc.fullName,
//           sessionName: session.name,
//           presence: "pending",
//           sessionNum: session.sessionNum
//         }).then(attendance => {
//           const attendanceId = attendance._id;
//           const sessionId = session._id;
//           return db.Session.findByIdAndUpdate(sessionId, {
//             $push: {
//               attendance: attendanceId
//             }
//           }).then(() => {
//             return db.User.findByIdAndUpdate(doc._id, {
//               $push: {
//                 attendance: attendanceId
//               }
//             });
//           });
//         });
//       }
//     });
//     return next();
//   });
// });

// UserSchema.post("save", function saveHook(doc, next) {
//   db.Assignment.find({}).then(assignments => {
//     assignments.forEach(assignment => {
//       if (doc.fullName !== "Stephen Hodges" && doc.fullName !== "Stewart Capps") {
//         db.Submission.create({
//           studentName: doc.fullName,
//           studentEmail: doc.email,
//           assignmentName: assignment.name,
//           assignmentNum: assignment.assignmentNum,
//           grade: "Not yet graded"
//         }).then(submission => {
//           const submissionId = submission._id;
//           const assignmentId = assignment._id;
//           return db.Assignment.findByIdAndUpdate(assignmentId, {
//             $push: {
//               submissions: submissionId
//             }
//           }).then(() => {
//             return db.User.findByIdAndUpdate(doc._id, {
//               $push: {
//                 submissions: submissionId
//               }
//             });
//           });
//         });
//       }
//     });
//     return next();
//   });

//   return next();
// });

const User = mongoose.model("User", UserSchema);

export default User;
