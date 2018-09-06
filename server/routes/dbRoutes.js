import mongoose from "mongoose";
import db from "../models"
import express from "express";
import jwt from "jsonwebtoken";
import config from "../../config";

const dbRouter = express.Router();

//GET ROUTES
dbRouter.get("/get/all/assignments", (req, res) => {
    db.Assignment.find({})
        .then((data) => {
            res.json(data);
        });
});

dbRouter.get("/get/one/assignment/:id", (req, res) => {
    db.Assignment.findById(req.params.id)
        .then(data => {
            res.json(data);
        });
});

dbRouter.get("/get/all/sessions", (req, res) => {
    db.Session.find({})
        .then((err, data) => {
            if (err) throw err;
            res.json(data);
        });
});

dbRouter.get("/get/one/session/:id", (req, res) => {
    db.Session.findById(req.params.id)
        .populate("attendance")
        .then(data => {
            res.json(data);
        });
});

dbRouter.get("/get/all/attendance", (req, res) => {
    db.Attendance.find({})
        .then(data => {
            res.json(data);
        });
});

dbRouter.get("/get/all/users", (req, res) => {
    db.User.find({})
        .then((data) => {
            res.json(data);
        });
});

dbRouter.get("/get/user/:id", (req, res) => {
    db.User.findById(req.params.id)
        .then(data => {
            res.json(data);
        });
});

dbRouter.get("/get/userGrades/:id", (req, res) => {
    db.User.findById(req.params.id)
        .populate("submissions")
        .then(data => {
            res.json(data);
        });
});

dbRouter.get("/get/userAttendance/:id", (req, res) => {
    db.User.findById(req.params.id)
        .populate("attendance")
        .populate("requests")
        .then(data => {
            res.json(data)
        });
});

dbRouter.get("/get/fullUser/:id", (req, res) => {
    db.User.findById(req.params.id)
        .populate("attendance")
        .populate("submissions")
        .populate("checkpoints")
        .populate("notifications")
        .then(data => {
            res.json(data);
        });
});

dbRouter.get("/get/allSessions", (req, res) => {
    db.Session.find({ sessionType: "Academic" })
        .then((data) => {
            res.json(data);
        });
});

dbRouter.get("/get/session/:name", (req, res) => {
    db.Session.find({ name: req.params.name })
        .then(data => {
            res.json(data);
        });
});

dbRouter.get("/get/allCoursework", (req, res) => {
    db.Assignment.find({})
        .then(data => {
            res.json(data);
        });
});

dbRouter.get("/get/coursework/:name", (req, res) => {
    db.Assignment.find({ name: req.params.name })
        .then(data => {
            res.json(data);
        });
});

dbRouter.get("/get/allCareers", (req, res) => {
    db.Session.find({ sessionType: "Career" })
        .then(data => {
            res.json(data);
        });
});

dbRouter.post("/post/assignment", (req, res) => {
    db.Assignment.create(req.body)
        .then(data => {
            res.json(data);
        });
});

dbRouter.post("/post/user", (req, res) => {
    db.User.create(req.body)
        .then(data => {
            res.json(data);
        });
});

dbRouter.post("/post/session", (req, res) => {
    db.Session.create(req.body)
        .then(data => {
            res.json(data);
        });
});

dbRouter.post("/post/attendance", (req, res) => {
    db.Attendance.create(req.body)
        .then(data => {
            res.json(data);
        });
});

dbRouter.post("/post/submission", (req, res) => {
    db.Submission.create(req.body)
        .then(data => {
            res.json(data);
        });
});

dbRouter.delete("/delete/assignment/:id", (req, res) => {
    db.Assignment.remove({ _id: req.params.id })
        .then(data => {
            res.json(data);
        });
});

dbRouter.delete("/delete/user/:id", (req, res) => {
    db.User.remove({ _id: req.params.id })
        .then(data => {
            res.json(data);
        });
});

dbRouter.delete("/delete/session/:id", (req, res) => {
    db.Session.remove({ _id: req.params.id })
        .then(data => {
            res.json(data);
        });
});

dbRouter.delete("/delete/attendance/:id", (req, res) => {
    db.Attendance.remove({ _id: req.params.id })
        .then(data => {
            res.json(data);
        });
});

dbRouter.delete("/delete/submission/:id", (req, res) => {
    db.Submission.remove({ _id: req.params.id })
        .then(data => {
            res.json(data);
        });
});

dbRouter.put("/update/assignment/:id", (req, res) => {
    db.Assignment.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        .then(data => {
            res.json(data)
        });
});

dbRouter.put("/update/assignment/:id/:stepNum", (req, res) => {
    db.Assignment.update({ "_id": req.params.id, "instructions.stepNum": stepNum }, { $set: { "instructions.$.text": req.body.text } })
        .then(data => {
            res.json(data)
        });
});

dbRouter.put("/update/user/:id", (req, res) => {
    db.User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        .then(data => {
            res.json(data)
        });
});

dbRouter.put("/update/user/:settings/:id", (req, res) => {
    if (req.params.settings === "image") {
        db.User.findByIdAndUpdate(req.params.id, { $set: { "settings.image": req.body.image } }, { new: true })
            .then(data => {
                res.json(data)
            });
    }

    if (req.params.settings === "quote") {
        db.User.findByIdAndUpdate(req.params.id, { $set: { "settings.quote": req.body.quote } }, { new: true })
            .then(data => {
                res.json(data)
            });
    }

    if (req.params.settings === "cardColor") {
        db.User.findByIdAndUpdate(req.params.id, { $set: { "settings.cardColor": req.body.cardColor } }, { new: true })
            .then(data => {
                res.json(data)
            });
    }
});

dbRouter.put("/update/session/:id", (req, res) => {
    db.Session.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        .then(data => {
            res.json(data)
        });
});

dbRouter.put("/update/attendance/:id", (req, res) => {
    db.Attendance.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        .then(data => {
            res.json(data)
        });
});

dbRouter.put("/update/submission/:id", (req, res) => {
    db.Submission.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        .then(data => {
            res.json(data)
        });
});

dbRouter.put("/update/submission/:id/:linkId", (req, res) => {
    db.Assignment.update({ "_id": req.params.id, "links._id": req.params.id }, { $set: { "links.$.url": req.body.url } })
        .then(data => {
            res.json(data)
        });
});

dbRouter.put("/update/submission/:id", (req, res) => {
    db.Assignment.update({ "_id": req.params.id}, { $push: { links: req.body } })
        .then(data => {
            res.json(data)
        });
});

dbRouter.get("/get/career/:name", (req, res) => {
    db.Session.find({ name: req.params.name })
        .then(data => {
            res.json(data);
        });
});

export default dbRouter;