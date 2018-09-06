const oldAssignmentSeed = [
    {
        name: "1: HTML, CSS Homework",
        assignmentType: "Homework",
        assignmentNum: 1,
        description: "In this assignment you will create a basic portfolio for yourself.",
        dueDate: "Monday May 28, 2018",
        dateInt: 525,
        instructions: [
            {
                stepNum: 1,
                text: "Create a new repository in GitHub called HW-Wireframe."
            },
            {
                stepNum: 2,
                text: "Clone this repository to your computer by following the process we went over in class."
            },
            {
                stepNum: 3,
                text: "Navigate to the HW-Wireframe folder you just cloned onto your machine. Then create two files inside this folder: index.html and style.css."
            },
            {
                stepNum: 4,
                text: "Make your initial Git commit and push it to GitHub."
            },
            {
                stepNum: 5,
                text: "Return to your local copies of index.html and style.css. Using the screenshot at the top of these instructions, recreate the design using HTML/CSS."
            },
            {
                stepNum: 6,
                text: "When you finish the assignment, commit your changes with Git and push them into your GitHub repo."
            }
        ]
    },
    {
        name: "2: CSS Framework & Media Queries",
        assignmentType: "Homework",
        description: "In this assignment you will recreate your portfolio using media queries and Bootstrap.",
        dueDate: "Thursday May 31, 2018",
        dateInt: 531,
        assignmentNum: 2,
        instructions: [
            {
                stepNum: 1,
                text: "Copy the contents of Basic-Portfolio (your first homework solution) and paste the mentioned files into Responsive-Portfolio."
            },
            {
                stepNum: 2,
                text: "Note: Be sure not to include any dot files (e.g. .git, .gitignore) from the Basic-Portfolio repo."
            },
            {
                stepNum: 3,
                text: "If you chose the Wireframe exercise for your first homework assignment, talk to a TA, who will provide you with a template for your portfolio."
            },
            {
                stepNum: 4,
                text: "Inside your Responsive-Portfolio folder, find your styles.css file. You will write your media queries at the bottom of styles.css."
            },
            {
                stepNum: 5,
                text: "Use three @media screen tags, each with one of these max-widths: 980px, 768px and 640px."
            },
            {
                stepNum: 6,
                text: "Make the position of the header static (the default positioning) when the screen is 640px wide. The header design takes up a lot of room; you don't want it to stick to the top of a small screen and leave no room for the rest of your site."
            },
            {
                stepNum: 7,
                text: "Be sure to include the viewport tag in all your HTML files, otherwise your media-queries won't function as expected on mobile devices. (Hint: You won't need to use exact pixels for anything other than the container)"
            },
            {
                stepNum: 8,
                text: "Deploy your new portfolio (now with media queries!) to GitHub Pages."
            }
        ]
    },
    {
        name: "3: JavaScript Homework",
        assignmentType: "Homework",
        description: "In this assignment you will make a simple game using JavaScript.",
        dueDate: "Monday June 4, 2018",
        dateInt: 604,
        assignmentNum: 3,
        instructions: [
            {
                stepNum: 1,
                text: "Watch the demo."
            },
            {
                stepNum: 2,
                text: "You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:"
            },
            {
                stepNum: 3,
                text: "Guess what letter I'm thinking of"
            },
            {
                stepNum: 4,
                text: "Wins: (# of times the user has guessed the letter correctly)"
            },
            {
                stepNum: 5,
                text: "Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)"
            },
            {
                stepNum: 6,
                text: "Guesses Left: (# of guesses left. This will update)"
            },
            {
                stepNum: 7,
                text: "Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)"
            },
            {
                stepNum: 8,
                text: "When the player wins, increase the Wins counter and start the game over again (without refreshing the page)."
            },
            {
                stepNum: 9,
                text: "When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins)."
            }
        ]
    },
    {
        name: "4: jQuery Homework",
        assignmentType: "Homework",
        description: "In this assignment you will make a more complex JavaScript game.",
        dueDate: "Thursday June 7, 2018",
        dateInt: 607,
        assignmentNum: 4,
        instructions: [
            {
                stepNum: 1,
                text: "Watch the demo."
            },
            {
                stepNum: 2,
                text: "The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters."
            },
            {
                stepNum: 3,
                text: "Here's how the app works:"
            },
            {
                stepNum: 4,
                text: "There will be four crystals displayed as buttons on the page."
            },
            {
                stepNum: 5,
                text: "The player will be shown a random number at the start of the game."
            },
            {
                stepNum: 6,
                text: "When the player clicks on a crystal, it will add a specific amount of points to the player's total score."
            },
            {
                stepNum: 7,
                text: "The player wins if their total score matches the random number from the beginning of the game."
            },
            {
                stepNum: 8,
                text: "The player loses if their score goes above the random number."
            },
            {
                stepNum: 9,
                text: "The game restarts whenever the player wins or loses."
            },
            {
                stepNum: 10,
                text: "The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game."
            }
        ]
    },
    {
        name: "5: jQuery & JavaScript Homework",
        assignmentType: "Homework",
        description: "In this assignment you will create a trivia game using timers in JavaScript.",
        dueDate: "Monday June 10, 2018",
        dateInt: 610,
        assignmentNum: 5,
        instructions: [
            {
                stepNum: 1,
                text: "Create a GitHub repo called TriviaGame, then clone the repo to your computer."
            },
            {
                stepNum: 2,
                text: "Create a file inside of the TriviaGame folder called index.html. This is where you'll mark up all of your HTML."
            },
            {
                stepNum: 3,
                text: "Don't forget to include a script tag with the jQuery library."
            },
            {
                stepNum: 4,
                text: "Create a folder inside of the TriviaGame folder called assets."
            },
            {
                stepNum: 5,
                text: "Inside assets, create three folders: css, javascript, images"
            },
            {
                stepNum: 6,
                text: "You'll create a trivia form with multiple choice or true/false options (your choice)."
            },
            {
                stepNum: 7,
                text: "The player will have a limited amount of time to finish the quiz."
            },
            {
                stepNum: 8,
                text: "Don't let the player pick more than one answer per question."
            },
            {
                stepNum: 9,
                text: "Don't forget to include a countdown timer."
            }
        ]
    },
    {
        name: "6: APIs & AJAX Homework",
        assignmentType: "Homework",
        description: "In this assignment you will make a JavaScript app that talks to the Giphy API.",
        dueDate: "Thursday June 14, 2018",
        dateInt: 614,
        assignmentNum: 6,
        instructions: [
            {
                stepNum: 1,
                text: "Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics."
            },
            {
                stepNum: 2,
                text: "Your app should take the topics in this array and create buttons in your HTML."
            },
            {
                stepNum: 3,
                text: "When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page."
            },
            {
                stepNum: 4,
                text: "When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing."
            },
            {
                stepNum: 5,
                text: "Under every gif, display its rating (PG, G, so on)."
            },
            {
                stepNum: 6,
                text: "Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page."
            },
            {
                stepNum: 7,
                text: "Deploy your assignment to Github Pages."
            },
            {
                stepNum: 8,
                text: "Rejoice! You just made something really cool."
            }
        ]
    },
    {
        name: "7: Firebase Homework",
        assignmentType: "Homework",
        description: "In this assignment you will make a JavaScript app that utlizies Firebase.",
        dueDate: "Monday June 18, 2018",
        dateInt: 618,
        assignmentNum: 7,
        instructions: [
            {
                stepNum: 1,
                text: "Make sure that your app suits this basic spec:"
            },
            {
                stepNum: 2,
                text: "When adding trains, administrators should be able to submit the following:"
            },
            {
                stepNum: 3,
                text: "Train Name"
            },
            {
                stepNum: 4,
                text: "Destination"
            },
            {
                stepNum: 5,
                text: "First Train Time -- in military time"
            },
            {
                stepNum: 6,
                text: "Frequency -- in minutes"
            },
            {
                stepNum: 7,
                text: "Code this app to calculate when the next train will arrive; this should be relative to the current time."
            },
            {
                stepNum: 8,
                text: "Users from many different machines must be able to view same train times."
            },
            {
                stepNum: 9,
                text: "Styling and theme are completely up to you. Get Creative!"
            }
        ]
    },
    {
        name: "8: Node.js Homework",
        assignmentType: "Homework",
        description: "In this assignment you will create a liri node app that talks with different APIs all within the command console.",
        dueDate: "Thursday June 28, 2018",
        dateInt: 628,
        assignmentNum: 8,
        instructions: [
            {
                stepNum: 1,
                text: "Navigate to the root of your project and run npm init -y — this will initialize a package.json file for your project. The package.json file is required for installing third party npm packages and saving their version numbers. If you fail to initialize a package.json file, it will be troublesome, and at times almost impossible for anyone else to run your code after cloning your project."
            },
            {
                stepNum: 2,
                text: "Make a .gitignore file and add node_modules, .DS_Store, and .env to it. This will tell git not to track these files, and thus they won't be committed to Github."
            },
            {
                stepNum: 3,
                text: "Make a JavaScript file named keys.js."
            },
            {
                stepNum: 4,
                text: "Register for Twitter and Spotify API keys."
            },
            {
                stepNum: 5,
                text: "Next, create a file named .env and add your API keys to it."
            },
            {
                stepNum: 6,
                text: "Add commands that do the following:"         
            },
            {
                stepNum: 7,
                text: "Show your last 20 tweets and when they were created at in your terminal/bash window."
            },
            {
                stepNum: 8,
                text: "Show information about the song in your terminal/bash window."
            },
            {
                stepNum: 9,
                text: "Show information about the movie in your terminal/bash window."
            }
        ]
    },
    {
        name: "Task Milestone 1: Employer Competitive",
        assignmentType: "Career Services",
        description: "This short lesson will provide you a chance to understand the career services course and its goals. Our goal is to help you become Employer Competitive so that you are more likely to be successful in the job search process.",
        dueDate: "Thursday May 30, 2018",
        dateInt: 530,
        assignmentNum: 9,
        instructions: [
            {
                stepNum: 1,
                text: "Develop a short brand statement and submit it here, to Boot Camp Spot, as a google doc link. Set sharing settings to ANYONE WITH THE LINK CAN EDIT access. The following resources may help you complete this task. a) Professional Brand Statement Criteria - If you already have a brand statement and are just refining it, use this guide to assess your brand statement: http://bit.ly/2s2xRjh b) Step by Step Guide to Creating a Professional Brand Statement - If you dont have a statement or are starting from scratch, you may want to use this guide. You DO NOT need to submit this guide -- it is simply here to provide help: http://bit.ly/2E069Jh c) Examples of Professional Brand Statements - Whether you are new to brand statements or a veteran at marketing yourself, look through our collection of sample brand statements for inspiration: http://bit.ly/2saT5vo d) Frequently Asked Questions about Brand Statements - If you have questions about the brand statement, look at our FAQ document to help you: http://bit.ly/2Egpp4C"
            },
            {
                stepNum: 2,
                text: "Prepare and practice your elevator pitch. You do NOT need to submit this, but you will start meeting people and it will be helpful to have a pitch ready to go. If you are new to developing and delivering an elevator pitch, use the following resource. a) Elevator Pitch Overview and Tips - This document provides you with an overview of what we mean by elevator pitches and provides some tips on how to create one: http://bit.ly/2EBCrr7"
            }
        ]
    },
    {
        name: "Project 1",
        assignmentType: "Project",
        description: "In your first project you will utilize all of the tools you have learned thus far in the bootcamp.",
        dueDate: "Thursday June 21, 2018",
        dateInt: 621,
        assignmentNum: 10,
        instructions: [
            {
                stepNum: 1,
                text: "Do your first standup meeting with your group."
            },
            {
                stepNum: 2,
                text: "Make a gitHub repository and add everyone in your group as collaborators."
            },
            {
                stepNum: 3,
                text: "Complete your MVP for your project by the deadline."
            },
            {
                stepNum: 4,
                text: "Make sure to constantly push any changes you make to the gitHub repository."
            },
            {
                stepNum: 5,
                text: "Present your project!"
            }
        ]
    },
    {
        name: "9: Advanced JavaScript Homework",
        assignmentType: "Homework",
        description: "In this assignment you will create a hangman node application.",
        dueDate: "Monday July 2, 2018",
        dateInt: 702,
        assignmentNum: 11,
        instructions: [
            {
                stepNum: 1,
                text: "The completed game should be able to receive user input using the inquirer or prompt npm packages."
            },
            {
                stepNum: 2,
                text: "Your solution should have, at minimum, three files:"
            },
            {
                stepNum: 3,
                text: "Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter."
            },
            {
                stepNum: 4,
                text: "Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess."
            },
            {
                stepNum: 5,
                text: "index.js: The file containing the logic for the course of the game, which depends on Word.js."
            },
            {
                stepNum: 6,
                text: "Letter.js should not require any other files."
            },
            {
                stepNum: 7,
                text: "Word.js should only require Letter.js"
            }
        ]
    },
    {
        name: "10: MySQL Homework",
        assignmentType: "Homework",
        description: "In this assignment you will make a MySQL app that tracks the current stock of items.",
        dueDate: "Monday July 9, 2018",
        dateInt: 709,
        assignmentNum: 12,
        instructions: [
            {
                stepNum: 1,
                text: "Create a MySQL Database called bamazon."
            },
            {
                stepNum: 2,
                text: "Then create a Table inside of that database called products."
            },
            {
                stepNum: 3,
                text: "Populate this database with around 10 different products. (i.e. Insert mock data rows into this database and table)."
            },
            {
                stepNum: 4,
                text: "Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale."
            },
            {
                stepNum: 5,
                text: "The app should then prompt users with two messages asking them for the product ID and how many they want to buy."
            },
            {
                stepNum: 6,
                text: "Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request."
            },
            {
                stepNum: 7,
                text: "If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through."
            },
            {
                stepNum: 8,
                text: "However, if your store does have enough of the product, you should fulfill the customer's order."
            }
        ]
    },
    {
        name: "11: Express.js Homework",
        assignmentType: "Homework",
        description: "In this assignment you will make a friend finder app using Express and Node.",
        dueDate: "Thursday July 12, 2018",
        dateInt: 712,
        assignmentNum: 13,
        instructions: [
            {
                stepNum: 1,
                text: "Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question."
            },
            {
                stepNum: 2,
                text: "Your server.js file should require the basic npm packages we've used in class: express, body-parser and path."
            },
            {
                stepNum: 3,
                text: "Your htmlRoutes.js file should include a GET route to /survery as well as a catch-all route to home.html."
            },
            {
                stepNum: 4,
                text: "Your apiRoutes.js file should include a GET route to get all friends and a POST route to post a new friend."
            },
            {
                stepNum: 5,
                text: "You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below."
            },
            {
                stepNum: 6,
                text: "Determine the user's most compatible friend."
            },
            {
                stepNum: 7,
                text: "Once you've found the current user's most compatible friend, display the result as a modal pop-up."
            }
        ]
    },
    {
        name: "12: MySQL Full Stack App",
        assignmentType: "Homework",
        description: "In this assignment you will create a full stack app and host it on heroku.",
        dueDate: "Tuesday July 17, 2018",
        dateInt: 717,
        assignmentNum: 14,
        instructions: [
            {
                stepNum: 1,
                text: "Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat."
            },
            {
                stepNum: 2,
                text: "Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured."
            },
            {
                stepNum: 3,
                text: "Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page."
            },
            {
                stepNum: 4,
                text: "Your app will store every burger in a database, whether devoured or not."
            }
        ]
    },
    {
        name: "13: Sequelize Homework",
        assignmentType: "Homework",
        description: "In this assignment you will create a full stack app using sequelize.",
        dueDate: "Thursday July 19, 2018",
        dateInt: 719,
        assignmentNum: 15,
        instructions: [
            {
                stepNum: 1,
                text: "Create a new folder called sequelizedBurger"
            },
            {
                stepNum: 2,
                text: "Copy the contents of your completed assignment from last week."
            },
            {
                stepNum: 3,
                text: "Run sequelize init to create the necessary files."
            },
            {
                stepNum: 4,
                text: "Remove all references to your vanilla MySQL queries and replace them with Sequelize queries."
            },
            {
                stepNum: 5,
                text: "When you finish, your site should function just like your last one."
            }
        ]
    },
    {
        name: "Project 2",
        assignmentType: "Project",
        description: "In this project you must create a full stack application with a polished front-end and user interface.",
        dueDate: "Tuesday July 24, 2018",
        dateInt: 724,
        assignmentNum: 16,
        instructions: [
            {
                stepNum: 1,
                text: "Do your first standup meeting with your group."
            },
            {
                stepNum: 2,
                text: "Make a gitHub repository and add everyone in your group as collaborators."
            },
            {
                stepNum: 3,
                text: "Complete your MVP for your project by the deadline."
            },
            {
                stepNum: 4,
                text: "Make sure to constantly push any changes you make to the gitHub repository."
            },
            {
                stepNum: 5,
                text: "Present your project!"
            }
        ]
    },
    {
        name: "14: MongoDB Homework",
        assignmentType: "Homework",
        description: "In this assignment you will create a web scraper and save the results to a mongo database.",
        dueDate: "Monday July 30, 2018",
        dateInt: 730,
        assignmentNum: 17,
        instructions: [
            {
                stepNum: 1,
                text: "Create an app that accomplishes the following:"
            },
            {
                stepNum: 2,
                text: "Whenever a user visits your site, the app should scrape stories from a news outlet of your choice and display them for the user. Each scraped article should be saved to your application database. At a minimum, the app should scrape and display the headline, summary, and URL for each entry."
            },
            {
                stepNum: 3,
                text: "Users should also be able to leave comments on the articles displayed and revisit them later. The comments should be saved to the database as well and associated with their articles. Users should also be able to delete comments left on articles. All stored comments should be visible to every user."
            }
        ]
    },
    {
        name: "15: React Homework",
        assignmentType: "Homework",
        description: "In this assignment you will create a react memory game and host it to gitHub pages.",
        dueDate: "Thursday August 2, 2018",
        dateInt: 802,
        assignmentNum: 18,
        instructions: [
            {
                stepNum: 1,
                text: "Create a new React application using Create React App."
            },
            {
                stepNum: 2,
                text: "The application should render different images (of your choice) to the screen. Each image should listen for click events."
            },
            {
                stepNum: 3,
                text: "The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once."
            },
            {
                stepNum: 4,
                text: "Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order."
            },
            {
                stepNum: 5,
                text: "Once the user's score is reset after an incorrect guess, the game should restart."
            },
            {
                stepNum: 6,
                text: "When complete, the application should be deployed to Github Pages. See the README generated with Create React App for instructions on deploying the application to Github Pages."
            }
        ]
    },
    {
        name: "16: React Homework #2",
        assignmentType: "Homework",
        description: "In this assignment you will make another React app.",
        dueDate: "Monday August 6, 2018",
        dateInt: 806,
        assignmentNum: 19,
        instructions: [
            {
                stepNum: 1,
                text: "Create a MongoDB database called nytreact."
            },
            {
                stepNum: 2,
                text: "Using mongoose, then create an Article schema and model"
            },
            {
                stepNum: 3,
                text: "At a minimum, articles should have a title, date and url."
            },
            {
                stepNum: 4,
                text: "Create a Node/Express/MongoDB/ReactJS app called nytreact. This will be a recreation of the NYT Articles Search exercise application we built back in Week 6."
            },
            {
                stepNum: 5,
                text: "Create a Bootstrap layout similar to that displayed in HW_Assignment.png. This should be a SPA (Single Page Application) that uses react-router-dom to navigate, hide and show your React components without changing the route within Express."
            },
            {
                stepNum: 6,
                text: "You'll need several Express routes for your app for getting, posting, and deleting articles."
            },
            {
                stepNum: 7,
                text: "The layout should include at least two React Components for each page Home and Saved."
            }
        ]
    },
    {
        name: "Project 3",
        assignmentType: "Project",
        description: "In this project you must create a full stack application using a database of your choice with a polished front-end and user interface.",
        dueDate: "Thursday August 16, 2018",
        dateInt: 816,
        assignmentNum: 20,
        instructions: [
            {
                stepNum: 1,
                text: "Do your first standup meeting with your group."
            },
            {
                stepNum: 2,
                text: "Make a gitHub repository and add everyone in your group as collaborators."
            },
            {
                stepNum: 3,
                text: "Complete your MVP for your project by the deadline."
            },
            {
                stepNum: 4,
                text: "Make sure to constantly push any changes you make to the gitHub repository."
            },
            {
                stepNum: 5,
                text: "Present your project!"
            }
        ]
    }
];

const assignmentSeed = [
    {
        name: "1: HTML, CSS Homework",
        assignmentType: "Homework",
        assignmentNum: 1,
        description: "In this assignment you will create a basic portfolio for yourself.",
        dueDate: "Monday July 30, 2018",
        dateInt: 525,
        instructions: [
            {
                stepNum: 1,
                text: "Create a new repository in GitHub called HW-Wireframe."
            },
            {
                stepNum: 2,
                text: "Clone this repository to your computer by following the process we went over in class."
            },
            {
                stepNum: 3,
                text: "Navigate to the HW-Wireframe folder you just cloned onto your machine. Then create two files inside this folder: index.html and style.css."
            },
            {
                stepNum: 4,
                text: "Make your initial Git commit and push it to GitHub."
            },
            {
                stepNum: 5,
                text: "Return to your local copies of index.html and style.css. Using the screenshot at the top of these instructions, recreate the design using HTML/CSS."
            },
            {
                stepNum: 6,
                text: "When you finish the assignment, commit your changes with Git and push them into your GitHub repo."
            }
        ]
    },
    {
        name: "2: CSS Framework & Media Queries",
        assignmentType: "Homework",
        description: "In this assignment you will recreate your portfolio using media queries and Bootstrap.",
        dueDate: "Thursday August 2, 2018",
        dateInt: 531,
        assignmentNum: 2,
        instructions: [
            {
                stepNum: 1,
                text: "Copy the contents of Basic-Portfolio (your first homework solution) and paste the mentioned files into Responsive-Portfolio."
            },
            {
                stepNum: 2,
                text: "Note: Be sure not to include any dot files (e.g. .git, .gitignore) from the Basic-Portfolio repo."
            },
            {
                stepNum: 3,
                text: "If you chose the Wireframe exercise for your first homework assignment, talk to a TA, who will provide you with a template for your portfolio."
            },
            {
                stepNum: 4,
                text: "Inside your Responsive-Portfolio folder, find your styles.css file. You will write your media queries at the bottom of styles.css."
            },
            {
                stepNum: 5,
                text: "Use three @media screen tags, each with one of these max-widths: 980px, 768px and 640px."
            },
            {
                stepNum: 6,
                text: "Make the position of the header static (the default positioning) when the screen is 640px wide. The header design takes up a lot of room; you don't want it to stick to the top of a small screen and leave no room for the rest of your site."
            },
            {
                stepNum: 7,
                text: "Be sure to include the viewport tag in all your HTML files, otherwise your media-queries won't function as expected on mobile devices. (Hint: You won't need to use exact pixels for anything other than the container)"
            },
            {
                stepNum: 8,
                text: "Deploy your new portfolio (now with media queries!) to GitHub Pages."
            }
        ]
    },
    {
        name: "3: JavaScript Homework",
        assignmentType: "Homework",
        description: "In this assignment you will make a simple game using JavaScript.",
        dueDate: "Monday August 6, 2018",
        dateInt: 604,
        assignmentNum: 3,
        instructions: [
            {
                stepNum: 1,
                text: "Watch the demo."
            },
            {
                stepNum: 2,
                text: "You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:"
            },
            {
                stepNum: 3,
                text: "Guess what letter I'm thinking of"
            },
            {
                stepNum: 4,
                text: "Wins: (# of times the user has guessed the letter correctly)"
            },
            {
                stepNum: 5,
                text: "Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)"
            },
            {
                stepNum: 6,
                text: "Guesses Left: (# of guesses left. This will update)"
            },
            {
                stepNum: 7,
                text: "Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)"
            },
            {
                stepNum: 8,
                text: "When the player wins, increase the Wins counter and start the game over again (without refreshing the page)."
            },
            {
                stepNum: 9,
                text: "When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins)."
            }
        ]
    },
    {
        name: "4: jQuery Homework",
        assignmentType: "Homework",
        description: "In this assignment you will make a more complex JavaScript game.",
        dueDate: "Thursday August 9, 2018",
        dateInt: 607,
        assignmentNum: 4,
        instructions: [
            {
                stepNum: 1,
                text: "Watch the demo."
            },
            {
                stepNum: 2,
                text: "The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters."
            },
            {
                stepNum: 3,
                text: "Here's how the app works:"
            },
            {
                stepNum: 4,
                text: "There will be four crystals displayed as buttons on the page."
            },
            {
                stepNum: 5,
                text: "The player will be shown a random number at the start of the game."
            },
            {
                stepNum: 6,
                text: "When the player clicks on a crystal, it will add a specific amount of points to the player's total score."
            },
            {
                stepNum: 7,
                text: "The player wins if their total score matches the random number from the beginning of the game."
            },
            {
                stepNum: 8,
                text: "The player loses if their score goes above the random number."
            },
            {
                stepNum: 9,
                text: "The game restarts whenever the player wins or loses."
            },
            {
                stepNum: 10,
                text: "The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game."
            }
        ]
    },
    {
        name: "5: jQuery & JavaScript Homework",
        assignmentType: "Homework",
        description: "In this assignment you will create a trivia game using timers in JavaScript.",
        dueDate: "Monday August 12, 2018",
        dateInt: 610,
        assignmentNum: 5,
        instructions: [
            {
                stepNum: 1,
                text: "Create a GitHub repo called TriviaGame, then clone the repo to your computer."
            },
            {
                stepNum: 2,
                text: "Create a file inside of the TriviaGame folder called index.html. This is where you'll mark up all of your HTML."
            },
            {
                stepNum: 3,
                text: "Don't forget to include a script tag with the jQuery library."
            },
            {
                stepNum: 4,
                text: "Create a folder inside of the TriviaGame folder called assets."
            },
            {
                stepNum: 5,
                text: "Inside assets, create three folders: css, javascript, images"
            },
            {
                stepNum: 6,
                text: "You'll create a trivia form with multiple choice or true/false options (your choice)."
            },
            {
                stepNum: 7,
                text: "The player will have a limited amount of time to finish the quiz."
            },
            {
                stepNum: 8,
                text: "Don't let the player pick more than one answer per question."
            },
            {
                stepNum: 9,
                text: "Don't forget to include a countdown timer."
            }
        ]
    },
    {
        name: "6: APIs & AJAX Homework",
        assignmentType: "Homework",
        description: "In this assignment you will make a JavaScript app that talks to the Giphy API.",
        dueDate: "Thursday August 16, 2018",
        dateInt: 614,
        assignmentNum: 6,
        instructions: [
            {
                stepNum: 1,
                text: "Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics."
            },
            {
                stepNum: 2,
                text: "Your app should take the topics in this array and create buttons in your HTML."
            },
            {
                stepNum: 3,
                text: "When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page."
            },
            {
                stepNum: 4,
                text: "When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing."
            },
            {
                stepNum: 5,
                text: "Under every gif, display its rating (PG, G, so on)."
            },
            {
                stepNum: 6,
                text: "Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page."
            },
            {
                stepNum: 7,
                text: "Deploy your assignment to Github Pages."
            },
            {
                stepNum: 8,
                text: "Rejoice! You just made something really cool."
            }
        ]
    },
    {
        name: "7: Firebase Homework",
        assignmentType: "Homework",
        description: "In this assignment you will make a JavaScript app that utlizies Firebase.",
        dueDate: "Monday August 20, 2018",
        dateInt: 618,
        assignmentNum: 7,
        instructions: [
            {
                stepNum: 1,
                text: "Make sure that your app suits this basic spec:"
            },
            {
                stepNum: 2,
                text: "When adding trains, administrators should be able to submit the following:"
            },
            {
                stepNum: 3,
                text: "Train Name"
            },
            {
                stepNum: 4,
                text: "Destination"
            },
            {
                stepNum: 5,
                text: "First Train Time -- in military time"
            },
            {
                stepNum: 6,
                text: "Frequency -- in minutes"
            },
            {
                stepNum: 7,
                text: "Code this app to calculate when the next train will arrive; this should be relative to the current time."
            },
            {
                stepNum: 8,
                text: "Users from many different machines must be able to view same train times."
            },
            {
                stepNum: 9,
                text: "Styling and theme are completely up to you. Get Creative!"
            }
        ]
    },
    {
        name: "8: Node.js Homework",
        assignmentType: "Homework",
        description: "In this assignment you will create a liri node app that talks with different APIs all within the command console.",
        dueDate: "Thursday August 30, 2018",
        dateInt: 628,
        assignmentNum: 8,
        instructions: [
            {
                stepNum: 1,
                text: "Navigate to the root of your project and run npm init -y — this will initialize a package.json file for your project. The package.json file is required for installing third party npm packages and saving their version numbers. If you fail to initialize a package.json file, it will be troublesome, and at times almost impossible for anyone else to run your code after cloning your project."
            },
            {
                stepNum: 2,
                text: "Make a .gitignore file and add node_modules, .DS_Store, and .env to it. This will tell git not to track these files, and thus they won't be committed to Github."
            },
            {
                stepNum: 3,
                text: "Make a JavaScript file named keys.js."
            },
            {
                stepNum: 4,
                text: "Register for Twitter and Spotify API keys."
            },
            {
                stepNum: 5,
                text: "Next, create a file named .env and add your API keys to it."
            },
            {
                stepNum: 6,
                text: "Add commands that do the following:"         
            },
            {
                stepNum: 7,
                text: "Show your last 20 tweets and when they were created at in your terminal/bash window."
            },
            {
                stepNum: 8,
                text: "Show information about the song in your terminal/bash window."
            },
            {
                stepNum: 9,
                text: "Show information about the movie in your terminal/bash window."
            }
        ]
    },
    {
        name: "Task Milestone 1: Employer Competitive",
        assignmentType: "Career Services",
        description: "This short lesson will provide you a chance to understand the career services course and its goals. Our goal is to help you become Employer Competitive so that you are more likely to be successful in the job search process.",
        dueDate: "Thursday August 30, 2018",
        dateInt: 530,
        assignmentNum: 9,
        instructions: [
            {
                stepNum: 1,
                text: "Develop a short brand statement and submit it here, to Boot Camp Spot, as a google doc link. Set sharing settings to ANYONE WITH THE LINK CAN EDIT access. The following resources may help you complete this task. a) Professional Brand Statement Criteria - If you already have a brand statement and are just refining it, use this guide to assess your brand statement: http://bit.ly/2s2xRjh b) Step by Step Guide to Creating a Professional Brand Statement - If you dont have a statement or are starting from scratch, you may want to use this guide. You DO NOT need to submit this guide -- it is simply here to provide help: http://bit.ly/2E069Jh c) Examples of Professional Brand Statements - Whether you are new to brand statements or a veteran at marketing yourself, look through our collection of sample brand statements for inspiration: http://bit.ly/2saT5vo d) Frequently Asked Questions about Brand Statements - If you have questions about the brand statement, look at our FAQ document to help you: http://bit.ly/2Egpp4C"
            },
            {
                stepNum: 2,
                text: "Prepare and practice your elevator pitch. You do NOT need to submit this, but you will start meeting people and it will be helpful to have a pitch ready to go. If you are new to developing and delivering an elevator pitch, use the following resource. a) Elevator Pitch Overview and Tips - This document provides you with an overview of what we mean by elevator pitches and provides some tips on how to create one: http://bit.ly/2EBCrr7"
            }
        ]
    },
    {
        name: "Project 1",
        assignmentType: "Project",
        description: "In your first project you will utilize all of the tools you have learned thus far in the bootcamp.",
        dueDate: "Thursday August 23, 2018",
        dateInt: 621,
        assignmentNum: 10,
        instructions: [
            {
                stepNum: 1,
                text: "Do your first standup meeting with your group."
            },
            {
                stepNum: 2,
                text: "Make a gitHub repository and add everyone in your group as collaborators."
            },
            {
                stepNum: 3,
                text: "Complete your MVP for your project by the deadline."
            },
            {
                stepNum: 4,
                text: "Make sure to constantly push any changes you make to the gitHub repository."
            },
            {
                stepNum: 5,
                text: "Present your project!"
            }
        ]
    },
    {
        name: "9: Advanced JavaScript Homework",
        assignmentType: "Homework",
        description: "In this assignment you will create a hangman node application.",
        dueDate: "Monday September 3, 2018",
        dateInt: 702,
        assignmentNum: 11,
        instructions: [
            {
                stepNum: 1,
                text: "The completed game should be able to receive user input using the inquirer or prompt npm packages."
            },
            {
                stepNum: 2,
                text: "Your solution should have, at minimum, three files:"
            },
            {
                stepNum: 3,
                text: "Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter."
            },
            {
                stepNum: 4,
                text: "Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess."
            },
            {
                stepNum: 5,
                text: "index.js: The file containing the logic for the course of the game, which depends on Word.js."
            },
            {
                stepNum: 6,
                text: "Letter.js should not require any other files."
            },
            {
                stepNum: 7,
                text: "Word.js should only require Letter.js"
            }
        ]
    },
    {
        name: "10: MySQL Homework",
        assignmentType: "Homework",
        description: "In this assignment you will make a MySQL app that tracks the current stock of items.",
        dueDate: "Monday September 10, 2018",
        dateInt: 709,
        assignmentNum: 12,
        instructions: [
            {
                stepNum: 1,
                text: "Create a MySQL Database called bamazon."
            },
            {
                stepNum: 2,
                text: "Then create a Table inside of that database called products."
            },
            {
                stepNum: 3,
                text: "Populate this database with around 10 different products. (i.e. Insert mock data rows into this database and table)."
            },
            {
                stepNum: 4,
                text: "Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale."
            },
            {
                stepNum: 5,
                text: "The app should then prompt users with two messages asking them for the product ID and how many they want to buy."
            },
            {
                stepNum: 6,
                text: "Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request."
            },
            {
                stepNum: 7,
                text: "If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through."
            },
            {
                stepNum: 8,
                text: "However, if your store does have enough of the product, you should fulfill the customer's order."
            }
        ]
    },
    {
        name: "11: Express.js Homework",
        assignmentType: "Homework",
        description: "In this assignment you will make a friend finder app using Express and Node.",
        dueDate: "Thursday September 13, 2018",
        dateInt: 712,
        assignmentNum: 13,
        instructions: [
            {
                stepNum: 1,
                text: "Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question."
            },
            {
                stepNum: 2,
                text: "Your server.js file should require the basic npm packages we've used in class: express, body-parser and path."
            },
            {
                stepNum: 3,
                text: "Your htmlRoutes.js file should include a GET route to /survery as well as a catch-all route to home.html."
            },
            {
                stepNum: 4,
                text: "Your apiRoutes.js file should include a GET route to get all friends and a POST route to post a new friend."
            },
            {
                stepNum: 5,
                text: "You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below."
            },
            {
                stepNum: 6,
                text: "Determine the user's most compatible friend."
            },
            {
                stepNum: 7,
                text: "Once you've found the current user's most compatible friend, display the result as a modal pop-up."
            }
        ]
    },
    {
        name: "12: MySQL Full Stack App",
        assignmentType: "Homework",
        description: "In this assignment you will create a full stack app and host it on heroku.",
        dueDate: "Tuesday September 19, 2018",
        dateInt: 717,
        assignmentNum: 14,
        instructions: [
            {
                stepNum: 1,
                text: "Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat."
            },
            {
                stepNum: 2,
                text: "Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured."
            },
            {
                stepNum: 3,
                text: "Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page."
            },
            {
                stepNum: 4,
                text: "Your app will store every burger in a database, whether devoured or not."
            }
        ]
    },
    {
        name: "13: Sequelize Homework",
        assignmentType: "Homework",
        description: "In this assignment you will create a full stack app using sequelize.",
        dueDate: "Thursday September 21, 2018",
        dateInt: 719,
        assignmentNum: 15,
        instructions: [
            {
                stepNum: 1,
                text: "Create a new folder called sequelizedBurger"
            },
            {
                stepNum: 2,
                text: "Copy the contents of your completed assignment from last week."
            },
            {
                stepNum: 3,
                text: "Run sequelize init to create the necessary files."
            },
            {
                stepNum: 4,
                text: "Remove all references to your vanilla MySQL queries and replace them with Sequelize queries."
            },
            {
                stepNum: 5,
                text: "When you finish, your site should function just like your last one."
            }
        ]
    },
    {
        name: "Project 2",
        assignmentType: "Project",
        description: "In this project you must create a full stack application with a polished front-end and user interface.",
        dueDate: "Tuesday September 26, 2018",
        dateInt: 724,
        assignmentNum: 16,
        instructions: [
            {
                stepNum: 1,
                text: "Do your first standup meeting with your group."
            },
            {
                stepNum: 2,
                text: "Make a gitHub repository and add everyone in your group as collaborators."
            },
            {
                stepNum: 3,
                text: "Complete your MVP for your project by the deadline."
            },
            {
                stepNum: 4,
                text: "Make sure to constantly push any changes you make to the gitHub repository."
            },
            {
                stepNum: 5,
                text: "Present your project!"
            }
        ]
    },
    {
        name: "14: MongoDB Homework",
        assignmentType: "Homework",
        description: "In this assignment you will create a web scraper and save the results to a mongo database.",
        dueDate: "Monday October 1, 2018",
        dateInt: 730,
        assignmentNum: 17,
        instructions: [
            {
                stepNum: 1,
                text: "Create an app that accomplishes the following:"
            },
            {
                stepNum: 2,
                text: "Whenever a user visits your site, the app should scrape stories from a news outlet of your choice and display them for the user. Each scraped article should be saved to your application database. At a minimum, the app should scrape and display the headline, summary, and URL for each entry."
            },
            {
                stepNum: 3,
                text: "Users should also be able to leave comments on the articles displayed and revisit them later. The comments should be saved to the database as well and associated with their articles. Users should also be able to delete comments left on articles. All stored comments should be visible to every user."
            }
        ]
    },
    {
        name: "15: React Homework",
        assignmentType: "Homework",
        description: "In this assignment you will create a react memory game and host it to gitHub pages.",
        dueDate: "Thursday October 4, 2018",
        dateInt: 802,
        assignmentNum: 18,
        instructions: [
            {
                stepNum: 1,
                text: "Create a new React application using Create React App."
            },
            {
                stepNum: 2,
                text: "The application should render different images (of your choice) to the screen. Each image should listen for click events."
            },
            {
                stepNum: 3,
                text: "The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once."
            },
            {
                stepNum: 4,
                text: "Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order."
            },
            {
                stepNum: 5,
                text: "Once the user's score is reset after an incorrect guess, the game should restart."
            },
            {
                stepNum: 6,
                text: "When complete, the application should be deployed to Github Pages. See the README generated with Create React App for instructions on deploying the application to Github Pages."
            }
        ]
    },
    {
        name: "16: React Homework #2",
        assignmentType: "Homework",
        description: "In this assignment you will make another React app.",
        dueDate: "Monday October 8, 2018",
        dateInt: 806,
        assignmentNum: 19,
        instructions: [
            {
                stepNum: 1,
                text: "Create a MongoDB database called nytreact."
            },
            {
                stepNum: 2,
                text: "Using mongoose, then create an Article schema and model"
            },
            {
                stepNum: 3,
                text: "At a minimum, articles should have a title, date and url."
            },
            {
                stepNum: 4,
                text: "Create a Node/Express/MongoDB/ReactJS app called nytreact. This will be a recreation of the NYT Articles Search exercise application we built back in Week 6."
            },
            {
                stepNum: 5,
                text: "Create a Bootstrap layout similar to that displayed in HW_Assignment.png. This should be a SPA (Single Page Application) that uses react-router-dom to navigate, hide and show your React components without changing the route within Express."
            },
            {
                stepNum: 6,
                text: "You'll need several Express routes for your app for getting, posting, and deleting articles."
            },
            {
                stepNum: 7,
                text: "The layout should include at least two React Components for each page Home and Saved."
            }
        ]
    },
    {
        name: "Project 3",
        assignmentType: "Project",
        description: "In this project you must create a full stack application using a database of your choice with a polished front-end and user interface.",
        dueDate: "Thursday October 18, 2018",
        dateInt: 816,
        assignmentNum: 20,
        instructions: [
            {
                stepNum: 1,
                text: "Do your first standup meeting with your group."
            },
            {
                stepNum: 2,
                text: "Make a gitHub repository and add everyone in your group as collaborators."
            },
            {
                stepNum: 3,
                text: "Complete your MVP for your project by the deadline."
            },
            {
                stepNum: 4,
                text: "Make sure to constantly push any changes you make to the gitHub repository."
            },
            {
                stepNum: 5,
                text: "Present your project!"
            }
        ]
    }
];

export default assignmentSeed;
