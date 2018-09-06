const oldSessionSeed = [
    {
        name: "The Zen of Coding",
        date: "Monday May 21, 2018",
        dateInt: 521,
        sessionNum: 1,
        description: "This is our first session and will serve as an introduction to the environment of this bootcamp and coding in general.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=c73935a9-4fc1-492b-be97-a8e70126ed94",
        comments: [
            {
                userName: "Stewart Capps",
                email: "stewcapps@gmail.com",
                text: "hey"
            },
            {
                userName: "Stephen Hodges",
                email: "stephen@shodges.io",
                text: "sup"
            },
            {
                userName: "Ty Atkins",
                email: "atkinsta@gmail.com",
                text: "Whats up lads"
            }
        ]
    },
    {
        name: "The CSS Conundrum",
        date: "Tuesday May 22, 2018",
        dateInt: 522,
        sessionNum: 2,
        description: "In this session we will dip our toes into the joy that is CSS.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=ccd9005d-a52f-45bf-a8c6-a8e800e74d02"
    },
    {
        name: "Daily Dose of Deployments",
        date: "Wednesday May 23, 2018",
        dateInt: 523,
        sessionNum: 3,
        description: "In this session we will learn the proper conventions of deploying to gitHub.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=8bc5f9b2-52b8-4b99-b645-a8e900e6cd28"
    },
    {
        name: "The CSS Continuation",
        date: "Thursday May 24, 2018",
        dateInt: 524,
        sessionNum: 4,
        description: "In our second session on CSS, we will expand on our knowledge of the language and its uses."
    },
    {
        name: "Framing CSS With Frameworks",
        date: "Friday May 25, 2018",
        dateInt: 525,
        sessionNum: 5,
        description: "This session covers the basics of Bootstrap and what CSS frameworks have to offer.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=ff257008-704d-4c87-a7b0-a8eb00e6f957"
    },
    {
        name: "Jumping Into JavaScript",
        date: "Wednesday May 30, 2018",
        dateInt: 530,
        sessionNum: 6,
        description: "In this session we will begin to go over the fundamentals of JavaScript.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=59ff0bc9-a752-40f8-a46f-a8f000e6b238"
    },
    {
        name: "Staying on JavaScript",
        date: "Thursday May 31, 2018",
        dateInt: 531,
        sessionNum: 7,
        description: "This session will dive deeper into JavaScript.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=2ede7c4e-78f8-4cc9-9727-a8f100e6bbd3"
    },
    {
        name: "Keep Calm and jQuery On",
        date: "Friday June 1, 2018",
        dateInt: 601,
        sessionNum: 8,
        description: "This session covers JQuery and how it can modify the DOM.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=54ce5ccc-bc52-4876-8120-a8f200e75cc7"
    },
    {
        name: "Making Money With jQuery",
        date: "Monday June 4, 2018",
        dateInt: 604,
        sessionNum: 9,
        description: "Continuation of JQuery.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=38d2aa50-d78a-4b2f-93f9-a8f500e6c429"
    },
    {
        name: "Joking Around In jQuery",
        date: "Tuesday June 5, 2018",
        dateInt: 605,
        sessionNum: 10,
        description: "This session will demonstrate the full powers of using JQuery to modify HTML.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=5b5796a4-cb99-4ad2-a31d-a8f600e6a013"
    },
    {
        name: "Feeling a Bit jQueezy",
        date: "Wednesday June 6, 2018",
        dateInt: 606,
        sessionNum: 11,
        description: "A continuation of the previous session's JQuery lessons.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=97c96e9b-6087-403b-b2b1-a8f700e745dc"
    },
    {
        name: "Relaxing in the jQuoozy",
        date: "Thursday June 7, 2018",
        dateInt: 607,
        sessionNum: 12,
        description: "The final session involving JQuery.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=444d0f79-99fa-4a47-9df0-a8f800e6b959"
    },
    {
        name: "YayPIs and AyyyJAX Calls",
        date: "Friday June 8, 2018",
        dateInt: 608,
        sessionNum: 13,
        description: "This session introduces APIs and AJAX.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=6e562eda-8652-4d11-8c78-a8f900e68237"
    },
    {
        name: "When AJAX Calls, API Answers",
        date: "Monday June 11, 2018",
        dateInt: 611,
        sessionNum: 14,
        description: "In this session, you will learn how to query an API.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=56f2a191-564b-4e82-a0d4-a8fd00e712f6"
    },
    {
        name: "Now Accepting AJAX Requests",
        date: "Tuesday June 12, 2018",
        dateInt: 612,
        sessionNum: 15,
        description: "This session teachs how to use AJAX to query an API.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=56f2a191-564b-4e82-a0d4-a8fd00e712f6"
    },
    {
        name: "The Firebasics",
        date: "Wednesday June 13, 2018",
        dateInt: 613,
        sessionNum: 16,
        description: "An introduction to our first database model: Firebase.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=63ee61f2-da96-4160-b69e-a8fe00e6c175"
    },
    {
        name: "Server Side Kindling Is a Firebase",
        date: "Thursday June 14, 2018",
        dateInt: 614,
        sessionNum: 17,
        description: "This session goes over how to store and retrieve data directly from Firebase.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=ec20bc6d-126e-4d6c-af37-a8ff00e6acb6"
    },
    {
        name: "Firebase & Intro to Project 1",
        date: "Friday June 15, 2018",
        dateInt: 615,
        sessionNum: 18,
        description: "A conclusion to our Firebase lessons and the start of your first project.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=166612cf-6d59-469d-b0af-a90000e6c3ed"
    },
    {
        name: "Project 1 Work 1",
        date: "Monday June 18, 2018",
        dateInt: 618,
        sessionNum: 19,
        description: "The first full day of Project 1.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=4685a245-69b6-4a8c-acb7-a90400e6ff68"
    },
    {
        name: "Project 1 Work 2",
        date: "Tuesday June 19, 2018",
        dateInt: 619,
        sessionNum: 20,
        description: "More project work."
    },
    {
        name: "Project 1 Work 3",
        date: "Wednesday June 20, 2018",
        dateInt: 620,
        sessionNum: 21,
        description: "Even more project work."
    },
    {
        name: "Project 1 Work 4",
        date: "Thursday June 21, 2018",
        dateInt: 621,
        sessionNum: 22,
        description: "The final day of project work."
    },
    {
        name: "Project Presentations 1 & Intro to Node.js",
        date: "Friday June 22, 2018",
        dateInt: 622,
        sessionNum: 23,
        description: "Today you will present your first projects to the class.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=bbdca4c5-4e90-4f8a-a71a-a90700ebe9d6"
    },
    {
        name: "A Node To Server Side Programming",
        date: "Monday June 25, 2018",
        dateInt: 625,
        sessionNum: 24,
        description: "An introduction to Node.js.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=2c4235d1-9301-4b0d-bc95-a90a00e6c8c9"
    },
    {
        name: "Node Another Day of JavaScript!",
        date: "Tuesday June 26, 2018",
        dateInt: 626,
        sessionNum: 25,
        description: "This session teaches the fundamentals of Node.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=1829a270-0e32-43ff-b816-a90b00e6c7ef"
    },
    {
        name: "Node A Thing Will Slow You Down",
        date: "Wednesday June 27, 2018",
        dateInt: 627,
        sessionNum: 26,
        description: "This session goes over how to use Node to host a server locally.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=528429c5-b20f-45e8-bf96-a90c00efecdd"
    },
    {
        name: "Mastering The JavaScript",
        date: "Thursday June 28, 2018",
        dateInt: 628,
        sessionNum: 27,
        description: "This session is designed to help you master the fundamentals of JavaScript.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=168aed5a-560a-400b-b657-a90d00e70780"
    },
    {
        name: "Its MySQL Not YourSQL",
        date: "Friday June 29, 2018",
        dateInt: 629,
        sessionNum: 28,
        description: "An introduction to the second database structure in this course: MySQL.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=713789d4-f918-4304-87fd-a90e00e73c7d"
    },
    {
        name: "MySQL Two: Return of the Query",
        date: "Monday July 2, 2018",
        dateInt: 702,
        sessionNum: 29,
        description: "This session goes over the basics of querying a MySQL database.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=e73d8f93-ca13-48b8-af6f-a91100e71beb"
    },
    {
        name: "Making It a MyTRILOGY",
        date: "Tuesday July 3, 2018",
        dateInt: 703,
        sessionNum: 30,
        description: "In this session, you will learn the lifecycle of querying and updating databse indexes in MySQL.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=451a57b1-acf2-4b45-ba36-a91200e708f1"
    },
    {
        name: "The Express.js Line",
        date: "Friday July 6, 2018",
        dateInt: 706,
        sessionNum: 31,
        description: "This session goes over how to install Node modules and utilize them to your advantage.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=378bd9da-f7c9-4f8d-8ee3-a91500e6d9b9"
    },
    {
        name: "Express.js Yourself",
        date: "Monday July 9, 2018",
        dateInt: 709,
        sessionNum: 32,
        description: "In this session we will go over how to use Express to host a server.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=e4d38ddb-c834-406b-8a63-a91800e744d8"
    },
    {
        name: "Handholding Handlebars.js",
        date: "Tuesday July 10, 2018",
        dateInt: 710,
        sessionNum: 33,
        description: "This session serves as an introduction to a new Node package called Handlebars.js.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=9d9a40d3-374a-40f8-9beb-a91a00e6a138"
    },
    {
        name: "I Can Code a Site With Some Handlebars.js",
        date: "Wednesday July 11, 2018",
        dateInt: 711,
        sessionNum: 34,
        description: "This session demonstrates how to utilize Handlebars to modify the DOM.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=53ff1480-6218-4e04-95c0-a91b00e7e9b6"
    },
    {
        name: "Breaking Out of the NORM",
        date: "Thursday July 12, 2018",
        dateInt: 712,
        sessionNum: 35,
        description: "This session shows alternatives to using vanilla MySQL queries.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=b85458fc-7bf2-4468-ba40-a91c00e7a57c"
    },
    {
        name: "Sequelizing JavaScript",
        date: "Friday July 13, 2018",
        dateInt: 713,
        sessionNum: 36,
        description: "In this session we will learn how to use Sequelize to query our MySQL databases.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=b85458fc-7bf2-4468-ba40-a91c00e7a57c"
    },
    {
        name: "It's All In The SQL Eyes",
        date: "Monday July 16, 2018",
        dateInt: 716,
        sessionNum: 37,
        description: "A continuation of our Sequelize lessons.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=b85458fc-7bf2-4468-ba40-a91c00e7a57c"
    },
    {
        name: "Sequelize & intro to Project 2",
        date: "Tuesday July 17, 2018",
        dateInt: 717,
        sessionNum: 38,
        description: "This session introduces your second group project.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=b85458fc-7bf2-4468-ba40-a91c00e7a57c"
    },
    {
        name: "Project 2 Work 1",
        date: "Wednesday July 18, 2018",
        dateInt: 718,
        sessionNum: 39,
        description: "The first full day of project 2 work."
    },
    {
        name: "Project 2 Work 2",
        date: "Thursday July 19, 2018",
        dateInt: 719,
        sessionNum: 40,
        description: "The second full day of project 2 work."
    },
    {
        name: "Project 2 Work 3",
        date: "Friday July 20, 2018",
        dateInt: 720,
        sessionNum: 41,
        description: "The third full day of project 2 work"
    },
    {
        name: "Project 2 Work 4",
        date: "Monday July 23, 2018",
        dateInt: 723,
        sessionNum: 42,
        description: "The fourth full day of project 2 work"
    },
    {
        name: "Project Presentations 2 & Intro to MongoDB",
        date: "Tuesday July 24, 2018",
        dateInt: 724,
        sessionNum: 43,
        description: "Today you will present your second group project to the classs.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=863e591e-7dc7-4a31-9899-a92700ec16f0"
    },
    {
        name: "A Mongo Amount of Scraping",
        date: "Wednesday July 25, 2018",
        dateInt: 725,
        sessionNum: 44,
        description: "This session teaches you how to utilize certain npm packages to scrape websites to your liking.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=e787e262-8202-476d-b3e5-a92800e742a2"
    },
    {
        name: "Mongoose Training",
        date: "Thursday July 26, 2018",
        dateInt: 726,
        sessionNum: 45,
        description: "In this session we will go over how to fully utilize the Mongoose npm package.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=9f885d7c-29cd-4f22-9d7a-a92900e6cdb1"
    },
    {
        name: "Reacting To The Industry",
        date: "Friday July 27, 2018",
        dateInt: 727,
        sessionNum: 46,
        description: "This is the first session where we will talk about React and will serve as a foundation for your understanding of the React.js library.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=772401ce-3c00-49c5-b8ea-a92d00ee6f3a"
    },
    {
        name: "Recreational React.js",
        date: "Monday July 30, 2018",
        dateInt: 730,
        sessionNum: 47,
        description: "This session teaches how to navigate through the component of React and jsx.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=c0977926-a04d-45d5-80d5-a92e00e6f94e"
    },
    {
        name: "Act And React.js",
        date: "Tuesday July 31, 2018",
        dateInt: 731,
        sessionNum: 48,
        description: "A continuation on React.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=921bc6b6-29b3-4eb6-a27e-a92f00e74832"
    },
    {
        name: "Highly Reactive HTML Elements",
        date: "Wednesday August 1, 2018",
        dateInt: 801,
        sessionNum: 49,
        description: "This session introduces React Router and how it differs from the traditional way of thinking about routing.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=2ee9e8bf-d64b-421f-a528-a93000e72d39"
    },
    {
        name: "React.js & Intro to Project 3",
        date: "Thursday August 2, 2018",
        dateInt: 802,
        sessionNum: 50,
        description: "This session introductes your final project.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=1e870435-22dd-4266-9c3f-a93000f3a7fa"
    },
    {
        name: "C Sharp Day 1",
        date: "Friday August 3, 2018",
        dateInt: 803,
        sessionNum: 51,
        description: "This is our first of two sessions where we will briefly talk about C sharp and why it can be useful.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=5f5bef22-f4a7-438d-ab56-a93100e879b5"
    },
    {
        name: "C Sharp Day 2",
        date: "Monday August 6, 2018",
        dateInt: 806,
        sessionNum: 52,
        description: "A continuation of C Sharp.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=652d3357-455c-43de-91c3-a93400e968b6"
    },
    {
        name: "Computers As A Science & Project Work",
        date: "Tuesday August 7, 2018",
        dateInt: 807,
        sessionNum: 53,
        description: "This session will introduce some fundamentals of computer science and why it is important to understand these concepts as a web developer.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=942374a5-b3c9-4f5a-8167-a93500e82da9"
    },
    {
        name: "Comp Sigh & Project Work",
        date: "Wednesday August 8, 2018",
        dateInt: 808,
        sessionNum: 54,
        description: "A continuation of our computer science lessons and project 3 work.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=fd5188ab-287e-4ca6-940a-a93600e70da9"
    },
    {
        name: "Now You're Comp Sly & Project Work",
        date: "Thursday August 9, 2018",
        dateInt: 809,
        sessionNum: 55,
        description: "Our final talk about computer science and more project 3 work."
    },
    {
        name: "Portfolios",
        date: "Friday August 10, 2018",
        dateInt: 810,
        sessionNum: 56,
        description: "This session will teach you the importance of having a fully funcitonal and intuitive portfolio."
    },
    {
        name: "Portfolios & Project Work",
        date: "Monday August 13, 2018",
        dateInt: 813,
        sessionNum: 57,
        description: "More talk about portfolios and projcet 3 work."
    },
    {
        name: "Final Project",
        date: "Tuesday August 14, 2018",
        dateInt: 814,
        sessionNum: 58,
        description: "The first full day of project 3 work."
    },
    {
        name: "Final Project Work",
        date: "Wednesday August 15, 2018",
        dateInt: 815,
        sessionNum: 59,
        description: "The last full day of final project work."
    },
    {
        name: "Final Project Presentations",
        date: "Thursday August 16, 2018",
        dateInt: 816,
        sessionNum: 60,
        description: "Today you will present your final projects. Recruiters will be there so bring your A game!",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=a10a5725-39aa-4123-ae9f-a93e00ebd8e7",
        status: "current"
    },
    {
        name: "Career Services Meet & Greet",
        date: "Wednesday June 20, 2018",
        sessionType: "Career",
        dateInt: 620,
        sessionNum: 61,
        description: "The session will include an introduction to your Profile Coach Danielle, an in-depth conversation about Career Services, and time for Q&A. Please plan to attend.\n\nThe session will take place at this Zoom link: https://zoom.us/j/7738321242\n\nIf your schedule prevents you from attending, please contact Kaitlyn Roecker: kroecker@trilogyed.com"
    },
    {
        name: "Technical Practice Interview",
        date: "Friday June 22, 2018",
        sessionType: "Career",
        dateInt: 622,
        sessionNum: 62,
        description: "Register HERE: https://goo.gl/LzMzyp Are you applying to be a Data Analyst, Business Analyst or Data Scientist and want to know what really happens in a technical interview? Join us as we deep dive into the world of SQL, covering SQL based questions, ERD’s and do a technical interview given by Liffion! Perfect session for those who have gone through week 3."
    },
    {
        name: "Career Director Office Hours",
        date: "Monday July 9, 2018",
        sessionType: "Career",
        dateInt: 709,
        sessionNum: 63,
        description: "Hop on Zoom to ask your career-related questions. The session is come and go, no need to stay the full hour.\n\nJoin us on Zoom here: https://zoom.us/j/2168978548\n\nCan't join at this time but have questions? Reach out to Kaitlyn directly - kroecker@trilogyed.com"
    },
    {
        name: "Technical Practice Interview 2",
        date: "Friday July 20, 2018",
        sessionType: "Career",
        dateInt: 720,
        sessionNum: 64,
        description: "Register HERE: https://goo.gl/N8z4Tz Are you applying to be a Front End Developer, or Web Designer? Do you want to know what kind of jobs or Career Paths that you can apply for just by knowing HTML & CSS? What if we add Javascript and JQuery in the mix? Join us and we’ll talk about all the different type of Technical Interview Questions that you might encounter as a Web Designer, strategies on how to make you more competitive as a developer and the different type of career paths you can branch out from Web Designer (Graphic Designer, Wordpress Developer)! Perfect for those who have gone through week 3."
    },
    {
        name: "Behavioral Interview Practice Session",
        date: "Monday August 6, 2018",
        sessionType: "Career",
        dateInt: 806,
        sessionNum: 5,
        description: "This is a Zoom session where we will be splitting into small groups to practice answering common behavioral interview questions.\n\nPlease review the Preparing for a Successful Interview materials prior to the session:\n\n1) Read the Preparing for a Successful Interview Criteria: https://bit.ly/2Hk8gJP\n\n2) Review the Step by Step Guide to Preparing for a Successful Interview to understand what steps to prepare for and complete when taking part in a behavioral interview: https://bit.ly/2Hnz1c2\n\n3) Review the Frequently Asked Questions on Preparing for a Successful Interview to find more answers to your common questions: https://bit.ly/2vzxzSs\n\n4) Read the Preparing for a Successful Interview Resources document to find links to videos as well as a list of common interview questions: https://bit.ly/2HKY7oW\n\nPlease log on to the Zoom session at 4:30 pm: https://zoom.us/j/2168978548\n\nDon't forget to mark yourself present after you log in."
    },
    {
        name: "Session Career Workshop Behavorial Interview Practice",
        date: "Tuesday August 14, 2018",
        sessionType: "Career",
        dateInt: 814,
        sessionNum: 66,
        description: "Register Here: https://bi081418.splashthat.com/ for a Behavioral Interview Practice Workshop session designed to give you practice in mastering non-technical interviews. You will practice answering typical interview questions with your peers in this interactive workshop. Once you sign up, you will receive additional materials to review to help you prepare for this workshop. Successful interviewing takes preparation! Make sure to get the most out of these sessions and come prepared to partcipate."
    },
    {
        name: "Session Career Workshop Behavorial Interview Practice 2",
        date: "Wednesday August 22, 2018",
        sessionType: "Career",
        dateInt: 822,
        sessionNum: 67,
        description: "Register Here: https://bi082218.splashthat.com/ for a Behavioral Interview Practice Workshop session designed to give you practice in mastering non-technical interviews. You will practice answering typical interview questions with your peers in this interactive workshop. Once you sign up, you will receive additional materials to review to help you prepare for this workshop. Successful interviewing takes preparation! Make sure to get the most out of these sessions and come prepared to partcipate."
    },
    {
        name: "Session Career Workshop Behavorial Interview Practice 3",
        date: "Monday September 10, 2018",
        sessionType: "Career",
        dateInt: 910,
        sessionNum: 68,
        description: "Register Here: https://bi091018.splashthat.com/ for a Behavioral Interview Practice Workshop session designed to give you practice in mastering non-technical interviews. You will practice answering typical interview questions with your peers in this interactive workshop. Once you sign up, you will receive additional materials to review to help you prepare for this workshop. Successful interviewing takes preparation! Make sure to get the most out of these sessions and come prepared to partcipate."
    },
    {
        name: "Session Career Workshop Behavorial Interview Practice 4",
        date: "Thursday September 20, 2018",
        sessionType: "Career",
        dateInt: 920,
        sessionNum: 69,
        description: "Register Here: https://bi092018.splashthat.com/ for a Behavioral Interview Practice Workshop session designed to give you practice in mastering non-technical interviews. You will practice answering typical interview questions with your peers in this interactive workshop. Once you sign up, you will receive additional materials to review to help you prepare for this workshop. Successful interviewing takes preparation! Make sure to get the most out of these sessions and come prepared to partcipate."
    }
];

const sessionSeed = [
    {
        name: "The Zen of Coding",
        date: "Monday July 23, 2018",
        dateInt: 521,
        sessionNum: 1,
        status: "done",
        description: "This is our first session and will serve as an introduction to the environment of this bootcamp and coding in general.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=c73935a9-4fc1-492b-be97-a8e70126ed94",
        comments: [
            {
                userName: "Stewart Capps",
                email: "stewcapps@gmail.com",
                text: "hey"
            },
            {
                userName: "Stephen Hodges",
                email: "stephen@shodges.io",
                text: "sup"
            },
            {
                userName: "Ty Atkins",
                email: "atkinsta@gmail.com",
                text: "Whats up lads"
            }
        ]
    },
    {
        name: "The CSS Conundrum",
        date: "Tuesday July 24, 2018",
        dateInt: 522,
        sessionNum: 2,
        status: "done",
        description: "In this session we will dip our toes into the joy that is CSS.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=ccd9005d-a52f-45bf-a8c6-a8e800e74d02"
    },
    {
        name: "Daily Dose of Deployments",
        date: "Wednesday July 25, 2018",
        dateInt: 523,
        sessionNum: 3,
        status: "done",
        description: "In this session we will learn the proper conventions of deploying to gitHub.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=8bc5f9b2-52b8-4b99-b645-a8e900e6cd28"
    },
    {
        name: "The CSS Continuation",
        date: "Thursday July 26, 2018",
        dateInt: 524,
        sessionNum: 4,
        status: "done",
        description: "In our second session on CSS, we will expand on our knowledge of the language and its uses."
    },
    {
        name: "Framing CSS With Frameworks",
        date: "Friday July 27, 2018",
        dateInt: 525,
        sessionNum: 5,
        status: "done",
        description: "This session covers the basics of Bootstrap and what CSS frameworks have to offer.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=ff257008-704d-4c87-a7b0-a8eb00e6f957"
    },
    {
        name: "Jumping Into JavaScript",
        date: "Wednesday August 1, 2018",
        dateInt: 530,
        sessionNum: 6,
        status: "done",
        description: "In this session we will begin to go over the fundamentals of JavaScript.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=59ff0bc9-a752-40f8-a46f-a8f000e6b238"
    },
    {
        name: "Staying on JavaScript",
        date: "Thursday August 2, 2018",
        dateInt: 531,
        sessionNum: 7,
        status: "done",
        description: "This session will dive deeper into JavaScript.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=2ede7c4e-78f8-4cc9-9727-a8f100e6bbd3"
    },
    {
        name: "Keep Calm and jQuery On",
        date: "Friday August 3, 2018",
        dateInt: 601,
        sessionNum: 8,
        status: "done",
        description: "This session covers JQuery and how it can modify the DOM.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=54ce5ccc-bc52-4876-8120-a8f200e75cc7"
    },
    {
        name: "Making Money With jQuery",
        date: "Monday August 6, 2018",
        dateInt: 604,
        sessionNum: 9,
        status: "done",
        description: "Continuation of JQuery.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=38d2aa50-d78a-4b2f-93f9-a8f500e6c429"
    },
    {
        name: "Joking Around In jQuery",
        date: "Tuesday August 7, 2018",
        dateInt: 605,
        sessionNum: 10,
        status: "done",
        description: "This session will demonstrate the full powers of using JQuery to modify HTML.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=5b5796a4-cb99-4ad2-a31d-a8f600e6a013"
    },
    {
        name: "Feeling a Bit jQueezy",
        date: "Wednesday August 8, 2018",
        dateInt: 606,
        sessionNum: 11,
        status: "done",
        description: "A continuation of the previous session's JQuery lessons.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=97c96e9b-6087-403b-b2b1-a8f700e745dc"
    },
    {
        name: "Relaxing in the jQuoozy",
        date: "Thursday August 9, 2018",
        dateInt: 607,
        sessionNum: 12,
        status: "done",
        description: "The final session involving JQuery.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=444d0f79-99fa-4a47-9df0-a8f800e6b959"
    },
    {
        name: "YayPIs and AyyyJAX Calls",
        date: "Friday August 10, 2018",
        dateInt: 608,
        sessionNum: 13,
        status: "done",
        description: "This session introduces APIs and AJAX.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=6e562eda-8652-4d11-8c78-a8f900e68237"
    },
    {
        name: "When AJAX Calls, API Answers",
        date: "Monday August 13, 2018",
        dateInt: 611,
        sessionNum: 14,
        status: "done",
        description: "In this session, you will learn how to query an API.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=56f2a191-564b-4e82-a0d4-a8fd00e712f6"
    },
    {
        name: "Now Accepting AJAX Requests",
        date: "Tuesday August 14, 2018",
        dateInt: 612,
        sessionNum: 15,
        status: "done",
        description: "This session teachs how to use AJAX to query an API.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=56f2a191-564b-4e82-a0d4-a8fd00e712f6"
    },
    {
        name: "The Firebasics",
        date: "Wednesday August 15, 2018",
        dateInt: 613,
        sessionNum: 16,
        status: "done",
        description: "An introduction to our first database model: Firebase.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=63ee61f2-da96-4160-b69e-a8fe00e6c175"
    },
    {
        name: "Server Side Kindling Is a Firebase",
        date: "Thursday August 16, 2018",
        dateInt: 614,
        sessionNum: 17,
        status: "done",
        description: "This session goes over how to store and retrieve data directly from Firebase.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=ec20bc6d-126e-4d6c-af37-a8ff00e6acb6"
    },
    {
        name: "Firebase & Intro to Project 1",
        date: "Friday August 17, 2018",
        dateInt: 615,
        sessionNum: 18,
        status: "done",
        description: "A conclusion to our Firebase lessons and the start of your first project.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=166612cf-6d59-469d-b0af-a90000e6c3ed"
    },
    {
        name: "Project 1 Work 1",
        date: "Monday August 20, 2018",
        dateInt: 618,
        sessionNum: 19,
        status: "done",
        description: "The first full day of Project 1.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=4685a245-69b6-4a8c-acb7-a90400e6ff68"
    },
    {
        name: "Project 1 Work 2",
        date: "Tuesday August 21, 2018",
        dateInt: 619,
        sessionNum: 20,
        status: "done",
        description: "More project work."
    },
    {
        name: "Project 1 Work 3",
        date: "Wednesday August 22, 2018",
        dateInt: 620,
        sessionNum: 21,
        status: "done",
        description: "Even more project work."
    },
    {
        name: "Project 1 Work 4",
        date: "Thursday August 23, 2018",
        dateInt: 621,
        sessionNum: 22,
        status: "done",
        description: "The final day of project work."
    },
    {
        name: "Project Presentations 1 & Intro to Node.js",
        date: "Friday August 24, 2018",
        dateInt: 622,
        sessionNum: 23,
        status: "done",
        description: "Today you will present your first projects to the class.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=bbdca4c5-4e90-4f8a-a71a-a90700ebe9d6"
    },
    {
        name: "A Node To Server Side Programming",
        date: "Monday August 27, 2018",
        dateInt: 625,
        sessionNum: 24,
        status: "done",
        description: "An introduction to Node.js.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=2c4235d1-9301-4b0d-bc95-a90a00e6c8c9"
    },
    {
        name: "Node Another Day of JavaScript!",
        date: "Tuesday August 28, 2018",
        dateInt: 626,
        sessionNum: 25,
        status: "done",
        description: "This session teaches the fundamentals of Node.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=1829a270-0e32-43ff-b816-a90b00e6c7ef"
    },
    {
        name: "Node A Thing Will Slow You Down",
        date: "Wednesday August 29, 2018",
        dateInt: 627,
        sessionNum: 26,
        status: "done",
        description: "This session goes over how to use Node to host a server locally.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=528429c5-b20f-45e8-bf96-a90c00efecdd"
    },
    {
        name: "Mastering The JavaScript",
        date: "Thursday August 30, 2018",
        dateInt: 628,
        sessionNum: 27,
        status: "done",
        description: "This session is designed to help you master the fundamentals of JavaScript.",
        videoLink: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=168aed5a-560a-400b-b657-a90d00e70780"
    },
    {
        name: "Its MySQL Not YourSQL",
        date: "Friday August 31, 2018",
        dateInt: 629,
        sessionNum: 28,
        status: "upcoming",
        description: "An introduction to the second database structure in this course: MySQL."
    },
    {
        name: "MySQL Two: Return of the Query",
        date: "Monday September 3, 2018",
        dateInt: 702,
        sessionNum: 29,
        status: "upcoming",
        description: "This session goes over the basics of querying a MySQL database.",
    },
    {
        name: "Making It a MyTRILOGY",
        date: "Tuesday September 4, 2018",
        dateInt: 703,
        sessionNum: 30,
        status: "upcoming",
        description: "In this session, you will learn the lifecycle of querying and updating databse indexes in MySQL.",
    },
    {
        name: "The Express.js Line",
        date: "Friday September 7, 2018",
        dateInt: 706,
        sessionNum: 31,
        status: "upcoming",
        description: "This session goes over how to install Node modules and utilize them to your advantage.",
    },
    {
        name: "Express.js Yourself",
        date: "Monday September 10, 2018",
        dateInt: 709,
        sessionNum: 32,
        status: "upcoming",
        description: "In this session we will go over how to use Express to host a server.",
    },
    {
        name: "Handholding Handlebars.js",
        date: "Tuesday September 11, 2018",
        dateInt: 710,
        sessionNum: 33,
        status: "upcoming",
        description: "This session serves as an introduction to a new Node package called Handlebars.js.",
    },
    {
        name: "I Can Code a Site With Some Handlebars.js",
        date: "Wednesday September 13, 2018",
        dateInt: 711,
        sessionNum: 34,
        status: "upcoming",
        description: "This session demonstrates how to utilize Handlebars to modify the DOM.",
    },
    {
        name: "Breaking Out of the NORM",
        date: "Thursday September 14, 2018",
        dateInt: 712,
        sessionNum: 35,
        status: "upcoming",
        description: "This session shows alternatives to using vanilla MySQL queries.",
    },
    {
        name: "Sequelizing JavaScript",
        date: "Friday September 15, 2018",
        dateInt: 713,
        sessionNum: 36,
        status: "upcoming",
        description: "In this session we will learn how to use Sequelize to query our MySQL databases.",
    },
    {
        name: "It's All In The SQL Eyes",
        date: "Monday September 17, 2018",
        dateInt: 716,
        sessionNum: 37,
        description: "A continuation of our Sequelize lessons.",
    },
    {
        name: "Sequelize & intro to Project 2",
        date: "Tuesday September 18, 2018",
        dateInt: 717,
        sessionNum: 38,
        status: "upcoming",
        description: "This session introduces your second group project.",
    },
    {
        name: "Project 2 Work 1",
        date: "Wednesday September 19, 2018",
        dateInt: 718,
        sessionNum: 39,
        status: "upcoming",
        description: "The first full day of project 2 work."
    },
    {
        name: "Project 2 Work 2",
        date: "Thursday September 20, 2018",
        dateInt: 719,
        sessionNum: 40,
        status: "upcoming",
        description: "The second full day of project 2 work."
    },
    {
        name: "Project 2 Work 3",
        date: "Friday September 21, 2018",
        dateInt: 720,
        sessionNum: 41,
        status: "upcoming",
        description: "The third full day of project 2 work"
    },
    {
        name: "Project 2 Work 4",
        date: "Monday September 24, 2018",
        dateInt: 723,
        sessionNum: 42,
        status: "upcoming",
        description: "The fourth full day of project 2 work"
    },
    {
        name: "Project Presentations 2 & Intro to MongoDB",
        date: "Tuesday September 25, 2018",
        dateInt: 724,
        sessionNum: 43,
        status: "upcoming",
        description: "Today you will present your second group project to the classs.",
    },
    {
        name: "A Mongo Amount of Scraping",
        date: "Wednesday September 26, 2018",
        dateInt: 725,
        sessionNum: 44,
        status: "upcoming",
        description: "This session teaches you how to utilize certain npm packages to scrape websites to your liking.",
    },
    {
        name: "Mongoose Training",
        date: "Thursday September 27, 2018",
        dateInt: 726,
        sessionNum: 45,
        status: "upcoming",
        description: "In this session we will go over how to fully utilize the Mongoose npm package.",
    },
    {
        name: "Reacting To The Industry",
        date: "Friday September 28, 2018",
        dateInt: 727,
        sessionNum: 46,
        status: "upcoming",
        description: "This is the first session where we will talk about React and will serve as a foundation for your understanding of the React.js library.",
    },
    {
        name: "Recreational React.js",
        date: "Monday October 1, 2018",
        dateInt: 730,
        sessionNum: 47,
        status: "upcoming",
        description: "This session teaches how to navigate through the component of React and jsx.",
    },
    {
        name: "Act And React.js",
        date: "Tuesday October 2, 2018",
        dateInt: 731,
        sessionNum: 48,
        status: "upcoming",
        description: "A continuation on React.",
    },
    {
        name: "Highly Reactive HTML Elements",
        date: "Wednesday October 3, 2018",
        dateInt: 801,
        sessionNum: 49,
        status: "upcoming",
        description: "This session introduces React Router and how it differs from the traditional way of thinking about routing.",
    },
    {
        name: "React.js & Intro to Project 3",
        date: "Thursday October 4, 2018",
        dateInt: 802,
        sessionNum: 50,
        status: "upcoming",
        description: "This session introductes your final project.",
    },
    {
        name: "C Sharp Day 1",
        date: "Friday October 5, 2018",
        dateInt: 803,
        sessionNum: 51,
        status: "upcoming",
        description: "This is our first of two sessions where we will briefly talk about C sharp and why it can be useful.",
    },
    {
        name: "C Sharp Day 2",
        date: "Monday October 8, 2018",
        dateInt: 806,
        sessionNum: 52,
        status: "upcoming",
        description: "A continuation of C Sharp.",
    },
    {
        name: "Computers As A Science & Project Work",
        date: "Tuesday October 9, 2018",
        dateInt: 807,
        sessionNum: 53,
        status: "upcoming",
        description: "This session will introduce some fundamentals of computer science and why it is important to understand these concepts as a web developer.",
    },
    {
        name: "Comp Sigh & Project Work",
        date: "Wednesday October 10, 2018",
        dateInt: 808,
        sessionNum: 54,
        status: "upcoming",
        description: "A continuation of our computer science lessons and project 3 work.",
    },
    {
        name: "Now You're Comp Sly & Project Work",
        date: "Thursday October 11, 2018",
        dateInt: 809,
        sessionNum: 55,
        status: "upcoming",
        description: "Our final talk about computer science and more project 3 work."
    },
    {
        name: "Portfolios",
        date: "Friday October 12, 2018",
        dateInt: 810,
        sessionNum: 56,
        status: "upcoming",
        description: "This session will teach you the importance of having a fully funcitonal and intuitive portfolio."
    },
    {
        name: "Portfolios & Project Work",
        date: "Monday October 15, 2018",
        dateInt: 813,
        sessionNum: 57,
        status: "upcoming",
        description: "More talk about portfolios and projcet 3 work."
    },
    {
        name: "Final Project",
        date: "Tuesday October 16, 2018",
        dateInt: 814,
        sessionNum: 58,
        status: "upcoming",
        description: "The first full day of project 3 work."
    },
    {
        name: "Final Project Work",
        date: "Wednesday October 17, 2018",
        dateInt: 815,
        sessionNum: 59,
        status: "upcoming",
        description: "The last full day of final project work."
    },
    {
        name: "Final Project Presentations",
        date: "Thursday October 18, 2018",
        dateInt: 816,
        sessionNum: 60,
        status: "upcoming",
        description: "Today you will present your final projects. Recruiters will be there so bring your A game!",
        status: "upcoming"
    },
    {
        name: "Career Services Meet & Greet",
        date: "Wednesday August 22, 2018",
        sessionType: "Career",
        dateInt: 620,
        sessionNum: 61,
        status: "upcoming",
        description: "The session will include an introduction to your Profile Coach Danielle, an in-depth conversation about Career Services, and time for Q&A. Please plan to attend.\n\nThe session will take place at this Zoom link: https://zoom.us/j/7738321242\n\nIf your schedule prevents you from attending, please contact Kaitlyn Roecker: kroecker@trilogyed.com"
    },
    {
        name: "Technical Practice Interview",
        date: "Friday August 24, 2018",
        sessionType: "Career",
        dateInt: 622,
        sessionNum: 62,
        status: "upcoming",
        description: "Register HERE: https://goo.gl/LzMzyp Are you applying to be a Data Analyst, Business Analyst or Data Scientist and want to know what really happens in a technical interview? Join us as we deep dive into the world of SQL, covering SQL based questions, ERD’s and do a technical interview given by Liffion! Perfect session for those who have gone through week 3."
    },
    {
        name: "Career Director Office Hours",
        date: "Monday September 10, 2018",
        sessionType: "Career",
        dateInt: 709,
        sessionNum: 63,
        status: "upcoming",
        description: "Hop on Zoom to ask your career-related questions. The session is come and go, no need to stay the full hour.\n\nJoin us on Zoom here: https://zoom.us/j/2168978548\n\nCan't join at this time but have questions? Reach out to Kaitlyn directly - kroecker@trilogyed.com"
    },
    {
        name: "Technical Practice Interview 2",
        date: "Friday September 21, 2018",
        sessionType: "Career",
        dateInt: 720,
        sessionNum: 64,
        status: "upcoming",
        description: "Register HERE: https://goo.gl/N8z4Tz Are you applying to be a Front End Developer, or Web Designer? Do you want to know what kind of jobs or Career Paths that you can apply for just by knowing HTML & CSS? What if we add Javascript and JQuery in the mix? Join us and we’ll talk about all the different type of Technical Interview Questions that you might encounter as a Web Designer, strategies on how to make you more competitive as a developer and the different type of career paths you can branch out from Web Designer (Graphic Designer, Wordpress Developer)! Perfect for those who have gone through week 3."
    },
    {
        name: "Behavioral Interview Practice Session",
        date: "Monday October 8, 2018",
        sessionType: "Career",
        dateInt: 806,
        sessionNum: 65,
        status: "upcoming",
        description: "This is a Zoom session where we will be splitting into small groups to practice answering common behavioral interview questions.\n\nPlease review the Preparing for a Successful Interview materials prior to the session:\n\n1) Read the Preparing for a Successful Interview Criteria: https://bit.ly/2Hk8gJP\n\n2) Review the Step by Step Guide to Preparing for a Successful Interview to understand what steps to prepare for and complete when taking part in a behavioral interview: https://bit.ly/2Hnz1c2\n\n3) Review the Frequently Asked Questions on Preparing for a Successful Interview to find more answers to your common questions: https://bit.ly/2vzxzSs\n\n4) Read the Preparing for a Successful Interview Resources document to find links to videos as well as a list of common interview questions: https://bit.ly/2HKY7oW\n\nPlease log on to the Zoom session at 4:30 pm: https://zoom.us/j/2168978548\n\nDon't forget to mark yourself present after you log in."
    },
    {
        name: "Session Career Workshop Behavorial Interview Practice",
        date: "Tuesday October 16, 2018",
        sessionType: "Career",
        dateInt: 814,
        sessionNum: 66,
        status: "upcoming",
        description: "Register Here: https://bi081418.splashthat.com/ for a Behavioral Interview Practice Workshop session designed to give you practice in mastering non-technical interviews. You will practice answering typical interview questions with your peers in this interactive workshop. Once you sign up, you will receive additional materials to review to help you prepare for this workshop. Successful interviewing takes preparation! Make sure to get the most out of these sessions and come prepared to partcipate."
    },
    {
        name: "Session Career Workshop Behavorial Interview Practice 2",
        date: "Wednesday October 24, 2018",
        sessionType: "Career",
        dateInt: 822,
        sessionNum: 67,
        status: "upcoming",
        description: "Register Here: https://bi082218.splashthat.com/ for a Behavioral Interview Practice Workshop session designed to give you practice in mastering non-technical interviews. You will practice answering typical interview questions with your peers in this interactive workshop. Once you sign up, you will receive additional materials to review to help you prepare for this workshop. Successful interviewing takes preparation! Make sure to get the most out of these sessions and come prepared to partcipate."
    },
    {
        name: "Session Career Workshop Behavorial Interview Practice 3",
        date: "Monday November 12, 2018",
        sessionType: "Career",
        dateInt: 910,
        sessionNum: 68,
        status: "upcoming",
        description: "Register Here: https://bi091018.splashthat.com/ for a Behavioral Interview Practice Workshop session designed to give you practice in mastering non-technical interviews. You will practice answering typical interview questions with your peers in this interactive workshop. Once you sign up, you will receive additional materials to review to help you prepare for this workshop. Successful interviewing takes preparation! Make sure to get the most out of these sessions and come prepared to partcipate."
    },
    {
        name: "Session Career Workshop Behavorial Interview Practice 4",
        date: "Thursday November 22, 2018",
        sessionType: "Career",
        dateInt: 920,
        sessionNum: 69,
        status: "upcoming",
        description: "Register Here: https://bi092018.splashthat.com/ for a Behavioral Interview Practice Workshop session designed to give you practice in mastering non-technical interviews. You will practice answering typical interview questions with your peers in this interactive workshop. Once you sign up, you will receive additional materials to review to help you prepare for this workshop. Successful interviewing takes preparation! Make sure to get the most out of these sessions and come prepared to partcipate."
    }
];

export default sessionSeed;
