const oldSubmissionSeed = [
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        assignmentName: "1: HTML, CSS Homework",
        assignmentNum: 1,
        grade: "A+",
        links: [
            {
                url: "https://github.com/smhodgesii/Basic-Portfolio"
            },
            {
                url: "https://github.com/smhodgesii/HW-Wireframe"
            },
            {
                url: "https://smhodgesii.github.io/Basic-Portfolio/"
            },
            {
                url: "https://smhodgesii.github.io/HW-Wireframe/"
            }
        ]
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        assignmentName: "2: CSS Framework & Media Queries",
        assignmentNum: 2,
        grade: "C",
        links: [
            {
                url: "https://github.com/smhodgesii/Bootstrap-Portfolio"
            },
            {
                url: "https://github.com/smhodgesii/Responsive-Portfolio"
            },
            {
                url: "https://smhodgesii.github.io/Bootstrap-Portfolio/"
            },
            {
                url: "https://smhodgesii.github.io/Responsive-Portfolio/"
            }
        ]
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        assignmentName: "3: JavaScript Homework",
        assignmentNum: 3,
        grade: "A+",
        links: [
            {
                url: "https://github.com/smhodgesii/Word-Guess-Game"
            },
            {
                url: "https://smhodgesii.github.io/Word-Guess-Game/"
            }
        ]
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        assignmentName: "4: jQuery Homework",
        assignmentNum: 4,
        grade: "A",
        links: [
            {
                url: "https://github.com/smhodgesii/unit-4-game"
            },
            {
                url: "https://smhodgesii.github.io/unit-4-game/"
            }
        ]
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        assignmentName: "5: jQuery & JavaScript Homework",
        assignmentNum: 5,
        grade: "B",
        links: [
            {
                url: "https://github.com/smhodgesii/TriviaGame"
            },
            {
                url: "https://smhodgesii.github.io/TriviaGame/"
            }
        ]
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        assignmentName: "6: APIs & AJAX Homework",
        assignmentNum: 6,
        grade: "A+",
        links: [
            {
                url: "https://github.com/smhodgesii/gifMaker"
            },
            {
                url: "https://smhodgesii.github.io/gifMaker/"
            }
        ]
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        assignmentName: "7: Firebase Homework",
        assignmentNum: 7,
        grade: "A+",
        links: [
            {
                url: "https://github.com/smhodgesii/trainSchedule"
            },
            {
                url: "https://smhodgesii.github.io/portfolio.html"
            },
            {
                url: "https://smhodgesii.github.io/trainSchedule/"
            }
        ]
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        assignmentName: "Project 1",
        assignmentNum: 8,
        grade: "A+",
        links: [
            {
                url: "https://github.com/smhodgesii/ProjectOne"
            },
            {
                url: "https://smhodgesii.github.io/portfolio.html"
            },
            {
                url: "https://smhodgesii.github.io/ProjectOne/"
            }
        ]
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        assignmentName: "8: Node.js Homework",
        assignmentNum: 9,
        grade: "A",
        links: [
            {
                url: "http://shodges.io/"
            },
            {
                url: "https://github.com/shodgesio/liri-node-app"
            }
        ]
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        assignmentName: "10: MySQL Homework",
        assignmentNum: 10,
        grade: "A",
        links: [
            {
                url: "https://github.com/shodgesio/mysql-bamazon"
            },
            {
                url: "https://shodges.io/"
            }
        ]
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        assignmentName: "11: Express.js Homework",
        assignmentNum: 11,
        grade: "A+",
        links: [
            {
                url: "http://merlinfriend.herokuapp.com/"
            },
            {
                url: "https://github.com/shodgesio/expresshw"
            },
            {
                url: "https://shodges.io/"
            }
        ]
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        assignmentName: "Project 2",
        assignmentNum: 12,
        grade: "A",
        links: [
            {
                url: "http://bootcamphuddle.com/"
            },
            {
                url: "http://shodges.io/"
            },
            {
                url: "https://github.com/shodgesio/ProjectTwo"
            }
        ]
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        assignmentName: "14: MongoDB Homework",
        assignmentNum: 14,
        grade: "A",
        links: [
            {
                url: "https://github.com/shodgesio/job-scraper"
            },
            {
                url: "https://mongo-job-scraper.herokuapp.com/"
            },
            {
                url: "https://shodges.io/"
            }
        ]
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        assignmentName: "15: React Homework",
        assignmentNum: 15,
        grade: "A",
        links: [
            {
                url: "https://github.com/shodgesio/react"
            },
            {
                url: "https://shodges.io/"
            },
            {
                url: "https://shodges.io/react/"
            }
        ]
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        assignmentName: "1: HTML, CSS Homework",
        assignmentNum: 1,
        grade: "A",
        links: [
            {
                url: "https://github.com/StewartBC/Basic-Portfolio"
            },
            {
                url: "https://stewartbc.github.io/Basic-Portfolio/"
            }
        ]
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        assignmentName: "2: CSS Framework & Media Queries",
        assignmentNum: 2,
        grade: "B",
        links: [
            {
                url: "https://github.com/StewartBC/Bootstrap-Portfolio"
            },
            {
                url: "https://github.com/StewartBC/Responsive-Portfolio"
            },
            {
                url: "https://stewartbc.github.io/Bootstrap-Portfolio/index.html"
            },
            {
                url: "https://stewartbc.github.io/Responsive-Portfolio/"
            }
        ]
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        assignmentName: "3: JavaScript Homework",
        assignmentNum: 3,
        grade: "A+",
        links: [
            {
                url: "https://github.com/StewartBC/Word-Guess-Game"
            },
            {
                url: "https://stewartbc.github.io/Word-Guess-Game/"
            }
        ]
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        assignmentName: "4: jQuery Homework",
        assignmentNum: 4,
        grade: "A+",
        links: [
            {
                url: "https://github.com/StewartBC/unit-4-game"
            },
            {
                url: "https://stewartbc.github.io/unit-4-game/"
            }
        ]
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        assignmentName: "5: jQuery & JavaScript Homework",
        assignmentNum: 5,
        grade: "A+",
        links: [
            {
                url: "https://github.com/StewartBC/TriviaGame"
            },
            {
                url: "https://stewartbc.github.io/TriviaGame/"
            }
        ]
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        assignmentName: "6: APIs & AJAX Homework",
        assignmentNum: 6,
        grade: "C+",
        links: [
            {
                url: "https://github.com/StewartBC/GifTastic"
            },
            {
                url: "https://stewartbc.github.io/GifTastic/"
            }
        ]
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        assignmentName: "7: Firebase Homework",
        assignmentNum: 7, 
        grade: "A+",
        links: [
            {
                url: "https://console.firebase.google.com/u/1/project/connect-four-e6c37/database/connect-four-e6c37/data"
            },
            {
                url: "https://github.com/StewartBC/Connect-Four-Multiplayer"
            },
            {
                url: "https://stewartbc.github.io/Connect-Four-Multiplayer/"
            },
            {
                url: "https://stewartbc.github.io/Responsive-Portfolio/portfolio.html"
            }
        ]
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        assignmentName: "Project 1",
        assignmentNum: 8,
        grade: "A+",
        links: [
            {
                url: "https://github.com/smhodgesii/ProjectOne"
            },
            {
                url: "https://smhodgesii.github.io/ProjectOne/"
            },
            {
                url: "https://stewartbc.github.io/Responsive-Portfolio/portfolio.html"
            }
        ]
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        assignmentName: "8: Node.js Homework",
        assignmentNum: 9,
        grade: "A+",
        links: [
            {
                url: "https://github.com/StewartBC/liri-node-app"
            },
            {
                url: "https://stewartbc.github.io/Responsive-Portfolio/portfolio.html"
            }
        ]
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        assignmentName: "10: MySQL Homework",
        assignmentNum: 10,
        grade: "A",
        links: [
            {
                url: "https://github.com/StewartBC/Bamazon"
            }
        ]
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        assignmentName: "11: Express.js Homework",
        assignmentNum: 11,
        grade: "A+",
        links: [
            {
                url: "https://github.com/StewartBC/Duo-Finder"
            },
            {
                url: "https://infinite-sea-76479.herokuapp.com/"
            }
        ]
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        assignmentName: "12: MySQL Full Stack App",
        assignmentNum: 12,
        grade: "A",
        links: [
            {
                url: "https://dungeon-tracker.herokuapp.com/"
            },
            {
                url: "https://github.com/StewartBC/Dungeon-Tracker"
            }
        ]
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        assignmentName: "Project 2",
        assignmentNum: 13,
        grade: "A",
        links: [
            {
                url: "http://bootcamphuddle.com/"
            },
            {
                url: "https://github.com/shodgesio/ProjectTwo"
            }
        ]
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        assignmentName: "14: MongoDB Homework",
        assignmentNum: 14,
        grade: "A+",
        links: [
            {
                url: "http://scrape-it.herokuapp.com/"
            },
            {
                url: "https://github.com/StewartBC/Scraper"
            }
        ]
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        assignmentName: "15: React Homework",
        assignmentNum: 15,
        grade: "A+",
        links: [
            {
                url: "https://github.com/StewartBC/react-game"
            },
            {
                url: "https://stewartbc.github.io/react-game/"
            }
        ]
    }
];

const submissionSeed = [
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        assignmentName: "1: HTML, CSS Homework",
        assignmentNum: 1,
        grade: "A+",
        links: [
            {
                url: "https://github.com/smhodgesii/Basic-Portfolio"
            },
            {
                url: "https://github.com/smhodgesii/HW-Wireframe"
            },
            {
                url: "https://smhodgesii.github.io/Basic-Portfolio/"
            },
            {
                url: "https://smhodgesii.github.io/HW-Wireframe/"
            }
        ]
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        assignmentName: "2: CSS Framework & Media Queries",
        assignmentNum: 2,
        grade: "C",
        links: [
            {
                url: "https://github.com/smhodgesii/Bootstrap-Portfolio"
            },
            {
                url: "https://github.com/smhodgesii/Responsive-Portfolio"
            },
            {
                url: "https://smhodgesii.github.io/Bootstrap-Portfolio/"
            },
            {
                url: "https://smhodgesii.github.io/Responsive-Portfolio/"
            }
        ]
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        assignmentName: "3: JavaScript Homework",
        assignmentNum: 3,
        grade: "A+",
        links: [
            {
                url: "https://github.com/smhodgesii/Word-Guess-Game"
            },
            {
                url: "https://smhodgesii.github.io/Word-Guess-Game/"
            }
        ]
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        assignmentName: "4: jQuery Homework",
        assignmentNum: 4,
        grade: "A",
        links: [
            {
                url: "https://github.com/smhodgesii/unit-4-game"
            },
            {
                url: "https://smhodgesii.github.io/unit-4-game/"
            }
        ]
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        assignmentName: "5: jQuery & JavaScript Homework",
        assignmentNum: 5,
        grade: "B",
        links: [
            {
                url: "https://github.com/smhodgesii/TriviaGame"
            },
            {
                url: "https://smhodgesii.github.io/TriviaGame/"
            }
        ]
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        assignmentName: "6: APIs & AJAX Homework",
        assignmentNum: 6,
        grade: "A+",
        links: [
            {
                url: "https://github.com/smhodgesii/gifMaker"
            },
            {
                url: "https://smhodgesii.github.io/gifMaker/"
            }
        ]
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        assignmentName: "7: Firebase Homework",
        assignmentNum: 7,
        grade: "A+",
        links: [
            {
                url: "https://github.com/smhodgesii/trainSchedule"
            },
            {
                url: "https://smhodgesii.github.io/portfolio.html"
            },
            {
                url: "https://smhodgesii.github.io/trainSchedule/"
            }
        ]
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        assignmentName: "Project 1",
        assignmentNum: 8,
        grade: "A+",
        links: [
            {
                url: "https://github.com/smhodgesii/ProjectOne"
            },
            {
                url: "https://smhodgesii.github.io/portfolio.html"
            },
            {
                url: "https://smhodgesii.github.io/ProjectOne/"
            }
        ]
    },
    {
        studentName: "Stephen Hodges",
        studentEmail: "stephen@shodges.io",
        assignmentName: "8: Node.js Homework",
        assignmentNum: 9,
        grade: "A",
        links: [
            {
                url: "http://shodges.io/"
            },
            {
                url: "https://github.com/shodgesio/liri-node-app"
            }
        ]
    },
    
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        assignmentName: "1: HTML, CSS Homework",
        assignmentNum: 1,
        grade: "A",
        links: [
            {
                url: "https://github.com/StewartBC/Basic-Portfolio"
            },
            {
                url: "https://stewartbc.github.io/Basic-Portfolio/"
            }
        ]
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        assignmentName: "2: CSS Framework & Media Queries",
        assignmentNum: 2,
        grade: "B",
        links: [
            {
                url: "https://github.com/StewartBC/Bootstrap-Portfolio"
            },
            {
                url: "https://github.com/StewartBC/Responsive-Portfolio"
            },
            {
                url: "https://stewartbc.github.io/Bootstrap-Portfolio/index.html"
            },
            {
                url: "https://stewartbc.github.io/Responsive-Portfolio/"
            }
        ]
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        assignmentName: "3: JavaScript Homework",
        assignmentNum: 3,
        grade: "A+",
        links: [
            {
                url: "https://github.com/StewartBC/Word-Guess-Game"
            },
            {
                url: "https://stewartbc.github.io/Word-Guess-Game/"
            }
        ]
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        assignmentName: "4: jQuery Homework",
        assignmentNum: 4,
        grade: "A+",
        links: [
            {
                url: "https://github.com/StewartBC/unit-4-game"
            },
            {
                url: "https://stewartbc.github.io/unit-4-game/"
            }
        ]
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        assignmentName: "5: jQuery & JavaScript Homework",
        assignmentNum: 5,
        grade: "A+",
        links: [
            {
                url: "https://github.com/StewartBC/TriviaGame"
            },
            {
                url: "https://stewartbc.github.io/TriviaGame/"
            }
        ]
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        assignmentName: "6: APIs & AJAX Homework",
        assignmentNum: 6,
        grade: "C+",
        links: [
            {
                url: "https://github.com/StewartBC/GifTastic"
            },
            {
                url: "https://stewartbc.github.io/GifTastic/"
            }
        ]
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        assignmentName: "7: Firebase Homework",
        assignmentNum: 7, 
        grade: "A+",
        links: [
            {
                url: "https://console.firebase.google.com/u/1/project/connect-four-e6c37/database/connect-four-e6c37/data"
            },
            {
                url: "https://github.com/StewartBC/Connect-Four-Multiplayer"
            },
            {
                url: "https://stewartbc.github.io/Connect-Four-Multiplayer/"
            },
            {
                url: "https://stewartbc.github.io/Responsive-Portfolio/portfolio.html"
            }
        ]
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        assignmentName: "Project 1",
        assignmentNum: 8,
        grade: "A+",
        links: [
            {
                url: "https://github.com/smhodgesii/ProjectOne"
            },
            {
                url: "https://smhodgesii.github.io/ProjectOne/"
            },
            {
                url: "https://stewartbc.github.io/Responsive-Portfolio/portfolio.html"
            }
        ]
    },
    {
        studentName: "Stewart Capps",
        studentEmail: "stewcapps@gmail.com",
        assignmentName: "8: Node.js Homework",
        assignmentNum: 9,
        grade: "A+",
        links: [
            {
                url: "https://github.com/StewartBC/liri-node-app"
            },
            {
                url: "https://stewartbc.github.io/Responsive-Portfolio/portfolio.html"
            }
        ]
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        assignmentName: "1: HTML, CSS Homework",
        assignmentNum: 1,
        grade: "A+",
        links: [
            {
                url: "https://github.com/smhodgesii/Basic-Portfolio"
            },
            {
                url: "https://github.com/smhodgesii/HW-Wireframe"
            },
            {
                url: "https://smhodgesii.github.io/Basic-Portfolio/"
            },
            {
                url: "https://smhodgesii.github.io/HW-Wireframe/"
            }
        ]
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        assignmentName: "2: CSS Framework & Media Queries",
        assignmentNum: 2,
        grade: "C",
        links: [
            {
                url: "https://github.com/smhodgesii/Bootstrap-Portfolio"
            },
            {
                url: "https://github.com/smhodgesii/Responsive-Portfolio"
            },
            {
                url: "https://smhodgesii.github.io/Bootstrap-Portfolio/"
            },
            {
                url: "https://smhodgesii.github.io/Responsive-Portfolio/"
            }
        ]
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        assignmentName: "3: JavaScript Homework",
        assignmentNum: 3,
        grade: "A+",
        links: [
            {
                url: "https://github.com/smhodgesii/Word-Guess-Game"
            },
            {
                url: "https://smhodgesii.github.io/Word-Guess-Game/"
            }
        ]
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        assignmentName: "4: jQuery Homework",
        assignmentNum: 4,
        grade: "A",
        links: [
            {
                url: "https://github.com/smhodgesii/unit-4-game"
            },
            {
                url: "https://smhodgesii.github.io/unit-4-game/"
            }
        ]
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        assignmentName: "5: jQuery & JavaScript Homework",
        assignmentNum: 5,
        grade: "B",
        links: [
            {
                url: "https://github.com/smhodgesii/TriviaGame"
            },
            {
                url: "https://smhodgesii.github.io/TriviaGame/"
            }
        ]
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        assignmentName: "6: APIs & AJAX Homework",
        assignmentNum: 6,
        grade: "A+",
        links: [
            {
                url: "https://github.com/smhodgesii/gifMaker"
            },
            {
                url: "https://smhodgesii.github.io/gifMaker/"
            }
        ]
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        assignmentName: "7: Firebase Homework",
        assignmentNum: 7,
        grade: "A+",
        links: [
            {
                url: "https://github.com/smhodgesii/trainSchedule"
            },
            {
                url: "https://smhodgesii.github.io/portfolio.html"
            },
            {
                url: "https://smhodgesii.github.io/trainSchedule/"
            }
        ]
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        assignmentName: "Project 1",
        assignmentNum: 8,
        grade: "A+",
        links: [
            {
                url: "https://github.com/smhodgesii/ProjectOne"
            },
            {
                url: "https://smhodgesii.github.io/portfolio.html"
            },
            {
                url: "https://smhodgesii.github.io/ProjectOne/"
            }
        ]
    },
    {
        studentName: "Ty Atkins",
        studentEmail: "atkinsta@gmail.com",
        assignmentName: "8: Node.js Homework",
        assignmentNum: 9,
        grade: "A",
        links: [
            {
                url: "http://shodges.io/"
            },
            {
                url: "https://github.com/shodgesio/liri-node-app"
            }
        ]
    },
    
    {
        studentName: "Adam Pegram",
        studentEmail: "apegram@gmail.com",
        assignmentName: "1: HTML, CSS Homework",
        assignmentNum: 1,
        grade: "A",
        links: [
            {
                url: "https://github.com/StewartBC/Basic-Portfolio"
            },
            {
                url: "https://stewartbc.github.io/Basic-Portfolio/"
            }
        ]
    },
    {
        studentName: "Adam Pegram",
        studentEmail: "apegram@gmail.com",
        assignmentName: "2: CSS Framework & Media Queries",
        assignmentNum: 2,
        grade: "B",
        links: [
            {
                url: "https://github.com/StewartBC/Bootstrap-Portfolio"
            },
            {
                url: "https://github.com/StewartBC/Responsive-Portfolio"
            },
            {
                url: "https://stewartbc.github.io/Bootstrap-Portfolio/index.html"
            },
            {
                url: "https://stewartbc.github.io/Responsive-Portfolio/"
            }
        ]
    },
    {
        studentName: "Adam Pegram",
        studentEmail: "apegram@gmail.com",
        assignmentName: "3: JavaScript Homework",
        assignmentNum: 3,
        grade: "A+",
        links: [
            {
                url: "https://github.com/StewartBC/Word-Guess-Game"
            },
            {
                url: "https://stewartbc.github.io/Word-Guess-Game/"
            }
        ]
    },
    {
        studentName: "Adam Pegram",
        studentEmail: "apegram@gmail.com",
        assignmentName: "4: jQuery Homework",
        assignmentNum: 4,
        grade: "A+",
        links: [
            {
                url: "https://github.com/StewartBC/unit-4-game"
            },
            {
                url: "https://stewartbc.github.io/unit-4-game/"
            }
        ]
    },
    {
        studentName: "Adam Pegram",
        studentEmail: "apegram@gmail.com",
        assignmentName: "5: jQuery & JavaScript Homework",
        assignmentNum: 5,
        grade: "A+",
        links: [
            {
                url: "https://github.com/StewartBC/TriviaGame"
            },
            {
                url: "https://stewartbc.github.io/TriviaGame/"
            }
        ]
    },
    {
        studentName: "Adam Pegram",
        studentEmail: "apegram@gmail.com",
        assignmentName: "6: APIs & AJAX Homework",
        assignmentNum: 6,
        grade: "C+",
        links: [
            {
                url: "https://github.com/StewartBC/GifTastic"
            },
            {
                url: "https://stewartbc.github.io/GifTastic/"
            }
        ]
    },
    {
        studentName: "Adam Pegram",
        studentEmail: "apegram@gmail.com",
        assignmentName: "7: Firebase Homework",
        assignmentNum: 7, 
        grade: "A+",
        links: [
            {
                url: "https://console.firebase.google.com/u/1/project/connect-four-e6c37/database/connect-four-e6c37/data"
            },
            {
                url: "https://github.com/StewartBC/Connect-Four-Multiplayer"
            },
            {
                url: "https://stewartbc.github.io/Connect-Four-Multiplayer/"
            },
            {
                url: "https://stewartbc.github.io/Responsive-Portfolio/portfolio.html"
            }
        ]
    },
    {
        studentName: "Adam Pegram",
        studentEmail: "apegram@gmail.com",
        assignmentName: "Project 1",
        assignmentNum: 8,
        grade: "A+",
        links: [
            {
                url: "https://github.com/smhodgesii/ProjectOne"
            },
            {
                url: "https://smhodgesii.github.io/ProjectOne/"
            },
            {
                url: "https://stewartbc.github.io/Responsive-Portfolio/portfolio.html"
            }
        ]
    },
    {
        studentName: "Adam Pegram",
        studentEmail: "apegram@gmail.com",
        assignmentName: "8: Node.js Homework",
        assignmentNum: 9,
        grade: "A+",
        links: [
            {
                url: "https://github.com/StewartBC/liri-node-app"
            },
            {
                url: "https://stewartbc.github.io/Responsive-Portfolio/portfolio.html"
            }
        ]
    }
];

export default submissionSeed;