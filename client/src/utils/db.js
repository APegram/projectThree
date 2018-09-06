import axios from "axios";

const API = {
    getUser: (id, callback) => axios.get("/get/user/" + id)
        .then(data => callback(data.data)),

    getUserAttendance: (id, callback) => axios.get("/get/userAttendance/" + id)
        .then(data => callback(data.data)),

    getUserGrades: (id, callback) => axios.get("/get/userGrades/" + id)
        .then(data => callback(data.data)),

    getUserFull: (id, callback) => axios.get("/get/fullUser/" + id)
        .then(data => callback(data.data)),

    getAllSessions: (callback) => axios.get("/get/allSessions")
        .then(data => callback(data.data)),

    getSession: (name, callback) => axios.get("/get/session/" + name)
        .then(data => {
            callback(data.data)
        }),

    getAllCoursework: (callback) => axios.get("/get/allCoursework")
        .then(data => callback(data.data)),

    getCoursework: (name, callback) => axios.get("/get/coursework/" + name)
        .then(data => {
            callback(data.data)
        }),

    getAllCareers: (callback) => axios.get("/get/allCareers")
        .then(data => callback(data.data)),

    getCareer: (name, callback) => axios.get("/get/career/" + name)
        .then(data => {
            callback(data.data)
        }),

    createAssignment: (name, assignmentType, assignmentNum, description, dueDate, instructions, callback) => axios.post("/post/assignment", {
        name: name,
        assignmentType: assignmentType,
        assignmentNum: assignmentNum,
        description: description,
        dueDate: dueDate,
        instructions: instructions
    }).then(data => {
        callback(data.data)
    }),

    createSession: (name, sessionType, sessionNum, date, description, videoLink, callback) => axios.post("/post/session", {
        name: name,
        sessionType: sessionType,
        sessionNum: sessionNum,
        date: date,
        description: description,
        videoLink: videoLink
    }).then(data => {
        callback(data.data)
    }),

    createAttendance: (studentEmail, studentName, sessionName, presence, sessionNum, callback) => axios.post("/post/session", {
        studentEmail: studentEmail,
        studentName: studentName,
        sessionName: sessionName,
        presence: presence,
        sessionNum: sessionNum
    }).then(data => {
        callback(data.data)
    }),

    createSubmission: (studentName, studentEmail, assignmentName, assignmentNum, callback) => axios.post("/post/session", {
        studentEmail: studentEmail,
        studentName: studentName,
        assignmentName: assignmentName,
        assignmentNum: assignmentNum
    }).then(data => {
        callback(data.data)
    }),

    deleteAssignment: (id, callback) => axios.delete("/delete/assignment/" + id)
        .then(data => {
            callback(data.data)
        }),

    deleteUser: (id, callback) => axios.delete("/delete/user/" + id)
        .then(data => {
            callback(data.data)
        }),

    deleteSession: (id, callback) => axios.delete("/delete/session/" + id)
        .then(data => {
            callback(data.data)
        }),

    deleteAttendance: (id, callback) => axios.delete("/delete/attendance/" + id)
        .then(data => {
            callback(data.data)
        }),

    deleteSubmission: (id, callback) => axios.delete("/delete/submission/" + id)
        .then(data => {
            callback(data.data)
        }),

    updateAssignmentName: (id, update, callback) => axios.put("/update/assignment/" + id, {
        name: update
    }).then(data => {
        callback(data.data)
    }),

    updateAssignmentType: (id, update, callback) => axios.put("/update/assignment/" + id, {
        assignmentType: update
    }).then(data => {
        callback(data.data)
    }),

    updateAssignmentNum: (id, update, callback) => axios.put("/update/assignment/" + id, {
        assignmentNum: update
    }).then(data => {
        callback(data.data)
    }),

    updateAssignmentDescription: (id, update, callback) => axios.put("/update/assignment/" + id, {
        description: update
    }).then(data => {
        callback(data.data)
    }),

    updateAssignmentDueDate: (id, update, callback) => axios.put("/update/assignment/" + id, {
        dueDate: update
    }).then(data => {
        callback(data.data)
    }),

    updateAssignmentInstructionsText: (id, stepNum, update, callback) => axios.put("/update/assignment/" + id + "/" + stepNum, {
        text: update
    }).then(data => {
        callback(data.data)
    }),

    updateUserAdmin: (id, update, callback) => axios.put("/update/user/" + id, {
        admin: update
    }).then(data => {
        callback(data.data)
    }),

    updateUserFirstName: (id, update, callback) => axios.put("/update/user/" + id, {
        firstName: update
    }).then(data => {
        callback(data.data)
    }),

    updateUserLastName: (id, update, callback) => axios.put("/update/user/" + id, {
        lastName: update
    }).then(data => {
        callback(data.data)
    }),

    updateUserFullName: (id, update, callback) => axios.put("/update/user/" + id, {
        fullName: update
    }).then(data => {
        callback(data.data)
    }),

    updateUserEmail: (id, update, callback) => axios.put("/update/user/" + id, {
        email: update
    }).then(data => {
        callback(data.data)
    }),

    updateUserPassword: (id, update, callback) => axios.put("/update/user/" + id, {
        password: update
    }).then(data => {
        callback(data.data)
    }),

    updateUserGitHub: (id, update, callback) => axios.put("/update/user/" + id, {
        gitHub: update
    }).then(data => {
        callback(data.data)
    }),

    updateUserLinkedIn: (id, update, callback) => axios.put("/update/user/" + id, {
        linkedIn: update
    }).then(data => {
        callback(data.data)
    }),

    updateUserImage: (id, update, callback) => axios.put("/update/user/image" + id, {
        image: update
    }).then(data => {
        callback(data.data)
    }),

    updateUserQuote: (id, update, callback) => axios.put("/update/user/quote/" + id, {
        image: update
    }).then(data => {
        callback(data.data)
    }),

    updateUserCardColor: (id, update, callback) => axios.put("/update/user/cardColor/" + id, {
        image: update
    }).then(data => {
        callback(data.data)
    }),

    updateAttendance: (id, update, callback) => axios.put("/update/attendance/" + id, {
        presence: update
    }).then(data => {
        callback(data.data)
    }),

    updateSessionName: (id, update, callback) => axios.put("/update/session/" + id, {
        name: update
    }).then(data => {
        callback(data.data)
    }),

    updateSessionDate: (id, update, callback) => axios.put("/update/session/" + id, {
        date: update
    }).then(data => {
        callback(data.data)
    }),

    updateSessionType: (id, update, callback) => axios.put("/update/session/" + id, {
        sessionType: update
    }).then(data => {
        callback(data.data)
    }),

    updateSessionDescription: (id, update, callback) => axios.put("/update/session/" + id, {
        description: update
    }).then(data => {
        callback(data.data)
    }),

    updateSessionVideo: (id, update, callback) => axios.put("/update/session/" + id, {
        videoLink: update
    }).then(data => {
        callback(data.data)
    }),

    updateSessionStatus: (id, update, callback) => axios.put("/update/session/" + id, {
        status: update
    }).then(data => {
        callback(data.data)
    }),

    updateSubmissionGrade: (id, update, callback) => axios.put("/update/session/" + id, {
        grade: update
    }).then(data => {
        callback(data.data)
    }),

    updateSubmissionLink: (id, linkId, update, callback) => axios.put("/update/submission/" + id + "/" + linkId, {
        url: update
    }).then(data => {
        callback(data.data)
    }),

    addSubmissionLink: (id, url, callback) => axios.put("/update/submission/" + id, {
        url: url
    }).then(data => {
        callback(data.data)
    })

};

export default API;