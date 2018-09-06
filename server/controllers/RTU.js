import db from "../models/index";
import moment from "moment";

const timeouts = [];
const classTimers = [];
const assignmentReminders = [];
const lateMarkers = [];

const getTimeouts = () => {
    const now = moment();
    db.Session.find({}).then(session => {
        const end = moment(session.date + "10:00").format("dddd MMMM DDDD, YYYY HH:mm");
        const duration = moment.duration(now.diff(end));
        const timeout = duration.asMilliseconds()
        if (timeout > 0) {
            timeouts.push({
                id: session._id,
                timeout: timeout
            });
        }
    });
}

const getAssignmentTimeouts = () => {
    const now = moment()
    db.Assignment.find({}).then(assignments => {
        assignments.forEach(assign => {
            const end = moment(assign.dueData + "22:00").format("dddd MMMM DDDD, YYYY HH:mm");
            const duration = moment.duration(now.diff(end));
            const timeout = duration.asMilliseconds()
            if (timeout > 0) {
                assignmentReminders.push({
                    id: assign._id,
                    timeout: timeout
                });
            }
        });
    });
}

timeouts.forEach(instance => {
    setInterval(() => {
        db.Session.findByIdAndUpdate(instance.id, {status: "current"}).then(response => console.log(response));
        classTimers.push({
            id: instance.id,
            timeout: 16200000
        });
    }, instance.timeout);
});

classTimers.forEach(instance => {
    setInterval(() => {
        db.Session.findByIdAndUpdate(instance.id, {status: "completed"}).then(response => console.log(response));
    }, instance.timeout);
});

assignmentReminders.forEach(reminder => {
    setInterval(() => {
        //create a notification via socket
    }, reminder.timeout);
    lateMarkers.push({
        id: reminder.id,
        timeout: 7200000
    });
});

lateMarkers.forEach(marker => {
    setInterval(() => {
        db.Assignment.findByIdAndUpdate(marker.id, {late: true}); //Probs dont need this...
    });
});



