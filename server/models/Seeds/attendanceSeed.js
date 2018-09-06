const oldAttendanceSeed = [
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "The Zen of Coding",
        sessionNum: 1,
        presence: "early",
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "The CSS Conundrum ",
        sessionNum: 2,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Daily Dose of Deployments",
        sessionNum: 3,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "The CSS Continuation",
        sessionNum: 4,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Framing CSS With Frameworks",
        sessionNum: 5,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Jumping Into JavaScript",
        sessionNum: 6,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Staying on JavaScript",
        sessionNum: 7,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Keep Calm and jQuery On",
        sessionNum: 8,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Making $$$ With jQuery",
        sessionNum: 9,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Joking Around In jQuery",
        sessionNum: 10,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Feeling a Bit jQueezy",
        sessionNum: 11,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Relaxing in the jQuoozy",
        sessionNum: 12,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Yay-PIs and Ayyy-JAX Calls",
        sessionNum: 13,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "When AJAX Calls, API Answers",
        sessionNum: 14,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Now Accepting AJAX Requests",
        sessionNum: 15,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "The Firebasics",
        sessionNum: 16,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Server Side Kindling Is a Firebase",
        sessionNum: 17,
        presence: "late"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Firebase & Intro to Project #1",
        sessionNum: 18,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Project Work",
        sessionNum: 19,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Project Work",
        sessionNum: 20,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Project Work",
        sessionNum: 21,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Project Work",
        sessionNum: 22,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Project Presentations #1 & Intro to Node.js",
        sessionNum: 23,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "A Node To Server-Side Programming",
        sessionNum: 24,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Node Another Day of JavaScript!",
        sessionNum: 25,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Node A Thing Will Slow You Down",
        sessionNum: 26,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Mastering The JavaScript",
        sessionNum: 27,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "It's MySQL Not YourSQL",
        sessionNum: 28,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "MySQL Two: Return of the Query",
        sessionNum: 29,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Making It a MyTRILOGY",
        sessionNum: 30,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "The Express.js Line",
        sessionNum: 31,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Express.js Yourself",
        sessionNum: 32,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Handholding Handlebars.js",
        sessionNum: 33,
        presence: "excused"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "I Can Code a Site With Some Handlebars.js",
        sessionNum: 34,
        presence: "excused"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Breaking Out of the N-ORM",
        sessionNum: 35,
        presence: "excused"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Sequelizing JavaScript",
        sessionNum: 36,
        presence: "excused"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "It's All In The SQL-Eyes",
        sessionNum: 37,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Sequelize & intro to Project #2",
        sessionNum: 38,
        presence: "late"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Project Work",
        sessionNum: 39,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Project Work",
        sessionNum: 40,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Project Work",
        sessionNum: 41,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Project Work",
        sessionNum: 42,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Project Presentations #2 & Intro to MongoDB",
        sessionNum: 43,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "A Mongo Amount of Scraping",
        sessionNum: 44,
        presence: "late"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Mongoose Training",
        sessionNum: 45,
        presence: "late"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Reacting To The Industry",
        sessionNum: 46,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Recreational React.js",
        sessionNum: 47,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Act And React.js",
        sessionNum: 48,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Highly Reactive HTML Elements",
        sessionNum: 49,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "React.js / Intro to Project #3",
        sessionNum: 50,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "C#",
        sessionNum: 51,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "C#",
        sessionNum: 52,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Computers As A Science / Project Work",
        sessionNum: 53,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Comp-Sigh / Project Work",
        sessionNum: 54,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Now You're Comp-Sly / Project Work",
        sessionNum: 55,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Portfolios & Project Work",
        sessionNum: 56,
        presence: "late"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Portfolios & Project Work",
        sessionNum: 57,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Final Project",
        sessionNum: 58,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Final Project",
        sessionNum: 59,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Final Project Presentations",
        sessionNum: 60,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "The Zen of Coding",
        sessionNum: 1,
        presence: "early",
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "The CSS Conundrum ",
        sessionNum: 2,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Daily Dose of Deployments",
        sessionNum: 3,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "The CSS Continuation",
        sessionNum: 4,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Framing CSS With Frameworks",
        sessionNum: 5,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Jumping Into JavaScript",
        sessionNum: 6,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Staying on JavaScript",
        sessionNum: 7,
        presence: "late"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Keep Calm and jQuery On",
        sessionNum: 8,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Making $$$ With jQuery",
        sessionNum: 9,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Joking Around In jQuery",
        sessionNum: 10,
        presence: "late"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Feeling a Bit jQueezy",
        sessionNum: 11,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Relaxing in the jQuoozy",
        sessionNum: 12,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Yay-PIs and Ayyy-JAX Calls",
        sessionNum: 13,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "When AJAX Calls, API Answers",
        sessionNum: 14,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Now Accepting AJAX Requests",
        sessionNum: 15,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "The Firebasics",
        sessionNum: 16,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Server Side Kindling Is a Firebase",
        sessionNum: 17,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Firebase & Intro to Project #1",
        sessionNum: 18,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Project Work",
        sessionNum: 19,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Project Work",
        sessionNum: 20,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Project Work",
        sessionNum: 21,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Project Work",
        sessionNum: 22,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Project Presentations #1 & Intro to Node.js",
        sessionNum: 23,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "A Node To Server-Side Programming",
        sessionNum: 24,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Node Another Day of JavaScript!",
        sessionNum: 25,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Node A Thing Will Slow You Down",
        sessionNum: 26,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Mastering The JavaScript",
        sessionNum: 27,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "It's MySQL Not YourSQL",
        sessionNum: 28,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "MySQL Two: Return of the Query",
        sessionNum: 29,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Making It a MyTRILOGY",
        sessionNum: 30,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "The Express.js Line",
        sessionNum: 31,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Express.js Yourself",
        sessionNum: 32,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Handholding Handlebars.js",
        sessionNum: 33,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "I Can Code a Site With Some Handlebars.js",
        sessionNum: 34,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Breaking Out of the N-ORM",
        sessionNum: 35,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Sequelizing JavaScript",
        sessionNum: 36,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "It's All In The SQL-Eyes",
        sessionNum: 37,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Sequelize & intro to Project #2",
        sessionNum: 38,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Project Work",
        sessionNum: 39,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Project Work",
        sessionNum: 40,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Project Work",
        sessionNum: 41,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Project Work",
        sessionNum: 42,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Project Presentations #2 & Intro to MongoDB",
        sessionNum: 43,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "A Mongo Amount of Scraping",
        sessionNum: 44,
        presence: "late"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Mongoose Training",
        sessionNum: 45,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Reacting To The Industry",
        sessionNum: 46,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Recreational React.js",
        sessionNum: 47,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Act And React.js",
        sessionNum: 48,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Highly Reactive HTML Elements",
        sessionNum: 49,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "React.js / Intro to Project #3",
        sessionNum: 50,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "C#",
        sessionNum: 51,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "C#",
        sessionNum: 52,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Computers As A Science / Project Work",
        sessionNum: 53,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Comp-Sigh / Project Work",
        sessionNum: 54,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Now You're Comp-Sly / Project Work",
        sessionNum: 55,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Portfolios & Project Work",
        sessionNum: 56,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Portfolios & Project Work",
        sessionNum: 57,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Final Project",
        sessionNum: 58,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Final Project",
        sessionNum: 59,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Final Project Presentations",
        sessionNum: 60,
        presence: "early"
    }
];

const attendanceSeed = [
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "The Zen of Coding",
        sessionNum: 1,
        presence: "early",
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "The CSS Conundrum ",
        sessionNum: 2,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Daily Dose of Deployments",
        sessionNum: 3,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "The CSS Continuation",
        sessionNum: 4,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Framing CSS With Frameworks",
        sessionNum: 5,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Jumping Into JavaScript",
        sessionNum: 6,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Staying on JavaScript",
        sessionNum: 7,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Keep Calm and jQuery On",
        sessionNum: 8,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Making $$$ With jQuery",
        sessionNum: 9,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Joking Around In jQuery",
        sessionNum: 10,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Feeling a Bit jQueezy",
        sessionNum: 11,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Relaxing in the jQuoozy",
        sessionNum: 12,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Yay-PIs and Ayyy-JAX Calls",
        sessionNum: 13,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "When AJAX Calls, API Answers",
        sessionNum: 14,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Now Accepting AJAX Requests",
        sessionNum: 15,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "The Firebasics",
        sessionNum: 16,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Server Side Kindling Is a Firebase",
        sessionNum: 17,
        presence: "late"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Firebase & Intro to Project #1",
        sessionNum: 18,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Project Work",
        sessionNum: 19,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Project Work",
        sessionNum: 20,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Project Work",
        sessionNum: 21,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Project Work",
        sessionNum: 22,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Project Presentations #1 & Intro to Node.js",
        sessionNum: 23,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "A Node To Server-Side Programming",
        sessionNum: 24,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Node Another Day of JavaScript!",
        sessionNum: 25,
        presence: "present"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Node A Thing Will Slow You Down",
        sessionNum: 26,
        presence: "early"
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        sessionName: "Mastering The JavaScript",
        sessionNum: 27,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "The Zen of Coding",
        sessionNum: 1,
        presence: "early",
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "The CSS Conundrum ",
        sessionNum: 2,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Daily Dose of Deployments",
        sessionNum: 3,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "The CSS Continuation",
        sessionNum: 4,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Framing CSS With Frameworks",
        sessionNum: 5,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Jumping Into JavaScript",
        sessionNum: 6,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Staying on JavaScript",
        sessionNum: 7,
        presence: "late"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Keep Calm and jQuery On",
        sessionNum: 8,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Making $$$ With jQuery",
        sessionNum: 9,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Joking Around In jQuery",
        sessionNum: 10,
        presence: "late"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Feeling a Bit jQueezy",
        sessionNum: 11,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Relaxing in the jQuoozy",
        sessionNum: 12,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Yay-PIs and Ayyy-JAX Calls",
        sessionNum: 13,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "When AJAX Calls, API Answers",
        sessionNum: 14,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Now Accepting AJAX Requests",
        sessionNum: 15,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "The Firebasics",
        sessionNum: 16,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Server Side Kindling Is a Firebase",
        sessionNum: 17,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Firebase & Intro to Project #1",
        sessionNum: 18,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Project Work",
        sessionNum: 19,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Project Work",
        sessionNum: 20,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Project Work",
        sessionNum: 21,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Project Work",
        sessionNum: 22,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Project Presentations #1 & Intro to Node.js",
        sessionNum: 23,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "A Node To Server-Side Programming",
        sessionNum: 24,
        presence: "early"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Node Another Day of JavaScript!",
        sessionNum: 25,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Node A Thing Will Slow You Down",
        sessionNum: 26,
        presence: "present"
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        sessionName: "Mastering The JavaScript",
        sessionNum: 27,
        presence: "early"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "The Zen of Coding",
        sessionNum: 1,
        presence: "early",
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "The CSS Conundrum ",
        sessionNum: 2,
        presence: "present"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "Daily Dose of Deployments",
        sessionNum: 3,
        presence: "early"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "The CSS Continuation",
        sessionNum: 4,
        presence: "early"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "Framing CSS With Frameworks",
        sessionNum: 5,
        presence: "early"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "Jumping Into JavaScript",
        sessionNum: 6,
        presence: "present"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "Staying on JavaScript",
        sessionNum: 7,
        presence: "early"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "Keep Calm and jQuery On",
        sessionNum: 8,
        presence: "early"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "Making $$$ With jQuery",
        sessionNum: 9,
        presence: "present"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "Joking Around In jQuery",
        sessionNum: 10,
        presence: "early"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "Feeling a Bit jQueezy",
        sessionNum: 11,
        presence: "present"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "Relaxing in the jQuoozy",
        sessionNum: 12,
        presence: "early"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "Yay-PIs and Ayyy-JAX Calls",
        sessionNum: 13,
        presence: "early"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "When AJAX Calls, API Answers",
        sessionNum: 14,
        presence: "present"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "Now Accepting AJAX Requests",
        sessionNum: 15,
        presence: "present"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "The Firebasics",
        sessionNum: 16,
        presence: "present"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "Server Side Kindling Is a Firebase",
        sessionNum: 17,
        presence: "late"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "Firebase & Intro to Project #1",
        sessionNum: 18,
        presence: "present"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "Project Work",
        sessionNum: 19,
        presence: "present"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "Project Work",
        sessionNum: 20,
        presence: "early"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "Project Work",
        sessionNum: 21,
        presence: "present"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "Project Work",
        sessionNum: 22,
        presence: "early"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "Project Presentations #1 & Intro to Node.js",
        sessionNum: 23,
        presence: "early"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "A Node To Server-Side Programming",
        sessionNum: 24,
        presence: "early"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "Node Another Day of JavaScript!",
        sessionNum: 25,
        presence: "present"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "Node A Thing Will Slow You Down",
        sessionNum: 26,
        presence: "early"
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        sessionName: "Mastering The JavaScript",
        sessionNum: 27,
        presence: "early"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "The Zen of Coding",
        sessionNum: 1,
        presence: "early",
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "The CSS Conundrum ",
        sessionNum: 2,
        presence: "present"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "Daily Dose of Deployments",
        sessionNum: 3,
        presence: "present"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "The CSS Continuation",
        sessionNum: 4,
        presence: "early"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "Framing CSS With Frameworks",
        sessionNum: 5,
        presence: "early"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "Jumping Into JavaScript",
        sessionNum: 6,
        presence: "early"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "Staying on JavaScript",
        sessionNum: 7,
        presence: "late"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "Keep Calm and jQuery On",
        sessionNum: 8,
        presence: "present"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "Making $$$ With jQuery",
        sessionNum: 9,
        presence: "present"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "Joking Around In jQuery",
        sessionNum: 10,
        presence: "late"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "Feeling a Bit jQueezy",
        sessionNum: 11,
        presence: "early"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "Relaxing in the jQuoozy",
        sessionNum: 12,
        presence: "early"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "Yay-PIs and Ayyy-JAX Calls",
        sessionNum: 13,
        presence: "early"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "When AJAX Calls, API Answers",
        sessionNum: 14,
        presence: "present"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "Now Accepting AJAX Requests",
        sessionNum: 15,
        presence: "early"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "The Firebasics",
        sessionNum: 16,
        presence: "early"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "Server Side Kindling Is a Firebase",
        sessionNum: 17,
        presence: "early"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "Firebase & Intro to Project #1",
        sessionNum: 18,
        presence: "early"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "Project Work",
        sessionNum: 19,
        presence: "early"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "Project Work",
        sessionNum: 20,
        presence: "early"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "Project Work",
        sessionNum: 21,
        presence: "early"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "Project Work",
        sessionNum: 22,
        presence: "present"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "Project Presentations #1 & Intro to Node.js",
        sessionNum: 23,
        presence: "early"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "A Node To Server-Side Programming",
        sessionNum: 24,
        presence: "early"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "Node Another Day of JavaScript!",
        sessionNum: 25,
        presence: "present"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "Node A Thing Will Slow You Down",
        sessionNum: 26,
        presence: "present"
    },
    {
        studentName: "Adam Pregram",
        studentEmail: "apegram@gmail.com",
        sessionName: "Mastering The JavaScript",
        sessionNum: 27,
        presence: "early"
    }
];

export default attendanceSeed;