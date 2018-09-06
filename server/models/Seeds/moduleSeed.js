const moduleSeed = [
    {
        name: "01-HTML-Git-CSS",
        moduleNum: 1,
        exercises: [
            {
                name: "Console Commands",
                steps: [
                    {
                        stepNum: 1,
                        text: "From the Terminal/Console and using only the command line, create the following"
                    },
                    {
                        stepNum: 2,
                        text: "A new folder with the name of \"first_day_stuff\""
                    },
                    {
                        stepNum: 3,
                        text: "A new HTML file with the name of \"first-day.html\""
                    },
                    {
                        stepNum: 4,
                        text: "Open the current folder containing the new HTML file"
                    },
                    {
                        stepNum: 5,
                        text: "Create multiple directories/folders with the names \"one_folder\" and \"second_folder\" in one command."

                    },
                    {
                        stepNum: 6,
                        text: "Create multiple files witht he names \"one.html\" and \"two.html\" in one command in the \"first_day_stuff\" directory."
                    }
                ]
            },
            {
                name: "Intro to Console Bash",
                steps: [
                    {
                        stepNum: 1,
                        text: "From the Terminal/Console, using only the command line"
                    },
                    {
                        stepNum: 2,
                        text: "Create a new folder with the name of \"self-destructing-folder\""
                    },
                    {
                        stepNum: 3,
                        text: "Create a new txt file with the name \"secret-message.txt\""
                    },
                    {
                        stepNum: 4,
                        text: "Copy \"secret-message.txt\" to the inside of \"self-destructing-folder\"."
                    },
                    {
                        stepNum: 5,
                        text: "Delete the original \"secret-message.txt\" file."
                    },
                    {
                        stepNum: 6,
                        text: "Delete the \"self-destructing-folder\"."
                    }
                ]
            },
            {
                name: "My First HTML",
                steps: [
                    {
                        stepNum: 1,
                        text: "In a new HTML file, create the basic structure of an HTML document and include the following in it/n HINT You should be looking up at the screen pretty often",
                    },
                    {
                        stepNum: 2,
                        text: "DOCTYPE declaration"
                    },
                    {
                        stepNum: 3,
                        text: "Head tag with a title tag"
                    },
                    {
                        stepNum: 4,
                        text: "H1 tag with a title of your choice"
                    },
                    {
                        stepNum: 5,
                        text: "Embed an image"
                    },
                    {
                        stepNum: 6,
                        text: "Create the following three links on your page"
                    },
                    {
                        stepNum: 7,
                        text: "One link that is `target=\"_blank\"` so that it opens a new tab when clicked on.",
                    },
                    {
                        stepNum: 8,
                        text: "Make the second link bold.",
                    },
                    {
                        stepNum: 9,
                        text: "Make the third link a placeholder so it goes nowhere.",
                    },
                    {
                        stepNum: 10,
                        text: "Bonus Create an ordered list of steps to make a sandwich. Create an unordered list of 5 bands/musicians you like.",
                    },
                    {
                        stepNum: 11,
                        text: "Bonus Create a table with 2 columns (animal class and animal name) and 4 rows of animals. Use an alternate way of separating links without line breaks.",
                    },
                    {
                        stepNum: 12,
                        text: "Bonus Embed a Youtube video of your favorite band/musician."
                    }
                ]
            },
            {
                name: "HTML Git",
                steps: [
                    {
                        stepNum: 1,
                        text: "Create a basic HTML page with your own information that looks similar to the design shown on screen.",
                    }
                ]
            },
            {
                name: "HTML CSS Layout",
                steps: [
                    {
                        stepNum: 1,
                        text: "Put all of this code inside a folder named `week1-day2-html-css`, and put the folder in a place where you normally code.",
                    },
                    {
                        stepNum: 2,
                        text: "Use the command line to make a folder called `css`.",
                    },
                    {
                        stepNum: 3,
                        text: "Use the command line to make a file called `style.css` inside of thee `css` folder.",
                    },
                    {
                        stepNum: 4,
                        text: "Reference the `style.css` in your `student-bio.html` file. You do this by placing `<link rel=\"stylesheet\" type=\text/css\" href=\"css/style.css\">` inside the `<head>` tag.",
                    },
                    {
                        stepNum: 5,
                        text: "Style the example on the projector. Add a `class` called \"container\" on the `div` tag. Add an `id` called \"main-bio\" for the first `section` tag. Add an `id` called \"contact-info\" for the second `section` tag. Add an `id` called \"bio-image\" for the bio image.",
                    },
                    {
                        stepNum: 6,
                        text: "body  The background color is `#efeee7`.  The font used `\"Georgia\",Times New Roman,Times,serif;`. The font color is `#333333`.  Be sure to zero out the body margins and padding so the page is flush to the top of the page",
                    },
                    {
                        stepNum: 7,
                        text: "`header`  The background color is `#333333`.",
                    },
                    {
                        stepNum: 8,
                        text: "`h1`  The font color is `#eee`.  The font size is `28px`.  Look at the example on the screen, and eyeball the padding and/or margins and positioning of the text.",
                    },
                    {
                        stepNum: 9,
                        text: "`h2`  ",
                    },
                    {
                        stepNum: 10,
                        text: " The font size is `24px`",
                    },
                    {
                        stepNum: 11,
                        text: "Make the container have a width of 1024 pixels, and center it. You do this using `margin 0 auto;`.  Make `#main-bio`, `#contact-info`, `#bio-image` all `float left`. Make the `#bio-image` have a width of 200 pixels. ",
                    },
                    {
                        stepNum: 12,
                        text: "Be sure to include `alt` text in all images  `#main-bio` should have a width of `70%`.  Add margins to the image so there is distance between it and the bio text. `#contact-info` should have a width of `30%`.  Adjust the line height so it is 1.5 times the size of the font.  Make the link color `#d21034`."
                    }
                ]
            },
            {
                name: "Relative Paths Activity",
                steps: [
                    {
                        stepNum: 1,
                        text: "`git clone`the whole class repo to your local machine. _This way you'll be able to simply `git pull` the class repo for new activities_.",
                    },
                    {
                        stepNum: 2,
                        text: "Then modify each of the four `html-bio.html` pages such that they can access the CSS inside their folder. Don't move the CSS file, and don't move the HTML file.",
                    },
                    {
                        stepNum: 3,
                        text: "Use relative linking to make it work!",
                    },
                    {
                        stepNum: 4,
                        text: "Hint If you need some reading material on relative linking you can use <https//css-tricks.com/quick-reminder-about-file-paths/>.",
                    },
                    {
                        stepNum: 5,
                        text: "If you finish early, please help out those around you, or begin reading through the Learn CSS Layout Guide found here <http//learnlayout.com/no-layout.html>",
                    }
                ]
            },
            {
                name: "Float Examples",
                steps: [
                    {
                        stepNum: 1,
                        text: "Look at files provided",
                    }
                ]
            },
            {
                name: "Float Layout Activity",
                steps: [
                    {
                        stepNum: 1,
                        text: "Introduce yourself to 1\u20132 people next to you.",
                    },
                    {
                        stepNum: 2,
                        text: "Then using `floats.html` and `floats.css` as a starting point, work together to create the missing CSS necessary to form the layout shown to you on screen.",
                    },
                    {
                        stepNum: 3,
                        text: "This will not be easy so work at it as best you can. This is a challenging activity. At the very least, try to increase your understanding of CSS properties.",
                    },
                    {
                        stepNum: 4,
                        text: "Hint Concentrate on first figuring out how to create the boxes. Think about using background colors (CSS property `background`).",
                    },
                    {
                        stepNum: 5,
                        text: "Hint We've provided the styling you need for the header element. Use this as a starting point to style the others.",
                    },
                    {
                        stepNum: 6,
                        text: "Hint You will need to apply each of the following CSS properties at least once  padding  margin  background  float  width (read up on width by percents)  color  clear  overflow  height  font-size  line-height",
                    },
                    {
                        stepNum: 7,
                        text: "If you finish early Slack the TAs or raise your hand to call their attention. TAs will reassign you to help others in the class.",
                    }
                ]
            },
            {
                name: "CSS Positioned Layout",
                steps: [
                    {
                        stepNum: 1,
                        text: "Review the files provided",
                    }
                ]
            },
            {
                name: "CSS Positioned Activity",
                steps: [
                    {
                        stepNum: 1,
                        text: "Work with the same or different partners on this activity, but make sure each member of the group is typing out their own code!",
                    },
                    {
                        stepNum: 2,
                        text: "Create a file called `positioning.html` and a file called `positioning.css`.",
                    },
                    {
                        stepNum: 3,
                        text: "Using HTML/CSS, create the layout shown on the screen.",
                    },
                    {
                        stepNum: 4,
                        text: "For reference, the colors used on the screen are `#eee` and `#999`.",
                    },
                    {
                        stepNum: 5,
                        text: "For further reference, you can generate paragraphs of lorem ipsum text using <http//www.lipsum.com/feed/html>. You need to make this page scroll to see how the fixed position element behaves.",
                    },
                    {
                        stepNum: 6,
                        text: "HINT Use the code from the last few activities to help get you started.",
                    }
                ]
            }
        ]
    },
    {
        name: "02-CSS-Bootstrap",
        moduleNum: 2,
        exercises: [
            {
                name: "Hack Websites",
                steps: [
                    {
                        stepNum: 1,
                        text: "For the next 15 minutes, take a website that you commonly use (Amazon, Google, Huff Po, etc.) and heavily modify it using the Google Developer Tools.",
                    },
                    {
                        stepNum: 2,
                        text: "Be sure to at least modify  Content (Change words)  Colors  Spacing  Etc.",
                    },
                    {
                        stepNum: 3,
                        text: "Slack out a screenshot to the class when you\u2019re done.",
                    }
                ]
            },
            {
                name: "Modify Own Websites",
                steps: [
                    {
                        stepNum: 1,
                        text: "For the next 10 minutes, take a website that you yourself worked on (ex In-Class activities, homework assignments, etc.), and utilize the Google Developer Tools to help you test changes in real-time.",
                    },
                    {
                        stepNum: 2,
                        text: "Focus on getting more comfortable using the Developer Tools. Trust us. You will WANT to use these Developer Tools as you proceed in this course.",
                    }
                ]
            },
            {
                name: "Reset CSS",
                steps: [
                    {
                        stepNum: 1,
                        text: "Follow the instructions in the HTML document to incorporate a reset.css file into a basic HTML file.",
                    },
                    {
                        stepNum: 2,
                        text: "Student is to find a reset.css from Google and put it into their directory",
                    },
                    {
                        stepNum: 3,
                        text: "Note the impact the reset file makes after its inclusion.",
                    },
                    {
                        stepNum: 4,
                        text: "How can you determine the styles that the browser is using by default (Without the reset being used)?",
                    },
                    {
                        stepNum: 5,
                        text: "Discuss with a partner Why are resets important?",
                    },
                    {
                        stepNum: 6,
                        text: "Hint You should be using the CSS made available on this link <http//meyerweb.com/eric/tools/css/reset/>",
                    },
                    {
                        stepNum: 7,
                        text: "Bonus Incorporate a CSS reset into any page you've worked on to date."
                    }
                ]
            },
            {
                name: "Github Pages Personal",
                steps: [
                    {
                        stepNum: 1,
                        text: "Now that we have gone over how to create a personal website using GitHub Pages, it is time to publish your own personal website! See the guide below as a reminder of what steps you need to take.",
                    },
                    {
                        stepNum: 2,
                        text: "Build a basic HTML page and deploy it to github pages.",
                    },
                    {
                        stepNum: 3,
                        text: "Once your personal webpage is live, slack out the link to it so that everyone can see what you have made.",
                    },
                    {
                        stepNum: 4,
                        text: "Create a new repo that is named `<<YOUR USERNAME>>.github.io` where <<YOUR USERNAME>> is your GitHub username. Double check that you use exactly your username. (For example, janedoe.github.io would be the GitHub pages repo name for the GitHub user \"janedoe\")",
                    },
                    {
                        stepNum: 5,
                        text: "Navigate into a folder and clone the repo into it",
                    },
                    {
                        stepNum: 6,
                        text: "Add an HTML file named `index.html` and code out a basic webpage (or use a previous page)",
                    },
                    {
                        stepNum: 7,
                        text: "Add, commit, and push your changes into the repository",
                    },
                    {
                        stepNum: 8,
                        text: "Navigate to `<<YOUR_USERNAME>>.github.io` and you will find that your new web page has gone live! (again, where <<YOUR USERNAME>> is your GitHub username. - we just use that as a placeholder.)",
                    },
                    {
                        stepNum: 9,
                        text: "Bonus Spruce up your personal website page add extra tags and flesh your page out some more - give it some pop",
                    },
                    {
                        stepNum: 10,
                        text: "Bonus Push updates to your personal website multiple times. You'll see it update on the live URL!",
                    },
                    {
                        stepNum: 11,
                        text: "Bonus Add a few new pages to your website",
                    },
                    {
                        stepNum: 12,
                        text: "Bonus Add CSS to your deployed webpage, including a CSS Reset"
                    }
                ]
            },
            {
                name: "Github Pages Project",
                steps: [
                    {
                        stepNum: 1,
                        text: "In this activity you'll practice creating github pages with projects. You'll build a website about your favorite type of animal!",
                    },
                    {
                        stepNum: 2,
                        text: "Create a header that will act as a title for the page",
                    },
                    {
                        stepNum: 3,
                        text: "Create a few short paragraphs describing the animal's best characteristics.",
                    },
                    {
                        stepNum: 4,
                        text: "Include at least one picture of the animal",
                    },
                    {
                        stepNum: 5,
                        text: "Once you have created your HTML add, commit, and push your files up to GitHub Pages.  Make sure to navigate to your page in the web browser to ensure your website is live",
                    },
                    {
                        stepNum: 6,
                        text: "Create a new repository on your GitHub account. You can name this repository whatever you would like.",
                    },
                    {
                        stepNum: 7,
                        text: "Once inside of the repository, create a new file and name it `index.html`",
                    },
                    {
                        stepNum: 8,
                        text: "Add your HTML into this file, save it, and then navigate into your repository's `Settings` tab.",
                    },
                    {
                        stepNum: 9,
                        text: "Scroll down to the GitHub Pages section and then, in the section labeled `Source`, select that you would like to use the `master` branch as your source.",
                    },
                    {
                        stepNum: 10,
                        text: "Navigate to `<<YOUR USERNAME>>.github.io/<<REPO NAME YOU CHOSE>>` and you will find that your new web page has gone live! (For example, if your GitHub username is `johndoe` and the project is `cssDemo`, your URL would be `johndoe.github.io/cssDemo`)",
                    },
                    {
                        stepNum: 11,
                        text: "See if you can use your personal site from the previous activity as a portfolio that can be used to show off all of the work you have done in the past. Update it to link to this activity's site.",
                    },
                    {
                        stepNum: 12,
                        text: "Try to create a navigation system which links from your personal website to this new animal site and vice-versa.  Have some fun! Test your HTML and CSS skills by going above and beyond with your page!"
                    }
                ]
            },
            {
                name: "CSS Typography",
                steps: [
                    {
                        stepNum: 1,
                        text: "In this activity, you'll be modifying CSS properties to style your text in different ways.",
                    },
                    {
                        stepNum: 2,
                        text: "Using the `html-template` file provided to you, create an external CSS stylesheet to modify the typography of each of the body paragraphs.",
                    },
                    {
                        stepNum: 3,
                        text: "Be sure to modify the following CSS properties for each paragraph of your page  font-family  font-size  font-weight  line-hight",
                    },
                    {
                        stepNum: 4,
                        text: "Hint You will need to do three things to accomplish this task.  Link to a CSS page that you'll make  Create classes for each paragraph  Add in styles for each class",
                    },
                    {
                        stepNum: 5,
                        text: "Bonus If you finish early, read about http//typeplate.com/ and see if you can figure out how to incorporate it into your site.",
                    },
                    {
                        stepNum: 6,
                        text: "Bonus If you still finish early, spend some time trying to actually make the page look nice. Think about what's aesthetically pleasing and push yourself to create it.",
                    }
                ]
            },
            {
                name: "Google Font Demo",
                steps: [
                    {
                        stepNum: 1,
                        text: "This activity demonstrates how to incorporate new fonts into a web page.",
                    },
                    {
                        stepNum: 2,
                        text: "This activity demonstrates how to incorporate new fonts into a web page.",
                    },
                    {
                        stepNum: 3,
                        text: "Bonus If you finish early, read about Font Awesome icons and see if you can figure out how to incorporate one onto your page.",
                    }
                ]
            },
            {
                name: "Pseudo Class",
                steps: [
                    {
                        stepNum: 1,
                        text: "In this activity you'll use pseudo-classes to style elements based on their state.",
                    },
                    {
                        stepNum: 2,
                        text: "Create a series of links and modify the pseudo-classes associated with their Default, Active, Hover, and Focus States.",
                    },
                    {
                        stepNum: 3,
                        text: "Hint Nope. No starter code. Gotta do this from scratch -)",
                    },
                    {
                        stepNum: 4,
                        text: "If you finish early, incorporate a pseudo-class we haven\u2019t covered in your page. Then read about \u201cpseudo-elements\u201d and try to incorporate one as well.",
                    },
                    {
                        stepNum: 5,
                        text: "Slack out the code and screenshot if you end up completing the bonus.",
                    },
                    {
                        stepNum: 6,
                        text: "Learn about css transitions to add a fading hover effect to a link (\\&lt;a>)",
                    }
                ]
            },
            {
                name: "Bootstrap Demo",
                steps: [
                    {
                        stepNum: 1,
                        text: "In this activity, we'll get some experience working with Bootstrap components.",
                    },
                    {
                        stepNum: 2,
                        text: "Working with someone closest to you",
                    },
                    {
                        stepNum: 3,
                        text: "Navigate to the Twitter Bootstrap website.",
                    },
                    {
                        stepNum: 4,
                        text: "Then copy the link to the Bootstrap CSS file into one of your old HTML files.",
                    },
                    {
                        stepNum: 5,
                        text: "Look through the Bootstrap CSS or Components list and incorporate at least three Bootstrap elements onto your page.",
                    },
                    {
                        stepNum: 6,
                        text: "Slack a screenshot of your page to your section\u2019s channel when you are done.",
                    },
                    ,
                    {
                        stepNum: 7,
                        text: "Hint First include a link to Bootstrap\u2019s CSS. Then visit the Bootstrap page on CSS or Components.",
                    },
                    {
                        stepNum: 8,
                        text: "If you finish early, let the TAs know so you can be sent to help others around you.",
                    }
                ]
            },
            {
                name: "Warmup Bootstrap",
                steps: [
                    {
                        stepNum: 1,
                        text: "As a repeat of last class, quickly create an HTML web page.",
                    },
                    {
                        stepNum: 2,
                        text: "Then add in a Bootstrap component of your choosing.",
                    },
                    {
                        stepNum: 3,
                        text: "Hint Copy the Bootstrap CSS link. Then copy the code from any Bootstrap element or CSS.",
                    }
                ]
            },
            {
                name: "Text Layout",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using Twitter bootstrap, create a layout that looks like ![text-layout activity design](text-layout.png)",
                    },
                    {
                        stepNum: 2,
                        text: "Hint Spend some time prior to coding on drawing out the grid layout.",
                    },
                    {
                        stepNum: 3,
                        text: "Hint Count the number of rows and columns.",
                    },
                    {
                        stepNum: 4,
                        text: "Hint Then use the bootstrap grid syntax to code it out.",
                    }
                ]
            },
            {
                name: "Card Layout",
                steps: [
                    {
                        stepNum: 1,
                        text: "Working in pairs and using Twitter Bootstrap make a page that looks like the following image ![Card-layout design](Solved/card-layout.png)",
                    },
                    {
                        stepNum: 2,
                        text: "Be sure to note the  Grid Layout  Navbar  Sidebar card  Thumbnail",
                    }
                ]
            },
            {
                name: "Student Media",
                steps: [
                    {
                        stepNum: 1,
                        text: "Add more styling to the CSS file such that the `@media screen` code creates padding and margins for the two boxes when the page is below 768px.",
                    },
                    {
                        stepNum: 2,
                        text: "Note This isn't easy. Just give it your best shot. Even if you don't get the exact solution, but are able to better understand how media queries work, that's a solid takeaway.",
                    }
                ]
            }
        ]
    },
    {
        name: "03-Javascript",
        moduleNum: 3,
        exercises: [
            {
                name: "Code Dissection",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open the file in Chrome, and observe what happens.",
                    },
                    {
                        stepNum: 2,
                        text: "With a partner, try to explain how the code connects to the events that happen on the page.",
                    },
                    {
                        stepNum: 3,
                        text: "Note We haven't covered JavaScript before, but a big part of being a developer is learning on the fly!",
                    }
                ]
            },
            {
                name: "Pizza Varibales",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using the instructions in the file above, fill in the missing JavaScript code to create variables.",
                    },
                    {
                        stepNum: 2,
                        text: "When you are done, open the file in Chrome and check the output.",
                    },
                    {
                        stepNum: 3,
                        text: "If you successfully completed the activity, you should see a series of pop-up windows with text inside.",
                    },
                    {
                        stepNum: 4,
                        text: "Finally, look at the rest of the code and try to figure out why the text displayed the way it did.",
                    }
                ]
            },
            {
                name: "Pizza Console",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using the file above as a guide, modify the code so that it uses `console.log` instead of alerts to display messages.",
                    },
                    {
                        stepNum: 2,
                        text: "With a partner, discuss the difference between using `console.log` and `alert`.",
                    }
                ]
            },
            {
                name: "Prompt Sushi",
                steps: [
                    {
                        stepNum: 1,
                        text: "Write JavaScript code that does the following",
                    },
                    {
                        stepNum: 2,
                        text: "Using a confirm, ask the user, \"Do you like ?\" Store their response in a variable.",
                    },
                    {
                        stepNum: 3,
                        text: "Using a prompt, ask the user, \"What kind of  do you like?\" Store their response in a variable.",
                    },
                    {
                        stepNum: 4,
                        text: "Alert both variables to the screen.",
                    }
                ]
            },
            {
                name: "Conditional Activity",
                steps: [
                    {
                        stepNum: 1,
                        text: "Create a website (from scratch) that asks users if they eat steak.",
                    },
                    {
                        stepNum: 2,
                        text: "If they respond with \"yes\", write the following to the page \"Here\u2019s a Steak Sandwich!\"",
                    },
                    {
                        stepNum: 3,
                        text: "If they respond with \"no\", write the following to the page \"Here\u2019s a Tofu Stir-Fry!\"",
                    },
                    {
                        stepNum: 4,
                        text: "Bonus Ask what the user\u2019s birth year is. If they are under 21, alert the following \"No Sake for you!\"",
                    },
                    {
                        stepNum: 5,
                        text: "Hint You will need to use `document.write()` from a few slides back.",
                    }
                ]
            },
            {
                name: "Arrays Activity",
                steps: [
                    {
                        stepNum: 1,
                        text: "With a partner, take a few moments to look over the code in the file above.",
                    },
                    {
                        stepNum: 2,
                        text: "Above each `console.log()` write a comment \"predicting\" what you think the output will be.",
                    },
                    {
                        stepNum: 3,
                        text: "Hint Comments are the grayed lines that begin with `//`. These lines are ignored by JavaScript, and they allow you to explain your code. Commenting your code is an extremely useful habit to get into as it allows other developers to more easily read your code. It will also help you better understand your own applications when you look back at them.",
                    }
                ]
            },
            {
                name: "Bands",
                steps: [
                    {
                        stepNum: 1,
                        text: "Create a website that accomplishes the following",
                    },
                    {
                        stepNum: 2,
                        text: "Create an array of your favorite bands.",
                    },
                    {
                        stepNum: 3,
                        text: "With a prompt, ask the user's favorite band.",
                    },
                    {
                        stepNum: 4,
                        text: "If it's one of your favorites, alert 'YEAH I LOVE THEM!'",
                    },
                    {
                        stepNum: 5,
                        text: "If it's not, alert 'Nah. They're pretty lame.'",
                    },
                    {
                        stepNum: 6,
                        text: "Hint You will need to research how to use `.indexOf()`.",
                    },
                    {
                        stepNum: 7,
                        text: "Hint You will need to research how to use `.toLowerCase()`.",
                    }
                ]
            },
            {
                name: "JS Dissect",
                steps: [
                    {
                        stepNum: 1,
                        text: "Take a few minutes to quickly look through the above file. With a partner, discuss what you expect to happen when the code is run.",
                    },
                    {
                        stepNum: 2,
                        text: "Prepare to share your thoughts with the class.",
                    }
                ]
            },
            {
                name: "Cool People Array",
                steps: [
                    {
                        stepNum: 1,
                        text: "Follow the instructions provided in the file to `console.log` each of the names in the `coolPeople` variable.",
                    },
                    {
                        stepNum: 2,
                        text: "Hint You should be repeating the same line 6 times.",
                    }
                ]
            },
            {
                name: "Array Setting",
                steps: [
                    {
                        stepNum: 1,
                        text: "Follow the instructions in the file above to convert each item in the array to lower case.",
                    },
                    {
                        stepNum: 2,
                        text: "Make sure to only add in lines of code where instructed.",
                    },
                    {
                        stepNum: 3,
                        text: "Hint You will need to use the `.toLowerCase()` method. Research if you don't remember how to use it.",
                    },
                    {
                        stepNum: 4,
                        text: "Be prepared to share when time is up.",
                    }
                ]
            },
            {
                name: "My First Loop",
                steps: [
                    {
                        stepNum: 1,
                        text: "With a partner, spend a few moments trying to dissect the code in the file.",
                    },
                    {
                        stepNum: 2,
                        text: "Try to explain to one another what is happening with each line of code.",
                    },
                    {
                        stepNum: 3,
                        text: "Feel free to do research if you are stumped. As a hint, look into the phrase \"for loop.\"",
                    }
                ]
            },
            {
                name: "Zoo Loop",
                steps: [
                    {
                        stepNum: 1,
                        text: "Use `for` loops to rewrite the file.",
                    },
                    {
                        stepNum: 2,
                        text: "If you need help, use the code from the previous example as a guide.",
                    },
                    {
                        stepNum: 3,
                        text: "Once you think your code is functioning properly, share it with the person sitting next to you.",
                    }
                ]
            },
            {
                name: "Another Loop",
                steps: [
                    {
                        stepNum: 1,
                        text: "Starting from scratch, create a `for` loop that console logs the following lines \"I am 0\", \"I am 1\", \"I am 2\", \"I am 3\", \"I am 4\"",
                    },
                    {
                        stepNum: 2,
                        text: "Note Don't use an array!",
                    }
                ]
            },
            {
                name: "Hard Loop",
                steps: [
                    {
                        stepNum: 1,
                        text: "Starting from scratch, write code that loops through the following array and logs the name of each animal on the farm to the console",
                    },
                    {
                        stepNum: 2,
                        text: "var myFarm = [\"chickens\", \"pigs\", \"cows\", \"horses\", \"ostriches\"];",
                    },
                    {
                        stepNum: 3,
                        text: "Then check if the first letter in the animal's name begins with a 'c' or 'o'. If it does, create an alert saying, 'Starts with 'c' or 'o'!''",
                    },
                    {
                        stepNum: 4,
                        text: "Hint You can access the first character of a string as if it were the first element of an array.",
                    }
                ]
            },
            {
                name: "Pseudo Code",
                steps: [
                    {
                        stepNum: 1,
                        text: "With a partner, spend a few moments outlining all the steps and conditions that go into a single game of rock paper scissors.",
                    },
                    {
                        stepNum: 2,
                        text: "Try to break it down into steps that you could code out.",
                    },
                    {
                        stepNum: 3,
                        text: "Think of basic elements like loops, if-else statements, arrays, alerts, etc.",
                    },
                    {
                        stepNum: 4,
                        text: "Be prepared to share your outlines approach.",
                    }
                ]
            },
            {
                name: "RPS Coded",
                steps: [
                    {
                        stepNum: 1,
                        text: "In groups of 4, begin the process of coding out the rock-paper-scissors game.",
                    },
                    {
                        stepNum: 2,
                        text: "Rules for rock-paper-scissors",
                    },
                    {
                        stepNum: 3,
                        text: "Rock wins against scissors, loses to paper, and ties against itself.",
                    },
                    {
                        stepNum: 4,
                        text: "Paper wins against rock, loses to scissors, and ties against itself.",
                    },
                    {
                        stepNum: 5,
                        text: "Scissors wins against paper, loses to rock, and ties against itself.",
                    },
                    {
                        stepNum: 6,
                        text: "Do as much as you can on your own, but don't be afraid to ask for help if you feel your team is struggling.",
                    },
                    {
                        stepNum: 7,
                        text: "Note A `for-loop` is not technically necessary to make our RPS game, but could be used. Focus on the topics we have just covered when thinking about how to build out the game.",
                    },
                    {
                        stepNum: 8,
                        text: "Note Don\u2019t use `document.write` as it will delete the contents of your page including your JavaScript. Use `document.querySelector` or `document.getElementById`, alongside either `innerHTML` or `textContent`, to write to the DOM.",
                    },
                    {
                        stepNum: 9,
                        text: "Note Don't worry. We know this is a very challenging assignment. We also know that you won't know where to start. In fact, we haven't shown you EVERYTHING you need yet, but that's okay. Part of being a developer is figuring things out on your own through trial and error.",
                    }
                ]
            },
            {
                name: "Loop TV",
                steps: [
                    {
                        stepNum: 1,
                        text: "Run the program in the file above.",
                    },
                    {
                        stepNum: 2,
                        text: "Then, with a partner, fill in the missing comments for each line of code.",
                    },
                    {
                        stepNum: 3,
                        text: "Make sure both of you can fully explain what each line means.",
                    },
                    {
                        stepNum: 4,
                        text: "Be prepared to share with the class!",
                    }
                ]
            },
            {
                name: "My First Functions",
                steps: [
                    {
                        stepNum: 1,
                        text: "Working in pairs and using the starter file above, fill in the missing functions and function calls.",
                    },
                    {
                        stepNum: 2,
                        text: "Note Try to finish all four functions if you can, but don't be distressed if you only get one or two. The important thing is that you get at least one function fully done.",
                    },
                    {
                        stepNum: 3,
                        text: "Hint Look back to previous example if you need help.",
                    },
                    {
                        stepNum: 4,
                        text: "Bonus If you finish w/ the first four functions create two functions, `adderReturn()` and `multiplierReturn()`, that return the value when you call the function rather than using console.log.",
                    }
                ]
            },
            {
                name: "My First Object",
                steps: [
                    {
                        stepNum: 1,
                        text: "With a partner, spend the next few moments studying the code in the file above.",
                    },
                    {
                        stepNum: 2,
                        text: "Then write code below each comment to log the relevant information about the provided `car` object.",
                    },
                    {
                        stepNum: 2,
                        text: "Bonus If you finish early, create a brand new object of your own. Slack out a snippet of the code to the class when you are done. Be creative!",
                    }
                ]
            },
            {
                name: "Car Game",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using the code from the previous activity as a starting point, create a complete application that meets the following specifications",
                    },
                    {
                        stepNum: 2,
                        text: "Users can enter keyboard input (letters).",
                    },
                    {
                        stepNum: 3,
                        text: "Each of the car's methods are assigned to a key.",
                    },
                    {
                        stepNum: 4,
                        text: "When the user presses a key, it calls the appropriate function.",
                    },
                    {
                        stepNum: 5,
                        text: "These letters also trigger a global function called `reWriteStats()` that logs the car's make, model, color, mileage, and `isWorking` status to the console.",
                    },
                    {
                        stepNum: 6,
                        text: "You WILL need to use the `document.onkeyup()` function to collect input from the user's keyboard.",
                    }
                ]
            },
            {
                name: "Question Game",
                steps: [
                    {
                        stepNum: 1,
                        text: "Starting from a blank HTML file, create an array with 10 question objects. Each object in the array should be structured as follows",
                    },
                    {
                        stepNum: 2,
                        text: "`{ q \"QUESTION\", a \"ANSWER\" }`",
                    },
                    {
                        stepNum: 3,
                        text: "Then create code that will ask the user questions, one by one. The user must answer by hitting t (for true) or f (for false).",
                    },
                    {
                        stepNum: 4,
                        text: "Check the user's answer against the correct answer, and provide them with an alert telling them if they are right or wrong.",
                    },
                    {
                        stepNum: 5,
                        text: "Bonus Keep track of the user's score.",
                    },
                    {
                        stepNum: 6,
                        text: "Hint Don't worry about having DRY code to start with. Just focus on getting working code first.",
                    }
                ]
            }
        ]
    },
    {
        name: "04-jQuery",
        moduleNum: 4,
        exercises: [
            {
                name: "JS Drink List",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using the file above as a starting point, add the missing code such that your JavaScript generates HTML content that displays all of the drink options.",
                    },
                    {
                        stepNum: 2,
                        text: "Hint You will need a for-loop. Inside your for-loop you will need to use each of the following methods `createElement`, `.innerHTML`, and `.appendChild`.",
                    },
                    {
                        stepNum: 3,
                        text: "BonusInstead of using a `for` loop, try searching about the use of the jQuery `.each` method.",
                    }
                ]
            },
            {
                name: "jQuery Drink List",
                steps: [
                    {
                        stepNum: 1,
                        text: "Re-factor (re-write) your previous drinkList code from earlier, but this time use jQuery to complete all of the same tasks.",
                    },
                    {
                        stepNum: 2,
                        text: "Your final code should NOT have any of the following methods `createElement`, `textContent`, or `appendChild`.",
                    },
                    {
                        stepNum: 3,
                        text: "Hint Don\u2019t forget to \u201cincorporate\u201d jQuery before you begin.",
                    }
                ]
            },
            {
                name: "Sandwich Click",
                steps: [
                    {
                        stepNum: 1,
                        text: "Add in the missing code such that clicking any of the sandwiches causes\u2026",
                    },
                    {
                        stepNum: 2,
                        text: "An alert message to popup saying something snarky about the sandwich type.",
                    },
                    {
                        stepNum: 3,
                        text: "A second alert message that displays to the user the number of that specific sandwich they\u2019ve eaten.",
                    },
                    {
                        stepNum: 4,
                        text: "Hint You will need counter variables.",
                    },
                    {
                        stepNum: 5,
                        text: "Bonus Add an image to the `image-div` on the click event.",
                    }
                ]
            },
            {
                name: "Trigger Random",
                steps: [
                    {
                        stepNum: 1,
                        text: "Add in the missing code such that clicking the big blue button triggers a random number (between 1 and 1000) to be selected and prominently displayed in the random-number div.",
                    }
                ]
            },
            {
                name: "Lottery Generator",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using the code from the previous random number generator as a starting point, create a lottery generator.",
                    },
                    {
                        stepNum: 2,
                        text: "In our case, the lottery number should pick a random 9 digit number (and always 9 digits). As an example 886563264.",
                    },
                    {
                        stepNum: 3,
                        text: "Display this number in the random-number div.",
                    },
                    {
                        stepNum: 4,
                        text: "Then when a user clicks again, have the code create a new row with the latest number at the top.",
                    }
                ]
            },
            {
                name: "Number Checker",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using the number-checker.html as a starting point, add code so that",
                    },
                    {
                        stepNum: 2,
                        text: "A computer picks a random number between 1 and 4.",
                    },
                    {
                        stepNum: 3,
                        text: "Users then \u201cclick\u201d the buttons numbered 1 \u2013 4.",
                    },
                    {
                        stepNum: 4,
                        text: "If the user\u2019s number matches the computer\u2019s number, display text informing them that they've won in the 'Result' panel. Otherwise, display text informing them that they've lost.",
                    },
                    {
                        stepNum: 5,
                        text: "If you finish early, try to improve the aesthetics.",
                    }
                ]
            },
            {
                name: "Captain Planet Game",
                steps: [
                    {
                        stepNum: 1,
                        text: "Look at the jQuery API Docs https//api.jquery.com/ and add a button of your own that gives Captain Planet a new power.",
                    },
                    {
                        stepNum: 2,
                        text: "Click to\u2026 Stretch Captain Planet!",
                    },
                    {
                        stepNum: 3,
                        text: "Click to\u2026 Trigger a maniacal laugh!",
                    },
                    {
                        stepNum: 4,
                        text: "Click to\u2026 Create clones of Captain Planet!",
                    },
                    {
                        stepNum: 5,
                        text: "Click to\u2026 Create fire or water (hint images)!",
                    },
                    {
                        stepNum: 6,
                        text: "Slack out a screenshot of the working example.",
                    }
                ]
            },
            {
                name: "Fridge Game",
                steps: [
                    {
                        stepNum: 1,
                        text: "Working in groups of 3, complete the code for the fridge activity such that",
                    },
                    {
                        stepNum: 2,
                        text: "JavaScript dynamically generates buttons for each of the letters on the screen.",
                    },
                    {
                        stepNum: 3,
                        text: "Clicking any of the buttons leads the SAME letter to be displayed on the screen.",
                    },
                    {
                        stepNum: 4,
                        text: "Hitting the clear button erases all of the letters from the fridge.",
                    },
                    {
                        stepNum: 5,
                        text: "Note This is a challenging exercise. You may want one person to type, while the other two watch over to catch bugs and/or research necessary snippets.",
                    }
                ]
            },
            {
                name: "Scope One",
                steps: [
                    {
                        stepNum: 1,
                        text: "Take a few moments dissecting what I just said.",
                    },
                    {
                        stepNum: 2,
                        text: "Look at the file above, and explain to the person next to you what is meant by",
                    },
                    {
                        stepNum: 3,
                        text: "The terms parent function and child function",
                    },
                    {
                        stepNum: 4,
                        text: "The concept that child functions can access parent variables, but not vice versa.",
                    },
                    {
                        stepNum: 5,
                        text: "Be prepared to share!",
                    }
                ]
            },
            {
                name: "Scope Two",
                steps: [
                    {
                        stepNum: 1,
                        text: "Take a few moments to dissect the code in the file above.",
                    },
                    {
                        stepNum: 2,
                        text: "Try to predict what will be printed in each of the examples.",
                    },
                    {
                        stepNum: 3,
                        text: "Be prepared to share!",
                    },
                    {
                        stepNum: 4,
                        text: "Note Pay attention to the unusual use of the keyword `this`",
                    }
                ]
            },
            {
                name: "Scope Three",
                steps: [
                    {
                        stepNum: 1,
                        text: "Take a few moments to dissect the code in the file above.",
                    },
                    {
                        stepNum: 2,
                        text: "Try to predict what will be printed in each of the examples.",
                    },
                    {
                        stepNum: 3,
                        text: "Be prepared to share!",
                    }
                ]
            },
            {
                name: "Color Correcter",
                steps: [
                    {
                        stepNum: 1,
                        text: "For this activity, you'll be creating a 'correct color' game.",
                    },
                    {
                        stepNum: 2,
                        text: "The game should generate a random color string (ie, 'green' or 'blue') that is displayed in a random color. We'll cause this the current color.",
                    },
                    {
                        stepNum: 3,
                        text: "It should also generate a list of random color strings that are also displayed in random colors. We'll call this the color list.",
                    },
                    {
                        stepNum: 4,
                        text: "The user must click the name of the color in the color list that matches the color of the current color.",
                    },
                    {
                        stepNum: 5,
                        text: "Make an alert telling the user whether they chose correct or incorrect.",
                    },
                    {
                        stepNum: 6,
                        text: "After the alert, the game should reset.",
                    },
                    {
                        stepNum: 7,
                        text: "Checkout the below gifs to see how the game should work.",
                    },
                    {
                        stepNum: 8,
                        text: "Bonus Make sure that none of the colors appear in the same color as their name.",
                    }
                ]
            },
            {
                name: "Scope Quiz",
                steps: [
                    {
                        stepNum: 1,
                        text: "Spend a few moments studying the code with the person sitting next to you.",
                    },
                    {
                        stepNum: 2,
                        text: "Then run the program in the browser.",
                    },
                    {
                        stepNum: 3,
                        text: "Once you run the program, you'll find that Code Block 1 leads to different alerts than Code Block 2.",
                    },
                    {
                        stepNum: 4,
                        text: "Ask your partner which Code Block is behaving the way you would expect.",
                    },
                    {
                        stepNum: 5,
                        text: "Then work with your partner to try and identify the specific difference that is causing the issue with the faulty block.",
                    },
                    {
                        stepNum: 6,
                        text: "Once you spot the issue, try to explain to your partner why JavaScript is handling these Code Blocks differently.",
                    }
                ]
            },
            {
                name: "This Example",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using the comments in the guide answer each of the questions asked in the file.",
                    },
                    {
                        stepNum: 2,
                        text: "Focus your attention on trying to wrap your mind around the concept of \"this\" and the unique role it can play in code.",
                    },
                    {
                        stepNum: 3,
                        text: "Then try to explain to your partner how \"this\" works, focus on the first three examples.",
                    }
                ]
            },
            {
                name: "Cobweb",
                steps: [
                    {
                        stepNum: 1,
                        text: "Create the missing the code such that you can retrieve the requested item from the `theCobWeb` object.",
                    },
                    {
                        stepNum: 2,
                        text: "Note This exercise is actually very relevant to work as a web developer, as data is often relayed across websites in the form of deeply nested JavaScript objects like this one.",
                    },
                    {
                        stepNum: 3,
                        text: "Bonus If you finish early, begin pondering the bonus item. This is a very challenging exercise. It's impossible to complete in the allotted time. If you're feeling valiant - complete it outside of class and come back to instructors/TAs to go over it. This will arm you for difficult interview questions in the future.",
                    }
                ]
            },
            {
                name: "jQuery Calculator",
                steps: [
                    {
                        stepNum: 1,
                        text: "Create the JavaScript logic necessary to add functionality to the jQuery Calculator.",
                    },
                    {
                        stepNum: 2,
                        text: "Your calculator should be able to handle basic mathematical operations like addition, subtraction, multiplication, etc.",
                    },
                    {
                        stepNum: 3,
                        text: "You should be making use of the existing buttons.",
                    },
                    {
                        stepNum: 4,
                        text: "You should be making use of the existing placeholders for entering content (i.e. \"firstNumber\", \"operator\", \"secondNumber\", \"result\").",
                    },
                    {
                        stepNum: 5,
                        text: "You should have fun and push yourselves! This is a challenge activity\u2014which means, if you get it done, you are a King of jQuery. If you don't, no sweat. The important thing is that you learned at least a FEW things along the way.",
                    }
                ]
            }
        ]
    },
    {
        name: "05-Timers",
        moduleNum: 5,
        exercises: [
            {
                name: "Coin Flip",
                steps: [
                    {
                        stepNum: 1,
                        text: "Make a Coin Flipper game.",
                    },
                    {
                        stepNum: 2,
                        text: "Follow the directions in the html file.",
                    },
                    {
                        stepNum: 3,
                        text: "How the app works",
                    },
                    {
                        stepNum: 4,
                        text: "The user chooses Heads or Tails, and the computer randomly selects heads or tails and displays the outcome on the screen. The app then displays whether or not the user won or lost.",
                    },
                    {
                        stepNum: 5,
                        text: "If heads, use <http//random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg>",
                    },
                    {
                        stepNum: 6,
                        text: "If tails, display <http//random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg>",
                    },
                    {
                        stepNum: 7,
                        text: "Bonus Put your JavaScript in its own file and link to it in the HTML.",
                    },
                    {
                        stepNum: 8,
                        text: "Bonus Keep track of the number of Heads or Tails and display the results on the screen.",
                    },
                    {
                        stepNum: 9,
                        text: "Bonus Add CSS styling.",
                    }
                ]
            },
            {
                name: "This",
                steps: [
                    {
                        stepNum: 1,
                        text: "Find a partner.",
                    },
                    {
                        stepNum: 2,
                        text: "Together, open the supplied HTML file and answer all questions.",
                    }
                ]
            },
            {
                name: "Simple Timer",
                steps: [
                    {
                        stepNum: 1,
                        text: "Make a page with a simple timer that sends an alert and plays a sound after 15 seconds.",
                    },
                    {
                        stepNum: 2,
                        text: "Have it send an alert when 5 seconds has passed, 10 seconds has passed and when the time is up.",
                    },
                    {
                        stepNum: 3,
                        text: "You will use this to time the break!",
                    }
                ]
            },
            {
                name: "Interval",
                steps: [
                    {
                        stepNum: 1,
                        text: "There is a small bug in this code. With a partner try and see what is wrong.",
                    },
                    {
                        stepNum: 2,
                        text: "Explain to each other what is happening in this file.",
                    }
                ]
            },
            {
                name: "Stopwatch",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open stopwatch.js and follow the instructions in the file.",
                    },
                    {
                        stepNum: 2,
                        text: "You will not not need to edit the HTML file we give you.",
                    },
                    {
                        stepNum: 3,
                        text: "Use jQuery and the timing events you learned today to create a stopwatch with Start, Stop and Reset buttons.",
                    },
                    {
                        stepNum: 4,
                        text: "Bonus Add a lap timer.",
                    },
                    {
                        stepNum: 5,
                        text: "Bonus Use CSS to style the timer",
                    }
                ]
            },
            {
                name: "Slideshow",
                steps: [
                    {
                        stepNum: 1,
                        text: "Create a slideshow using jQuery and JavaScript Timing Events.",
                    },
                    {
                        stepNum: 2,
                        text: "Feel free to find your own images or use the ones provided in the images directory.",
                    },
                    {
                        stepNum: 3,
                        text: "Display the \"loading.gif\" image in between each picture for one second.",
                    },
                    {
                        stepNum: 4,
                        text: "Bonus Add CSS styling.",
                    }
                ]
            },
            {
                name: "Bubble Sort",
                steps: [
                    {
                        stepNum: 1,
                        text: "Write a function that sorts an array of numbers in order. Use the starter code provided below, and have the unsorted array show in the `#start` div.",
                    },
                    {
                        stepNum: 2,
                        text: "When the user clicks the `button`, the sorted result should be displayed in the `#result` div.",
                    },
                    {
                        stepNum: 3,
                        text: "You can use this array in your JavaScript code",
                    },
                    {
                        stepNum: 4,
                        text: "This link could be helpful to give you an idea of one way to do it <http//www.stoimen.com/blog/2012/02/20/computer-algorithms-bubble-sort>",
                    }
                ]
            },
            {
                name: "Buy Low Sell High",
                steps: [
                    {
                        stepNum: 1,
                        text: "Xena is an amateur day trader. Her portfolio consists of IAG. IAG is a mineral exploration company. Xena believes IAG has opportunity based on a gut feeling she has. Xena bought 10000 shares of IAG at $1.45 per share at 10 am on 12/12/15. She ended up selling it 20 minutes later at $1.74 making a $2900 profit. Xena just made 2 months of rent in 20 minutes.",
                    },
                    {
                        stepNum: 2,
                        text: "These were all the prices of IAG on 12/12/15 during a one hour period in chronological order",
                    },
                    {
                        stepNum: 3,
                        text: "$1.42, $1.32, $1.45, $1.20, $1.34, $1.74, $1.10, $1.89, $1.42, $1.90",
                    },
                    {
                        stepNum: 4,
                        text: "Write an efficient function that takes an array of stock prices (assuming they are in chronological order) and the shares purchased. The function would determine the biggest profit possible during that period if someone bought the stock at the lowest price and sold it at the highest.",
                    },
                    {
                        stepNum: 5,
                        text: "You must buy before you sell. No shorting.",
                    },
                    {
                        stepNum: 6,
                        text: "By efficient, you should loop over the array only once!",
                    },
                    ,
                    {
                        stepNum: 7,
                        text: "Bonus Put in validation so that there are at least 3 stock prices in the array",
                    },
                    {
                        stepNum: 8,
                        text: "Bonus Consider case when the stock goes down every moment",
                    },
                    {
                        stepNum: 9,
                        text: "Bonus You would want to return the minimum negative profit.",
                    },
                    {
                        stepNum: 10,
                        text: "Bonus For example, if you bought at $22 and sold at $21, you would lose $1 per share. That's the best case scenario if you had to buy and sell this stock within an hour.",
                    }
                ]
            },
            {
                name: "File Extension",
                steps: [
                    {
                        stepNum: 1,
                        text: "You have an array of filenames with extensions. Sort the files into arrays based on whether or not they are videos or images.",
                    },
                    {
                        stepNum: 2,
                        text: "var files = [\"pavans_first_birthday.mov\",\"owens_asleep_at_the_computer.jpg\",\"michael_fights_a_polar_bear.mp4\",\"nate_road_rage.avi\",\"ruby_skydiving.jpeg\",\"ken_getting_his_black_belt.png\",\"dan_winning_underground_street_race.mov\",\"its_hard_to_come_up_with_file_names.gif\",\"seriously_this_is_taking_too_long.mpg\",\"i_wonder_how_many_of_these_i_should_have.png\",\"probably_a_few_more.avi\",\"nutmeg_is_clawing_my_sneakers_again.mp4\",\"cat_i_will_destroy_you.gif\",\"i_wish_we_had_a_dog.jpeg\",\"stop_looking_at_me_like_that_nutmeg.mpeg\",\"aww_i_cant_hate_you.png\",\"omg_my_sneakers.avi\",\"cat_you_are_the_worst.mp4\"];",
                    },
                    {
                        stepNum: 3,
                        text: "Image File Extensions jpg, gif, jpeg, png",
                    },
                    {
                        stepNum: 4,
                        text: "Video File Extensions mov avi, mpeg, mp4, mpg",
                    }
                ]
            },
            {
                name: "Fizz buzz",
                steps: [
                    {
                        stepNum: 1,
                        text: "Write a script that prints the numbers 1 to 100 in the console. But for multiples of three, print `Fizz` instead of the number. For multiples of five, print `Buzz`. For numbers which are multiples of both three and five, print `FizzBuzz`.",
                    }
                ]
            },
            {
                name: "Floats Box Model",
                steps: [
                    {
                        stepNum: 1,
                        text: "DO NOT TOUCH THE HTML.",
                    },
                    {
                        stepNum: 2,
                        text: "Get the `#right` div next to the `#left` div",
                    },
                    {
                        stepNum: 3,
                        text: "Bonus Don't change any widths.",
                    },
                    {
                        stepNum: 4,
                        text: "Get the Background color to extend past the two floated divs.",
                    },
                    {
                        stepNum: 5,
                        text: "Make the `#right` div end where the #left div ends. Make it so you can scroll to see the text.",
                    },
                    {
                        stepNum: 6,
                        text: "Make the `#after` div appear after the text boxes.",
                    },
                    {
                        stepNum: 7,
                        text: "Center the `#text-wrapper`.",
                    },
                    {
                        stepNum: 8,
                        text: "Make the space around the text with the navy background so it looks like the picture below.",
                    }
                ]
            },
            {
                name: "Is Pangram",
                steps: [
                    {
                        stepNum: 1,
                        text: "A pangram is a sentence that contains all the letters of the English alphabet at least once. For example `The quick brown fox jumps over the lazy dog.`",
                    },
                    {
                        stepNum: 2,
                        text: "Write a function that takes a string and determines whether the string is a pangram, without typing out the full alphabet anywhere in your code.",
                    },
                    {
                        stepNum: 3,
                        text: "Bonus Handle punctuation in the sentence.",
                    }
                ]
            },
            {
                name: "jQuery To Do",
                steps: [
                    {
                        stepNum: 1,
                        text: "Use the provided starter HTML to make a list app. This app will take text from an input box and display it in another box elsewhere on the page. Add a way to click and delete the entries you add, too.",
                    },
                    {
                        stepNum: 2,
                        text: "Bonus Add a new entry when you press the `return` key;",
                    },
                    {
                        stepNum: 3,
                        text: "Bonus Style it.",
                    }
                ]
            },
            {
                name: "Media Queries",
                steps: [
                    {
                        stepNum: 1,
                        text: "Add media queries to the provided CSS to make the page look like the screenshots below.",
                    },
                    {
                        stepNum: 2,
                        text: "Note For the picture, use `http://www.stevensegallery.com/768/200`",
                    },
                    {
                        stepNum: 3,
                        text: "Note The text divs are height limited and vertically scrollable.",
                    }
                ]
            },
            {
                name: "Palindrome Detector",
                steps: [
                    {
                        stepNum: 1,
                        text: "A palindrome is a sentence that reads the same backwards and forwards \"Was it a car or a cat I saw?\"",
                    },
                    {
                        stepNum: 2,
                        text: "Reverse each word in a sentence and display it on the screen in the same order. For example, the sentence `This is an example` would become `siht si na elpmaxe`. If the sentence is a palindrome, have it display in red.",
                    },
                    {
                        stepNum: 3,
                        text: "Note Remove periods.",
                    },
                    {
                        stepNum: 4,
                        text: "Note Add the result to the page in the div with the id \"Result\".",
                    },
                    {
                        stepNum: 5,
                        text: "Remove all \"special characters\" (commas, periods, etc).",
                    },
                    {
                        stepNum: 6,
                        text: "Do not use the reverse() method.",
                    },
                    {
                        stepNum: 7,
                        text: "Here are some test phrases to put in your JavaScript",
                    },
                    {
                        stepNum: 8,
                        text: "\"Otto bought a racecar he cannot afford.\"",
                    },
                    {
                        stepNum: 9,
                        text: "\"Otto lost the deed to his house.\"",
                    },
                    {
                        stepNum: 10,
                        text: "\"Otto needs Xanax.\"",
                    }
                ]
            },
            {
                name: "Prime Checker",
                steps: [
                    {
                        stepNum: 1,
                        text: " Write a function that checks to see if a number is a prime number or not. Have it return `true` if it is, or `false` if it isn't.",
                    },
                    {
                        stepNum: 2,
                        text: "A Prime number is a number greater than one that can only be divided by one and itself.",
                    },
                    {
                        stepNum: 3,
                        text: "https//www.mathsisfun.com/prime_numbers.html",
                    }
                ]
            },
            {
                name: "Recursive Fibonacci",
                steps: [
                    {
                        stepNum: 1,
                        text: "Take an integer `n` and return the first `nth` numbers of the Fibonacci Sequence.",
                    },
                    {
                        stepNum: 2,
                        text: "For example, if you call the function with the number `10`, you should get back an array with `[1,1,2,3,5,8,13,21,34,55]` (The first 10 numbers of the Fibonacci Sequence).",
                    },
                    {
                        stepNum: 3,
                        text: "The Fibonacci Sequence is a series of numbers, starting from 1, in which you get the next number by adding the previous two.",
                    },
                    {
                        stepNum: 4,
                        text: "Note Calculating the Fibonacci Sequence with a Recursive Function can take a lot of time to process if you use a large number (around 50 or more). This can cause your browser window to be unresponsive while it is calculating.",
                    },
                    {
                        stepNum: 5,
                        text: "Here is an example of a simple recursive function. Watch `simple_recursion.mov` for an explanation and breakdown.",
                    },
                    {
                        stepNum: 6,
                        text: "var simpleRecursion = function (n){if (n>0){console.log(n);simpleRecursion(n-1);} else{console.log(\"done\");}};",
                    }
                ]
            },
            {
                name: "String Calculator",
                steps: [
                    {
                        stepNum: 1,
                        text: "Write a text based calculator. The calculator will take strings in this format",
                    },
                    {
                        stepNum: 2,
                        text: "`Add 2 and 4`",
                    },
                    {
                        stepNum: 3,
                        text: "`Subtract 3 from 5`",
                    },
                    {
                        stepNum: 4,
                        text: "`Divide 6 by 2`",
                    },
                    {
                        stepNum: 5,
                        text: "`Multiply 3 by 7`",
                    },
                    {
                        stepNum: 6,
                        text: "The calculator will then calculate and `return` the answer.",
                    },
                    {
                        stepNum: 7,
                        text: "You only need to handle `subtract`, `add`, `divide`, and `multiply`.",
                    },
                    {
                        stepNum: 8,
                        text: "Use a `switch` statement.",
                    },
                    {
                        stepNum: 9,
                        text: "If a user enters a string not in the above format, return a error message that tells them what they did wrong.",
                    }
                ]
            }
        ]
    },
    {
        name: "06-AJAX",
        moduleNum: 6,
        exercises: [
            {
                name: "Customer Object",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using the instructions shown in the comments, create `console.log` statements that parse out the requested information.",
                    },
                    {
                        stepNum: 2,
                        text: "Help those around you if you finish early.",
                    }
                ]
            },
            {
                name: "Ajax to HTML",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using the starter code in [ajax-to-html](Unsolved/ajax-to-html.html), create and append a new table row to the existing table body. The new row should display the retrieved movies Title, Year, and Actors.",
                    },
                    {
                        stepNum: 2,
                        text: "Once you have successfully created and populated a new table row, repeat this process to query the OMDB API for two more movies of your choice! Append two more rows containing the results from both AJAX requests.",
                    },
                    {
                        stepNum: 3,
                        text: "Hints: You will have to build a URL of your own with the search parameters listed.",
                    },
                    {
                        stepNum: 4,
                        text: "Bonus: Once youve completed the basic activity, refactor your solution to be more DRY by placing repetitive logic inside of functions to be called when needed.",
                    }
                ]
            },
            {
                name: "Bujumbura",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using either bujumbura-easier.html or bujumbura-harder.html as a starting point, add in the missing code necessary to accomplish the following:",
                    },
                    {
                        stepNum: 2,
                        text: "Query the [OpenWeatherMap API](http://openweathermap.org/api) for the current weather data on Bujumbura, Burundi.",
                    },
                    {
                        stepNum: 3,
                        text: "Log the retrieved data from this query to console.",
                    },
                    {
                        stepNum: 4,
                        text: "Parse the retrieved data to display wind speed, humidity, and temperature information into the HTML.",
                    },
                    {
                        stepNum: 5,
                        text: "HINT: You will need to request an API key from the website.",
                    },
                    {
                        stepNum: 6,
                        text: "BONUS: Figure out how to convert the Kelvin temperature provided into Fahrenheit.",
                    },
                    {
                        stepNum: 7,
                        text: "NOTE: Dont worry if this feels hard. Push yourself!",
                    }
                ]
            },
            {
                name: "Movies JSON_Dump",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using 2-movie-json-dump.html in 06-MovieJSONDump as starter code, add functionality such that clicking Movie Search triggers an AJAX call to the OMDb database and the JSON response to be appended onto the page.",
                    },
                    {
                        stepNum: 2,
                        text: "If you finish early, begin reading about the [Bands In Town API](https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0). Try to understand how to search for a specific artist.",
                    }
                ]
            },
            {
                name: "MovieButtonLayout",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using either movie-button-layout-easier.html or movie-button-layout-harder.html as a starting-point, replicate the functionality of the application just demonstrated to you.",
                    },
                    {
                        stepNum: 2,
                        text: "Your final code should be: Dynamically generate the initial buttons using jQuery",
                    },
                    {
                        stepNum: 3,
                        text: "Allow users to create new buttons upon entering text in the textbox and clicking Add a Movie Bro.",
                    },
                    {
                        stepNum: 4,
                        text: "If you finish early, begin reading about the [Bands In Town API](https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0). Try to understand how to search for a specific artist.",
                    }
                ]
            },
            {
                name: "LogMovieName",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using the starter code provided, create the missing code snippets inside the alertMovieName function necessary to capture the movie name for both the original and new buttons.",
                    },
                    {
                        stepNum: 2,
                        text: "HINT: You should use HTML data- attributes.",
                    }
                ]
            },
            {
                name: "Click_JSON",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using the Starter code provided, create the missing code snippets inside the displayMovieInfo() function necessary to display JSON data about each movie.",
                    },
                    {
                        stepNum: 2,
                        text: "HINT: You should use HTML data- attributes.",
                    }
                ]
            },
            {
                name: "WorkingMovieApp",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using either version of the starter code provided to you, complete the application so that various snippets of information about your movie are displayed underneath. As a suggestion, display at least each of the following:",
                    },
                    {
                        stepNum: 2,
                        text: "Movie Poster",
                    },
                    {
                        stepNum: 3,
                        text: "Rating",
                    },
                    {
                        stepNum: 4,
                        text: "Release Date",
                    },
                    {
                        stepNum: 5,
                        text: "Plot",
                    }
                ]
            },
            {
                name: "BandsInTownApp",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using the starter code provided to you, complete the application such that your code will search the Bands In Town API for the artist specified in the search box.",
                    },
                    {
                        stepNum: 2,
                        text: "Bands in Town is a service for finding out when and where bands and artists are scheduled to tour.",
                    },
                    {
                        stepNum: 3,
                        text: "Information on how to use query the Bands In Town API can be found [here](https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0)",
                    },
                    {
                        stepNum: 4,
                        text: "Note: This is a free public API and you will not need to sign up for anything.",
                    },
                    {
                        stepNum: 5,
                        text: "HINT: Scroll down the API docs and study the examples. See if you can figure out how to query for an artists information. You will need to use the /artists/{artistname} endpoint.",
                    },
                    {
                        stepNum: 6,
                        text: "HINT: The app_id parameter described in the docs is required, but can be set to anything you wish.",
                    }
                ]
            },
            {
                name: "CatButton",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open the file 01-cat-button-students.html in your browser. Then take a few moments to see what the application does.",
                    },
                    {
                        stepNum: 2,
                        text: "Then fill in the missing comments for each line to describe what each section does.",
                    }
                ]
            },
            {
                name: "ButtonTriggeredAjax",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using the sample code youve just been given and the code comments as a guide, re-create the functionality you just observed.",
                    },
                    {
                        stepNum: 2,
                        text: "Your final application should trigger Gifs about your celebrity/author to appear.",
                    }
                ]
            },
            {
                name: "Dynamic_Elements",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using the comments in the code as a guide -- replicate the functionality shown to you.",
                    },
                    {
                        stepNum: 2,
                        text: "Your completed application should trigger gifs to appear related to the animal making the sound listed in the button.",
                    }
                ]
            },
            {
                name: "PausingGifs",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using the comments provided in the code, add in the code necessary to provide stop/start animation to your application.",
                    }
                ]
            },
            {
                name: "NYTSearch",
                steps: [
                    {
                        stepNum: 1,
                        text: "Front-End:",
                    },
                    {
                        stepNum: 2,
                        text: " Create the layout for the design above. Feel free to use Bootstrap or to do something more customized of your own. Make sure to organize your code so as to have the necessary IDs. Incorporate text boxes for capturing User Input. Then research how to retrieve the input values in JavaScript",
                    },
                    {
                        stepNum: 3,
                        text: "Begin creating basic click events. Register the submit button Create working transfers of data between the text-boxes and the backend. Experiment with creating content regions for where the article will go.",
                    },
                    {
                        stepNum: 4,
                        text: "Continue polishing the display of content in the HTML. Consider adding styling or other jQuery tricks. Consider using Bootswatch and/or Font Awesome to add more visual appeal",
                    },
                    {
                        stepNum: 5,
                        text: "Back-end:",
                    },
                    {
                        stepNum: 6,
                        text: "Do preliminary research on the [API](http://developer.nytimes.com/article_search_v2.json). Register for an API Key. Understand what format the URL should look like to make an Article Call. (Hint: Use the API Console!!) Experiment with console logging various fields.",
                    },
                    {
                        stepNum: 7,
                        text: "Create the AJAX call needed to retrieve data then console.log all of the relevant fields. Incorporate various \u201coptional parameters\u201d (hard code these in initially). Take note of various \u201cbugs\u201d that appear with certain searches.",
                    },
                    {
                        stepNum: 8,
                        text: "Put in a hard-effort to deal with bugs. How can you handle missing fields?",
                    },
                    {
                        stepNum: 9,
                        text: "Deploy your app to GitHub Pages! Then slack your links to your instructors + TAs",
                    }
                ]
            }
        ]
    },
    {
        name: "07-Firebase",
        moduleNum: 7,
        exercises: [
            {
                name: "To-do-List-No-Persistence",
                steps: [
                    {
                        stepNum: 1,
                        text: "Assign one student of the three of you to be the groups typist. All others in the group will help supervise, offer guidance, and help catch bugs that the groups typist might not be able to catch. Throughout this activity (and many of todays activities) you will be switching roles with those in your group.",
                    },
                    {
                        stepNum: 2,
                        text: "Then create a Basic To-Do application using the 1-student-do-todolist.html as a starting point. The HTML is already created for you so you will only have to fill in the javascript sections where there are large blanks. Alternatively, if you are feeling bold and capable, your group may code it from scratch without the use of the base code provided.",
                    },
                    {
                        stepNum: 3,
                        text: "HINT: Each of the buttons and text elements should have a dynamically created identifier or data attribute that differentiates one item on the list from another. You should use these attributes to close out the appropriate items when you click on the \"X\" beside them.",
                    }
                ]
            },
            {
                name: "Sign-In-No-Persistence",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using the 2-student-do-signin-no-persistence as a starting point, fill in the JavaScript code necessary to make the page \"save user inputs\" and then re-display them on the second panel (most recent member).",
                    },
                    {
                        stepNum: 2,
                        text: "NOTE: Dont worry about using client-side saving just yet. Just focus on getting the text inside the inputs and then displaying them via html in the second panel.",
                    }
                ]
            },
            {
                name: "Sign-In-Local-Storage",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using the solution provided to you in 2-student-do-signin-no-persistence-solution.html, re-configure the application so that it utilizes localStorage.",
                    },
                    {
                        stepNum: 2,
                        text: "If your code worked it should save/display the last inputted user even if the tab is closed or if the page is closed and reopened.",
                    }
                ]
            },
            {
                name: "Sign-In-Session-Storage",
                steps: [
                    {
                        stepNum: 1,
                        text: "Now reconfigure your app to use session storage instead! (You should be following along with your instructor for this one.)",
                    }
                ]
            },
            {
                name: "To-Do-List-Local-Storage",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using a working example of the to-do application 1-student-do-todolist-solution.html incorporate the use of localStorage to create data persistence.",
                    },
                    {
                        stepNum: 2,
                        text: "Have the group member who hasnt typed yet become the typist in the group while the other two take on the role of supervisor.",
                    },
                    {
                        stepNum: 3,
                        text: "HINT: You will need to create an additional array of todos that you can keep adding todo items to.",
                    },
                    {
                        stepNum: 4,
                        text: "HINT: You will need to selectively delete array elements to get this working properly. (Suggestion: Look into .splice)",
                    },
                    {
                        stepNum: 5,
                        text: "HINT: You will need to take an array and dump the contents into localStorage (Suggestion: Use JSON.stringify(todoArray)).",
                    },
                    {
                        stepNum: 6,
                        text: "HINT: Dont freak out. This is hard, but push yourselves as best you can!",
                    }
                ]
            },
            {
                name: "Click-Button-Complete",
                steps: [
                    {
                        stepNum: 1,
                        text: "Comment each line of code in the file with what you think is happening on that line.",
                    }
                ]
            },
            {
                name: "Countdown-Button",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using either logic.js (easier) or logicOption2.js (harder), create the click down activity using a Firebase database to store the click data on the backend.",
                    },
                    {
                        stepNum: 2,
                        text: "Your application should be able to run on multiple browser windows simultaneously and register click events on each screen correctly.",
                    }
                ]
            },
            {
                name: "Most-Recent-User",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using the file above as a starting point, create an app that stores each new user in a Firebase database.",
                    },
                    {
                        stepNum: 2,
                        text: "Your app should update in real time - if multiple browsers windows are open to the app at the same time, they should all update with the new information if a new user is added.",
                    }
                ]
            },
            {
                name: "Coder's Bay",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using either logic.js (easier) or logicOption2.js (harder) as a starting point, create the CodersBay app using a Firebase database to store data on the backend.",
                    },
                    {
                        stepNum: 2,
                        text: "Your application should be able to run on multiple browser windows simultaneously and register click events on each screen correctly.",
                    }
                ]
            },
            {
                name: "Coder's-Bay-View-Tracker",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using logic.js as a starting point, incorporate view tracking using Firebase on the backend.",
                    },
                    {
                        stepNum: 2,
                        text: "HINT: .set() overwrites everything in the specified directory, so we will need to use .ref() to store bidder data and connections in different folders.",
                    }
                ]
            },
            {
                name: "Timesheet",
                steps: [
                    {
                        stepNum: 1,
                        text: "For the next 20 minutes, focus all your efforts on creating the application layout for your site. This phase involves both:   Creating the overall HTML/CSS/Bootstrap Layout   Creating the initial .on(\"click\") event that will dynamically trigger new HTML rows to be generated. This phase DOES NOT involve sending or receiving data to Firebase. If you finish early:",
                    },
                    {
                        stepNum: 2,
                        text: "Continue refining the design! Take things to the next level. Make this application portfolio-grade!   Begin reading about push({}) and .on(\"child_added\") in the Firebase documentation.",
                    },
                    {
                        stepNum: 3,
                        text: "Using your newfound knowledge of the .push({}) method, create the code necessary to push employee data into the database upon clicking the submit button on your webpage.",
                    },
                    {
                        stepNum: 4,
                        text: "Using your newfound knowledge of the .on(\"child_added\") method, begin to retrieve your employee data from the database and populating the records into your table.",
                    },
                    {
                        stepNum: 5,
                        text: "NOTE: Dont worry about calculating Months Worked or the Total Billed just yet. Just focus on retrieving the data that is already in the database.",
                    },
                    {
                        stepNum: 6,
                        text: "Use your newfound momentJS knowledge to calculate the number of months worked and, subsequently, the total amount billed.",
                    }
                ]
            },
            {
                name: "MomentJS",
                steps: [
                    {
                        stepNum: 1,
                        text: "Complete each of the activities listed in the comments.",
                    },
                    {
                        stepNum: 2,
                        text: "Dont let the simple example fool you. Working with a new library can be tough. Be prepared to get frustrated. Stick with it!",
                    },
                    {
                        stepNum: 3,
                        text: "You dont need to go in order.",
                    }
                ]
            }
        ]
    },
    {
        name: "08-Project-One",
        moduleNum: 8,
        exercises: [
            {
                name: "Stu-CreateRepository",
                steps: [
                    {
                        stepNum: 1,
                        text: "One group member should create a new Github repository. Dont worry about the project name now, this can be changed later.",
                    },
                    {
                        stepNum: 2,
                        text: "From the repos main page, click the Settings tab.",
                    },
                    {
                        stepNum: 3,
                        text: "Once in the repos settings, select the Collaborators menu item on the left.",
                    },
                    {
                        stepNum: 4,
                        text: "From the Collaborators page invite your group members to be project collaborators by entering their Github usernames one at a time.",
                    },
                    {
                        stepNum: 5,
                        text: "Each invited group member should receive an email they must open to accept the invitation.",
                    },
                    {
                        stepNum: 6,
                        text: "Ask an instructor or TA if you get stuck!",
                    }
                ]
            },
            {
                name: "Stu-Protect-Master",
                steps: [
                    {
                        stepNum: 1,
                        text: "Only one member per project group needs to complete this activity.",
                    },
                    {
                        stepNum: 2,
                        text: "Navigate back to the repos Settings page and then select Branches from the left sidebar.",
                    },
                    {
                        stepNum: 3,
                        text: "Under Branch Protection Rules select master from the dropdown.",
                    },
                    {
                        stepNum: 4,
                        text: "You should be presented with some options, check off the following",
                    },
                    {
                        stepNum: 5,
                        text: "Protect this branch",
                    },
                    {
                        stepNum: 6,
                        text: "Require pull request reviews before merging",
                    },
                    {
                        stepNum: 7,
                        text: "Include administrators",
                    },
                    {
                        stepNum: 8,
                        text: "If completed successfully, no one should be able to push directly to the master branch. Instead, all changes must be made in the form of pull requests that are to be reviewed by another group member.",
                    },
                    {
                        stepNum: 9,
                        text: "Ask an instructor or TA for assistance if you get stuck!",
                    }
                ]
            },
            {
                name: "Stu_Branching_pushing",
                steps: [
                    {
                        stepNum: 1,
                        text: "In this section we will create a branch, add a feature, and submit a pull request. Only one group member should complete this section, everyone else should observe.",
                    },
                    {
                        stepNum: 2,
                        text: "Clone the project repo onto your computer and cd into it. Run the following command in your terminal to create and checkout to a new branch",
                    },
                    {
                        stepNum: 3,
                        text: "```  git checkout -b create-html-skeleton  ``` You should now be on a new branch named create-html-skeleton. In order to verify this worked, run the following command in your terminal  ```  git branch  ```",
                    },
                    {
                        stepNum: 4,
                        text: " You should see two branches listed `master` and `create-html-skeleton`. The `create-html-skeleton` branch should have an asterisk to the left of it. This indicates that this is the branch youre currently on. At the root of the repo, create a new file named `index.html`. Inside this file, add code for a basic HTML skeleton and save. In your terminal, add and commit the changes. Then push up your code by running following in your terminal  ```  git push origin create-html-skeleton  ```",
                    },
                    {
                        stepNum: 5,
                        text: "This should push up your code to to GitHub on a branch with the same name (`create-html-skeleton`). Go to the main repo page at github.com and you should see the following  ![Recently Pushed](Images/01-Recently-Pushed.png) Click Compare & pull request. On the next screen, add a description of the work that was done and click the Pull Request button.  ![Recently Pushed](Images/02-Pull-Request.png) If completed successfully, you should see the pull request listed under the repos Pull request tab.  ![PR List](Images/03-PR-List.png)",
                    },
                    {
                        stepNum: 6,
                        text: "In this section we will review the pull request from Part I and merge it into master. A different project member should complete this section while others observe. Clone the repo to your computer if you havent already done so and cd into it.",
                    },
                    {
                        stepNum: 7,
                        text: "First you will want to test the changes introduced by the `add-html-skeleton` branch locally.In order to examine the new branch on your local machine, run the following commands in your terminal  ```  git fetch  ```  ```  git checkout -b add-html-skeleton origin/add-html-skeleton  ``` This code should bring the copy of the `add-html-skeleton` branch thats on GitHub onto your computer.    Make sure this worked by verifying that theres an `index.html` file in your local repo.   Normally youd run the code here to make sure everything works properly. Check back out to your local `master` branch by running the following in your terminal  ```  git checkout master  ```",
                    },
                    {
                        stepNum: 8,
                        text: "Now go to your GitHub repos main page and go to the Pull request section. Select the `add-html-skeleton` pull request from the list.  ![PR List](Images/03-PR-List.png) At the next page select the option to see the Files changed.  ![Review](Images/04-Review.png) You should be presented with all of the files that were changed in this PR.  ![Files Changed](Images/05-Files-Changed.png) If there are any changes you would like made, you can click the line number to leave a comment the PR author will see and should address before approval. Otherwise click Review changes and approve the PR. You should be taken to the following screen",
                    },
                    {
                        stepNum: 9,
                        text: "Click the Merge pull request button to add the branchs changes into master. Once complete you can delete the feature branch from your machine by running the following in your terminal",
                    },
                    {
                        stepNum: 10,
                        text: "git branch -D add-html-skeleton",
                    }
                ]
            },
            {
                name: "Stu_Git-Recap",
                steps: [
                    {
                        stepNum: 1,
                        text: "One partner should create a new repository on GitHub. Name it anything you like. Dont forget to click initialize this repository with a README.",
                    },
                    {
                        stepNum: 2,
                        text: "Add the other partner as a collaborator, by going to `Settings > Collaborators` and adding their GitHub username. Under the `Branches` tab in settings, choose master from the drop down under `Branch protection rules` ",
                    },
                    {
                        stepNum: 3,
                        text: "Check all of the following ",
                    },
                    {
                        stepNum: 4,
                        text: "Protect this branch   Require pull request reviews before merging   Include administrators",
                    },
                    {
                        stepNum: 5,
                        text: "Clone the repository to your local machine using `git clone` and create and checkout a new branch using `git checkout -b` followed by a branch name. Remember that branch names should describe the feature that will be created on that branch.Then open the project in your editor and make some changes.",
                    },
                    {
                        stepNum: 6,
                        text: "Add and commit the changes using```git add -A ``````git commit -m descriptive message here```",
                    },
                    {
                        stepNum: 7,
                        text: "Push these changes back up to GitHub using `git push origin` followed by your branch name. Navigate to your repository in GitHub and there will be a prompt to open a pull request (you may need to refresh). Click the green button to create a pull request Assign a collaborator to review your pull request and merge it.",
                    },
                    {
                        stepNum: 8,
                        text: "On your local machine, checkout the master branch using `git checkout master` and then update the branch to show the latest changes using `git pull origin master`",
                    }
                ]
            },
            {
                name: "Student-MVP",
                steps: [
                    {
                        stepNum: 1,
                        text: "With your group, answer each of the following questions",
                    },
                    {
                        stepNum: 2,
                        text: "1. Who is your target audience?  2. What is the problem that the product will address?  3. What is the primary goal of the product?  4. Identify and prioritize essential user stories (limit this to 3 or fewer)?",
                    },
                    {
                        stepNum: 3,
                        text: "Remember, your MVP should be the absolute minimum product that you need to pitch your idea to investors (or your classmates). Think bare essentials.",
                    },
                    {
                        stepNum: 4,
                        text: "As an example, the essential features of an instagram-like application might look like",
                    },
                    {
                        stepNum: 5,
                        text: "1. As a user, I want to post pictures so that I can share my life.  2. As a user, I want to be able to search for other users so that I can find their list of images.  3. As a user, I want to be able to view other peoples images so that I can keep up with whats happening in their lives. ",
                    },
                    {
                        stepNum: 6,
                        text: "Things like liking photos, sending photos to friends, making instagram stories, etc are cool, but they arent essential. They should not be part of the MVP.",
                    }
                ]
            },
            {
                name: "Stu-Issues",
                steps: [
                    {
                        stepNum: 1,
                        text: "Start by listing the tasks involved in completing each of your user stories.",
                    },
                    {
                        stepNum: 2,
                        text: "Once you have 1-5 tasks written up for each user story, open a GitHub issue for each task by clicking on `Issues` and the green `New Issue` button.",
                    },
                    {
                        stepNum: 3,
                        text: "Use the template below, replacing the user stories and acceptance criteria with your own.",
                    },
                    {
                        stepNum: 4,
                        text: "User StoryAs a user, I want to be able to input search queries so that I can search Stack Overflow when Im stuck.## Acceptance Criteria- [ ] index.html has a text input- [ ] index.html has a search button",
                    },
                    {
                        stepNum: 5,
                        text: "This is a critical task. Dont be afraid to ask instructional staff for help during this part. Make sure that each task is clear and everyone on the team understands how to implement each one. ",
                    },
                    {
                        stepNum: 6,
                        text: "User Story As a user I want to see my closest match, so that I can meet someone with whom I share interests.",
                    },
                    {
                        stepNum: 7,
                        text: "BAD TASK 1. On new member form submit, find and display best match.",
                    },
                    {
                        stepNum: 8,
                        text: "GOOD TASKS 1. build a form that captures user scores (1-5) to ten questions. 2. On submit, save the ten numerical answers to as an array.3. Compare the user array to each existing user array and find the closest match.4. Display the closest match to the user.",
                    }
                ]
            },
            {
                name: "Stu_kanban",
                steps: [
                    {
                        stepNum: 1,
                        text: "Use the `Projects` tab in GitHub to create a new project (use the automated kanban template).",
                    },
                    {
                        stepNum: 2,
                        text: "Add a new column called Icebox (You will need to exit the add card pop-up to access the add column area on the right side).",
                    },
                    {
                        stepNum: 3,
                        text: "Click + Add Cards and dragging each issue into the correct column, To Do or Icebox.",
                    },
                    {
                        stepNum: 4,
                        text: "If you have extra time, let each team member add some additional features to the Icebox. This is a great place to hold future enhancement ideas. Remember that each feature may need to be broken down into smaller tasks in the future before you open issues and start building them.  ",
                    }
                ]
            },
            {
                name: "Stu_Standup",
                steps: [
                    {
                        stepNum: 1,
                        text: "Before your first stand-up, each member of the team should go through the To Do column of the Project Board and self-assign at least one issue. ",
                    },
                    {
                        stepNum: 2,
                        text: "To do this, click on the issue and on the right choose self-assign.",
                    },
                    {
                        stepNum: 3,
                        text: "Everyone should have a clear idea of what they intend to accomplish today. Now its time for your first stand-up!",
                    },
                    {
                        stepNum: 4,
                        text: "Stand if you are able - yep, stand-ups take place standing; this helps to ensure that the meetings are short and to the point. ",
                    },
                    {
                        stepNum: 5,
                        text: "Each member of the team should say what they did yesterday, what they plan to do today, and what, if anything, is blocking their progress. ",
                    },
                    {
                        stepNum: 6,
                        text: "Stand-ups should be held daily from this point forward - yes even days that you dont have class (use Slack).",
                    }
                ]
            },
            {
                name: "Stu_Continuous-Deployment",
                steps: [
                    {
                        stepNum: 1,
                        text: "Navigate to your repos Settings page. Select master under the Branch protection rules dropdown. Then on the next screen, select the following options",
                    },
                    {
                        stepNum: 2,
                        text: "1. Protect this branch  2. Require pull request reviews before merging  3. Require review from Code Owners  4. Include administrators  ![Select Master](Images/01-Select-Master.png)  ![Select Options](Images/02-Select-Options.png)",
                    },
                    {
                        stepNum: 3,
                        text: "Part II Set Up Continuous Deployment",
                    },
                    {
                        stepNum: 4,
                        text: "Go back to your repos main Settings page and scroll down to the Github Pages section. Select master branch from the dropdown and save.",
                    },
                    {
                        stepNum: 5,
                        text: "You should be provided a URL for the deployed app if you scroll back down to this section. It may take a few minutes for the website to deploy. Ask an instructor or TA for assistance if you cant verify this worked.",
                    }
                ]
            }
        ]
    },
    {
        name: "09-Node-JS",
        moduleNum: 9,
        exercises: [
            {
                name: "Sriracha",
                steps: [
                    {
                        stepNum: 1,
                        text: "Create a file called `sriracha.js` somewhere on your computer.",
                    },
                    {
                        stepNum: 2,
                        text: "Inside the file use JavaScript to log the words Sriracha. Goes great on.... nothing. (or everything. You choose.)",
                    },
                    {
                        stepNum: 3,
                        text: "Then run the program using Node in your terminal/bash window.",
                    },
                    {
                        stepNum: 4,
                        text: "Confirm that it logged the text as you would expect.",
                    }
                ]
            },
            {
                name: "ParameterCheck",
                steps: [
                    {
                        stepNum: 1,
                        text: " reate a command line node application that takes in two parameters and outputs whether they are equal or not.",
                    },
                    {
                        stepNum: 2,
                        text: "Start by simply logging the value of each argument to console. Then use your usual JavaScript approach (recall that Node is still just JavaScript).",
                    }
                ]
            },
            {
                name: "Calculator",
                steps: [
                    {
                        stepNum: 1,
                        text: "Create a command-line node application that takes in parameters like this",
                    },
                    {
                        stepNum: 2,
                        text: "`node calculator.js add 1 2` ... and outputs 3   `node calculator.js subtract 5 2` ... and outputs 3   `node calculator.js multiply 3 2` ... and outputs 6   `node calculator.js divide 8 2` ... and outputs 4   `node calculator.js remainder 7 2`... and outputs 1",
                    },
                    {
                        stepNum: 3,
                        text: "Enable your calculator application to also handle the below cases",
                    },
                    {
                        stepNum: 4,
                        text: "`node calculator.js exp 7 2` ... and output 49 (7 squared)   `node calculator.js algebra 4x+2=10`... and output 2. (Hint Assume the algebra will always be in this exact form and will always be addition)",
                    }
                ]
            },
            {
                name: "Multiples",
                steps: [
                    {
                        stepNum: 1,
                        text: "Write a command line node application that takes in a number from the command line and finds the sum of all the multiples of 6 that are smaller than it. (ex input 13... output 6 + 12 = 18)",
                    },
                    {
                        stepNum: 2,
                        text: "Make the program such that it takes in two parameters The application now taking in the first number from the command and finds all the multiples of the second smaller than it.",
                    },
                    {
                        stepNum: 3,
                        text: "Give it a set of default values in case the user doesnt provide parameters.",
                    }
                ]
            },
            {
                name: "Bands",
                steps: [
                    {
                        stepNum: 1,
                        text: "Make a JavaScript file called `bands.js` that exports an object of music genres and bands like this  ```javascript  {    punk Green Day,    rap Run DMC,    classic Led Zeppelin  }  ```",
                    },
                    {
                        stepNum: 2,
                        text: "Require this JavaScript file in `run.js`, loop over the values, and console.log them.",
                    },
                    {
                        stepNum: 3,
                        text: "Make sure the program runs properly when entered into the terminal like this  ```bash  node run.js  ```",
                    },
                    {
                        stepNum: 4,
                        text: "And that the output looks something like the below  ```bash  A punk band is Green Day  A rap band is Run DMC  A classic band is Led Zeppelin  ```",
                    },
                    {
                        stepNum: 5,
                        text: "Make it so that your program takes in a parameter like classic and then outputs the associated band with it. In this case Led Zeppelin.",
                    },
                    {
                        stepNum: 6,
                        text: "If no parameter is passed then loop over and output all of them like asked above.",
                    }
                ]
            },
            {
                name: "CommandLineArg",
                steps: [
                    {
                        stepNum: 1,
                        text: "Starting from a blank JavaScript file, create a Node application that takes in two command line arguments and checks if they are equal. If the two numbers are equal then output true. Otherwise output false.",
                    },
                    {
                        stepNum: 2,
                        text: "`console.log(process.argv)` as a starting point if you are completely lost.",
                    },
                    {
                        stepNum: 3,
                        text: "Check if the two numbers are both multiples of 7. Again output true if they are and output false if they are not.",
                    }
                ]
            },
            {
                name: "BestThingsEver",
                steps: [
                    {
                        stepNum: 1,
                        text: "Create a Node application that reads the `best_things_ever.txt` file, parses the comma separated elements, and ultimately console logs each element in the file on separate lines.",
                    },
                    {
                        stepNum: 2,
                        text: "Your final output should look something like this",
                    },
                    {
                        stepNum: 3,
                        text: "```  lazy boy recliner    massage    meditation    hot shower    cheese fondue    hot coffee with cashew milk    kitten falling asleep on my lap  ```",
                    },
                    {
                        stepNum: 4,
                        text: "If you are struggling to figure out how to loop your way through the text, look into the `.split()` method. This could make your life a whole lot easier.",
                    }
                ]
            },
            {
                name: "BankJs",
                steps: [
                    {
                        stepNum: 1,
                        text: "Starting from scratch, build a Node application called `bank.js` which takes in user inputs via the command line to register bank transactions.",
                    },
                    {
                        stepNum: 2,
                        text: "The transactions possible are",
                    },
                    {
                        stepNum: 3,
                        text: "`total` - this should tally up all of the money in the bank balance and display it for the user.",
                    },
                    {
                        stepNum: 4,
                        text: "`deposit <number>` - this should add a positive amount to the bank balance. (No need to display the total here)",
                    },
                    {
                        stepNum: 5,
                        text: "`withdraw <number>` - this should add a negative amount to the bank balance. (No need to display the total here)",
                    },
                    {
                        stepNum: 6,
                        text: "`lotto` - this should subtract an amount from the bank balance, but if a random number is hit it should add back a larger amount into the bank balance.",
                    },
                    {
                        stepNum: 7,
                        text: "For all deposits, withdrawals, or lotto purchases the transaction should be registered in the `bank.txt` file.",
                    },
                    {
                        stepNum: 8,
                        text: "Consider making a series of if-else or switch-case statements to identify the type of transaction and the amount involved (if relevant).",
                    },
                    {
                        stepNum: 9,
                        text: "If you finish early, consider finding creative ways to expand the functionality. Perhaps add a login, perhaps always provide the total, perhaps add a warning if the user tries to withdraw more than they hold, etc.",
                    }
                ]
            },
            {
                name: "OMDB_Students",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using the code sent to you earlier as a reference and using the code provided to you as a starter, create a Node application which takes in a movie name as a command line argument then uses the OMDB API to retrieve and return the release date to the console.",
                    },
                    {
                        stepNum: 2,
                        text: "For this activity you have two options",
                    },
                    {
                        stepNum: 3,
                        text: "Easier Require that the user provide a movie with a single word in the title (ex Cinderella)",
                    },
                    {
                        stepNum: 4,
                        text: "Harder Allow the user to provide a movie with as many words as possible (ex Forrest Gump).",
                    },
                    {
                        stepNum: 5,
                        text: "Start by figuring out what your API URL should be then use the starter code as a guide.",
                    },
                    {
                        stepNum: 6,
                        text: "Remember to `npm install request` or else your code will not work no matter what",
                    }
                ]
            },
            {
                name: "CommandSort",
                steps: [
                    {
                        stepNum: 1,
                        text: "Starting from a blank file, create a Node-based command-line application that takes in a series of numbers from the user and returns the numbers sorted in ascending order.",
                    },
                    {
                        stepNum: 2,
                        text: "NOTE Feel free to use Stack Overflow or Google to find the code for sorting integers numerically.",
                    }
                ]
            },
            {
                name: "GeoCodeNPM",
                steps: [
                    {
                        stepNum: 1,
                        text: "Create a Node application which makes use of the geocoder NPM package to obtain detailed geocoding information about a location.",
                    },
                    {
                        stepNum: 2,
                        text: "Then `console.log` the geocoding information to display in your terminal.",
                    },
                    {
                        stepNum: 3,
                        text: "You can choose to make one of two assumptions when completing this application.",
                    },
                    {
                        stepNum: 4,
                        text: "Easier The user will always provide a location in the following format City, State (example Atlanta, GA, Houston, TX).",
                    },
                    {
                        stepNum: 5,
                        text: "Harder The user can provide a location in any format. In fact, they can even provide a landmark instead of an address. (151 Sip Ave, Jersey City NJ, The Eiffel Tower, etc.)",
                    },
                    {
                        stepNum: 6,
                        text: "Remember to log the output using `JSON.stringify` in a pretty-print format.",
                    }
                ]
            },
            {
                name: "PackageJSON",
                steps: [
                    {
                        stepNum: 1,
                        text: "Take a moment to run the `weatherdest.js` application. (Try to figure out what it takes to run on your own!)",
                    },
                    {
                        stepNum: 2,
                        text: "Then, with a partner, spend a few moments answering the following questions",
                    },
                    {
                        stepNum: 3,
                        text: "What does the code do?",
                    },
                    {
                        stepNum: 4,
                        text: "How does it work at a general level?",
                    },
                    {
                        stepNum: 5,
                        text: "How does it work at a line level?",
                    }
                ]
            },
            {
                name: "Inquirer_Intro",
                steps: [
                    {
                        stepNum: 1,
                        text: "Spend a few moments studying the code with the person next to you. Be sure each of you understand",
                    },
                    {
                        stepNum: 2,
                        text: "How to install and incorporate the `inquirer` package.",
                    },
                    {
                        stepNum: 3,
                        text: "How to create the variety of prompts offered by the package.",
                    },
                    {
                        stepNum: 4,
                        text: "The significance of the `.then` function and the variable created (in this case `user`).",
                    }
                ]
            },
            {
                name: "InquirerUsers",
                steps: [
                    {
                        stepNum: 1,
                        text: "Create a basic command line Node application using the inquirer package.",
                    },
                    {
                        stepNum: 2,
                        text: "Your application should ask the user any five questions of your choosing.",
                    },
                    {
                        stepNum: 3,
                        text: "The question set should include at least one",
                    },
                    {
                        stepNum: 4,
                        text: "Basic input,   Password   List,   Checkbox,   Confirm",
                    },
                    {
                        stepNum: 5,
                        text: "Then if a users password matches a pre-defined password, re-display the data back to the user with some text.",
                    },
                    {
                        stepNum: 6,
                        text: "Hints See the inquirer GitHub documentation examples page if you need help. Remember to get creative with your code!",
                    }
                ]
            },
            {
                name: "InquirerGeocode",
                steps: [
                    {
                        stepNum: 1,
                        text: "Working in pairs, convert the geocoding code from earlier today so that it uses inquirer.js instead of `process.argv` to handle the intake of user inputs.",
                    },
                    {
                        stepNum: 2,
                        text: "Make sure your new code provides the exact same output as it did with `process.argv`.",
                    },
                    {
                        stepNum: 3,
                        text: "Dont forget to create your `package.json` file and save the correct packages to it. You should not need to change _that much_ code.",
                    },
                    {
                        stepNum: 4,
                        text: "If you finish early, grab a TAs attention so that they can slack out the bonus activity (`29-ZombieChallenge`).",
                    }
                ]
            },
            {
                name: "NodeDebug",
                steps: [
                    {
                        stepNum: 1,
                        text: "Install the Node package `inspect-process` globally on your machine by running `npm install -g inspect-process`.",
                    },
                    {
                        stepNum: 2,
                        text: "Then open any Node program weve worked on to date and add the keyword `debugger;` in various places.",
                    },
                    {
                        stepNum: 3,
                        text: "Then run the program by typing `inspect <NAME OF PROGRAM>`.",
                    },
                    {
                        stepNum: 4,
                        text: "Experiment with the resulting inspect-process interface to step through the code.",
                    },
                    {
                        stepNum: 5,
                        text: "Notes Debugging Node.js applications can get a bit complex. If it works for you... Great! Dont sweat it if the debugger doesnt work right out of the box. You can always just `console.log` when debugging your Node applications.",
                    },
                    {
                        stepNum: 6,
                        text: "The V8 inspector integration for Node.js is an experimental feature that is still a work in process. Check out the following documentation from the Node.js website for further reading [V8 Inspector Integration for Node.js](https//nodejs.org/api/debugger.html#debugger_v8_inspector_integration_for_node_js)",
                    },
                    {
                        stepNum: 7,
                        text: "Hints Documentation for the `inspect` package can be found here [NPM Package inspect-process](https//www.npmjs.com/package/inspect-process)",
                    }
                ]
            },
            {
                name: "ZombieChallenge",
                steps: [
                    {
                        stepNum: 1,
                        text: "Follow the instructions in `zombiegame.js` to create a turn-based Zombie RPG game. You can also reference the video sent to you to have a clearer idea of what the final product should look like.",
                    }
                ]
            },
        ]
    },
    {
        name: "10-JS-Constructors",
        moduleNum: 10,
        exercises: [
            {
                name: "RainingCatsAndDogs",
                steps: [
                    {
                        stepNum: 1,
                        text: "Make a dogs object with three keys...",
                    },
                    {
                        stepNum: 2,
                        text: "First key called raining with a value of true",
                    },
                    {
                        stepNum: 3,
                        text: "Second key called noise with a value of Woof!",
                    },
                    {
                        stepNum: 4,
                        text: "Third key called makeNoise which contains a function which console.logs the noise to the screen if it is raining dogs",
                    },
                    {
                        stepNum: 5,
                        text: "Make a cats object with three keys...",
                    },
                    {
                        stepNum: 6,
                        text: "First key called raining with a value of false",
                    },
                    {
                        stepNum: 7,
                        text: "Second key called noise with a value of Meow!",
                    },
                    {
                        stepNum: 8,
                        text: "Third key called makeNoise which contains a function which console.logs the noise to the screen if it is raining cats",
                    },
                    {
                        stepNum: 9,
                        text: "Make the dog bark",
                    },
                    {
                        stepNum: 10,
                        text: "Make the cat meow",
                    }
                ]
            },
            {
                name: "CharacterCreate",
                steps: [
                    {
                        stepNum: 1,
                        text: "Create a Character Object",
                    }
                ]
            },
            {
                name: "Tamagotchi",
                steps: [
                    {
                        stepNum: 1,
                        text: "Create a constructor called DigitalPal which will create four properties and four methods...",
                    },
                    {
                        stepNum: 2,
                        text: "The first property is hungry and it initially starts out as false   The second property is sleepy and it initially starts out as false   The third property is bored and it initially starts out as true   The fourth property is age and it initially starts out at 0",
                    },
                    {
                        stepNum: 3,
                        text: "The first method is feed() - If hungry is true, print That was yummy!, set hungry to false, and then set sleepy to true. If hungry is false, print No thanks! Im full.",
                    },
                    {
                        stepNum: 4,
                        text: "The second method is sleep() - If sleepy is true, print `Zzzzzzzz`, set sleepy to false, then set bored to true, and then run increaseAge(). If sleepy is false, print No way! Im not tired.",
                    },
                    {
                        stepNum: 5,
                        text: "The third method is play() - If bored is true, print Yay! Lets play!, set bored to false, and then set hungry to true. If bored is false, print Not right now. Later?",
                    },
                    {
                        stepNum: 6,
                        text: "The fourth method is increaseAge() - This method is called by the sleep() method when the DigitalPal goes to sleep and increases the DigitalPals age by one while also printing Happy Birthday to me! I am +age+ old!",
                    },
                    {
                        stepNum: 7,
                        text: "Create a variable named dog that is set to a new DigitalPal before adding the following unique properties/methods to it...",
                    },
                    {
                        stepNum: 8,
                        text: "outside - Initially set to false   bark() - Prints out Woof! Woof! when run   goOutside() - If outside is false, prints Yay! I love the outdoors!, sets outside to true, and runs bark(). If outside is true, prints Were already outside though...   goInside() - If outside is true, prints Do we have to? Fine... and sets outside to false. If outside is false, prints Im already inside...",
                    },
                    {
                        stepNum: 9,
                        text: "Make a second variable named cat that is set to a new DigitalPal and add the following methods to it",
                    },
                    {
                        stepNum: 10,
                        text: "houseCondition - Initially set to 100... But not for long...   meow() - prints out Meow! Meow! when run   destroyFurniture() - Decreases houseCondition by 10 and prints MUAHAHAHAHA! TAKE THAT FURNITURE! to the screen. Also sets bored to false and sleepy to true. If houseCondition is equal to 0, then this should not run anymore.   buyNewFurniture() - Increases houseCondition by 50 and prints Are you sure about that? to the screen.",
                    }
                ]
            },
            {
                name: "Programmers",
                steps: [
                    {
                        stepNum: 1,
                        text: "In this activity, we are going to create a constructor function called Programmer which can be used to create objects containing information on various programmers.",
                    },
                    {
                        stepNum: 2,
                        text: "Your Programmer constructor should be able to take in the following information...",
                    },
                    {
                        stepNum: 3,
                        text: "The programmers name",
                    },
                    {
                        stepNum: 4,
                        text: "Their position/job title",
                    },
                    {
                        stepNum: 5,
                        text: "How old they are",
                    },
                    {
                        stepNum: 6,
                        text: "Favorite programming language",
                    },
                    {
                        stepNum: 7,
                        text: "Now create a method for the constructor that would print all of the information contained within an object to the console.",
                    },
                    {
                        stepNum: 8,
                        text: "Finally, create a Programmer object and call the method to print its contents",
                    }
                ]
            },
            {
                name: "TeamManager",
                steps: [
                    {
                        stepNum: 1,
                        text: "Over the course of this assignment you are going to put together a function which uses constructors and user input to create and manage a team of players.",
                    },
                    {
                        stepNum: 2,
                        text: "Start out by creating a constructor function called Player with the following properties and methods...",
                    },
                    {
                        stepNum: 3,
                        text: "`name` Property which contains the players name   `position` Property which holds the players position   `offense` Property which is a value between 1 and 10 to show how good this player is on offense   `defense` Property which is a value between 1 and 10 to show how good this player is on defense   `goodGame` Method which increases either the players offense or defense property based upon a coinflip.   `badGame` Method which decreases either the players offense or defense property based upon a coinflip.   `printStats` Method which prints all of the players properties to the screen",
                    },
                    {
                        stepNum: 4,
                        text: "Now create a program which allows the user to create 3 unique players; 2 starters and a sub. It should take as user input the name, position, offense, and defense of each player.",
                    },
                    {
                        stepNum: 5,
                        text: "Once all of the players have been created, print their stats.",
                    },
                    {
                        stepNum: 6,
                        text: "Once your code is functioning properly, move on to create a function called playGame which will be run after all of the players have been created and will do the following",
                    },
                    {
                        stepNum: 7,
                        text: "Run 5 times. Each time the function runs     Two random numbers between 1 and 20 are rolled and compared against the starters offensive and defensive stats       If the first number is lower than the sum of the teams offensive stat, add one point to the teams score.       If the second number is higher than the sum of the teams defensive stat, remove one point from the teams score.",
                    },
                    {
                        stepNum: 8,
                        text: "After the score has been changed, prompt the user to allow them to substitute 1 player from within the starters array with the player from within the subs array.",
                    },
                    {
                        stepNum: 9,
                        text: "After the game has finished (been run 5 times)     If the score is positive, run `goodGame` for all of the players currently within the starters array.     If the score is negative, run `badGame` for all of the players currently within the starters array.     If the score is equal to zero, do nothing with the starters.     Give the user a message about if they won, and the status of their starters.     After printing the results, ask the user if they would like to play again.       Run `playGame` from the start once more if they do.       End the program if they dont.",
                    },
                    {
                        stepNum: 10,
                        text: "HINT Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect. It has been a while since we have worked with random numbers explicitly. If you are having troubles, look up Math.random on Google and you should find some resources to help.",
                    }
                ]
            },
            {
                name: "Classrooms",
                steps: [
                    {
                        stepNum: 1,
                        text: "In this activity we are going to make two constructors in two different files in which one constructor calls upon the other within it.",
                    },
                    {
                        stepNum: 2,
                        text: "The first constructor function is called Student and has the following properties within it...",
                    },
                    {
                        stepNum: 3,
                        text: "Name of the student   Favorite subject   Current GPA",
                    },
                    {
                        stepNum: 4,
                        text: "The second constructor function is called Class and has the following properties within it.",
                    },
                    {
                        stepNum: 5,
                        text: "An array of students within the class   Number of students in the class   Name of the professor   Room number   The Student constructor function from above which adds a new student to the class",
                    },
                    {
                        stepNum: 6,
                        text: "BONUS: Make it so that that your application can take in user input to add new classes and new students to those classes.",
                    },
                    {
                        stepNum: 7,
                        text: "HINT: For the bonus, make sure that the number of students in the class is updated as you add new students",
                    }
                ]
            },
            {
                name: "Stu-Architecture",
                steps: [
                    {
                        stepNum: 1,
                        text: "As a best practice, sketch out the architecture of your application _before_ you start writing code.",
                    },
                    {
                        stepNum: 2,
                        text: "For this exercise, start by describing what your application does. Do this in a bullet list.",
                    },
                    {
                        stepNum: 3,
                        text: "Next, decide how you might divvy up these responsibilities. Would you write a single module that handles all of them? Would you write one module for each bullet list? Something else? Be sure to justify your decision.",
                    },
                    {
                        stepNum: 4,
                        text: "Finally, draw a diagram describing the flow of your application. Dont worry about being _too_ precise here, but include enough detail where you can use it as a guide to explain it to someone else. You can do this either by using pencil and paper or flowchart generation software like [draw.io](https//www.draw.io/).",
                    },
                    {
                        stepNum: 5,
                        text: "Take a moment to study the GIF below if stuck. Remember that this application also prints the logged data to a file named `log.txt`.",
                    }
                ]
            },
            {
                name: "Stu_CLI",
                steps: [
                    {
                        stepNum: 1,
                        text: "When the completed `cli.js` file is run with node, it should be able to handle command line arguments similar to those below  ```  // Search for The Andy Griffith Show  node cli show The Andy Griffith Show  ```  and  ```  // Search for the actor Andy Griffith  node cli actor Andy Griffith  ```",
                    },
                    {
                        stepNum: 2,
                        text: "In these examples the cli expects input in the following format  ```  node cli <show-or-actor> <actor-or-show-name>  ```",
                    },
                    {
                        stepNum: 3,
                        text: "To begin, open [cli.js](Unsolved/cli.js) and write code to store the `<show-or-actor>` command line argument in a variable named `search`.",
                    },
                    {
                        stepNum: 4,
                        text: "Store the `<actor-or-show-name>` command line argument in a variable named `term`. Keep in mind that this argument may contain spaces so it may span multiple indexes of `process.argv`. Check out the [Array Slice Method](https//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) to achieve this.",
                    },
                    {
                        stepNum: 5,
                        text: "Then write an if/else statement to print to the console whether a show or actor is being searched for.",
                    },
                    {
                        stepNum: 6,
                        text: "We will add some functionality to actually perform the API calls in the next activity.",
                    },
                    {
                        stepNum: 7,
                        text: "Bonus: Write logic to set up a default search type and default term if either are missing.",
                    }
                ]
            },
            {
                name: "Stu_FindShow",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open the `tv.js` file. This file contains a constructor function that will be used to create a TV object capable of searching the TV Maze API for shows and actors. ",
                    },
                    {
                        stepNum: 2,
                        text: "Install the `request` package by running `npm install request` in your terminal. We will use the `request` module to make AJAX requests to the TV Maze API. Require the `request` package and the built-in `fs` package at the top of the `tv.js` file.",
                    },
                    {
                        stepNum: 3,
                        text: "Inside of the `TV` constructor functions `findShow` method, use the `request` package to hit the TV Maze API for the `URL` string. ",
                    },
                    {
                        stepNum: 4,
                        text: "Once you have the response body of the AJAX request, use `JSON.parse` to convert it to JSON (it comes back as a string).",
                    },
                    {
                        stepNum: 5,
                        text: "After getting the JSON response from the AJAX request, create a string containing the following information from the returned show data",
                    },
                    {
                        stepNum: 6,
                        text: "The name of the show   The shows genre(s)   The shows average rating   The shows network name   The shows summary",
                    },
                    {
                        stepNum: 7,
                        text: "Save this string to the `log.txt` file using the `fs.appendFile` method. If the file does not already exist, `fs.appendFile` will create it.",
                    },
                    {
                        stepNum: 8,
                        text: "After saving the data to the `log.txt` file, print this information to the console.",
                    },
                    {
                        stepNum: 9,
                        text: "Verify your code works by running the cli file and passing in the name of a TV show, e.g. `node cli show Scrubs`. This should print the specified information to the console and save it to the `log.txt` file.",
                    },
                    {
                        stepNum: 10,
                        text: "Hints: Check out some sample output from the TV Maze single show search API <http//api.tvmaze.com/singlesearch/shows?q=scrubs>. You would have used the `request` package for the Liri HW assignment. Refer back to this if you need a refresher on how to use the package. Check out the selected answer for the question [how to append a file in node?](https//stackoverflow.com/questions/3459476/how-to-append-to-a-file-in-node)",
                    }
                ]
            },
            {
                name: "Stu_FinalTvApp",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open [tv.js](Unsolved/tv.js) and update the constructor functions `findActor` method. It should use the `request` package to search the TV Maze API using the provided URL.",
                    },
                    {
                        stepNum: 2,
                        text: "Once the data has been retrieved from the API, parse it as JSON (it should be a string initially) and grab only the first result (it should be an array of JSON objects).",
                    },
                    {
                        stepNum: 3,
                        text: "Save the following information to the `log.txt` file using the `fs.appendFile` method",
                    },
                    {
                        stepNum: 4,
                        text: "The actors name   The actors birthday   The actors gender   The actors country   The actors TV Maze URL",
                    },
                    {
                        stepNum: 5,
                        text: "Once the data has been saved to the `log.txt` file, print it to the console.",
                    },
                    {
                        stepNum: 6,
                        text: "Test that your code works properly by running the `cli.js` file with arguments. e.g. `node cli actor Jennifer Aniston`.",
                    },
                    {
                        stepNum: 7,
                        text: "Hints Implementing the `findActor` method should be very similar to the `findShow` method, refer to this if stuck. Check out this sample output from the TV Maze Actors API <http//api.tvmaze.com/search/people?q=jennifer%20aniston>",
                    }
                ]
            },
            {
                name: "Callbacks",
                steps: [
                    {
                        stepNum: 1,
                        text: "Write a function that accepts a string and a function as arguments. It should log the string, and then run the function.",
                    },
                    {
                        stepNum: 2,
                        text: "Write a function that accepts a boolean value and a function as arguments. It should run the function if and only if the boolean argument is true.",
                    },
                    {
                        stepNum: 3,
                        text: "Write a function that accepts a function (F) and a value (V), and returns a function that returns the result of running F on V. This sounds tricky, but its easier than it sounds\u2014just take it step by step!",
                    },
                    {
                        stepNum: 4,
                        text: "Finally, write a short message to a file using `fs.writeFile`. Does this function use callbacks? If so, identify them.",
                    }
                ]
            }
        ]
    },
    {
        name: "11-mySQL",
        moduleNum: 11,
        exercises: [
            {
                name: "animalsDB",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open MySQL Workbench",
                    },
                    {
                        stepNum: 2,
                        text: "Take the contents of `animalsDB.sql` and paste it into your MySQL Workbench",
                    },
                    {
                        stepNum: 3,
                        text: "Using MySQL Workbench examine the newly created `animals_db`.",
                    }
                ]
            },
            {
                name: "favoriteDB",
                steps: [
                    {
                        stepNum: 1,
                        text: "For the table favorite_foods",
                    },
                    {
                        stepNum: 2,
                        text: "Create the column food which can take in a 50 character string and cannot be NULL,  Create the column score which can take in an integer",
                    },
                    {
                        stepNum: 3,
                        text: "For the table favorite_songs.",
                    },
                    {
                        stepNum: 4,
                        text: "Create the column song which can take in a 100 character string and cannot be NULL,   Create the column artist which can take in a 50 character string,   Create the column score which can take in an integer",
                    },
                    {
                        stepNum: 5,
                        text: "For the table favorite_movies.",
                    },
                    {
                        stepNum: 6,
                        text: "Create a numeric column called id which automatically increments and cannot be null,   Create the column film which can take in a string and cannot be NULL,   Create the column five_times which can take in a boolean,   create the column score which can take in an integer,   Set the primary key of the table to id",
                    },
                    {
                        stepNum: 7,
                        text: "BONUS: Go online and look into how one might go about adding data into a table.",
                    }
                ]
            },
            {
                name: "ProgrammingDB",
                steps: [
                    {
                        stepNum: 1,
                        text: "Make a new database called programming_db and switch into it for this activity",
                    },
                    {
                        stepNum: 2,
                        text: "Create a table called programming_languages which includes a primary key named id which will automatically increment which each new row created, a string column called languages, and a numeric column called rating.",
                    },
                    {
                        stepNum: 3,
                        text: "Insert some data into the table and then modify the data using the id column.",
                    },
                    {
                        stepNum: 4,
                        text: "BONUS: Study up on how to add columns to a table and then create a boolean column called mastered which has a default value of true",
                    },
                    {
                        stepNum: 5,
                        text: "BONUS: Start looking into the concept of joins in SQL",
                    }
                ]
            },
            {
                name: "PlayListRead",
                steps: [
                    {
                        stepNum: 1,
                        text: "We are going to print playlists to the Git Bash console based upon the genre or artist.",
                    },
                    {
                        stepNum: 2,
                        text: "First create code that prints all songs within your database to the terminal.",
                    },
                    {
                        stepNum: 3,
                        text: "Now create code that prints songs of a specific genre/artist to the terminal.",
                    },
                    {
                        stepNum: 4,
                        text: "If you dont have many songs in your database at this point in time, take this moment to add some more to it. Try to give yourself a variety of songs to work with.",
                    },
                    {
                        stepNum: 5,
                        text: "HINT Remember that you can call specific data using SQL commands we went over last class. If you are having trouble, make sure to look into SQL commands once more.",
                    },
                    {
                        stepNum: 6,
                        text: "BONUS Use placeholder values or string concatenation to build a MySQL query which allows you to change pieces of the query on the fly (e.g. using a variable to build the `WHERE` clause, instead of a static string).",
                    },
                    {
                        stepNum: 7,
                        text: "There are a couple different ways to accomplish this task, but the most common one can be found within the [documentation for the MySQL package](https//github.com/mysqljs/mysql#performing-queries).",
                    }
                ]
            },
            {
                name: "IceCreamCrud",
                steps: [
                    {
                        stepNum: 1,
                        text: "Its time to start making our playlist application a little more functional through including all four C.R.U.D elements within it.",
                    },
                    {
                        stepNum: 2,
                        text: "Add in some pieces of code that CREATE, UPDATE, and DELETE specific pieces of data from your MySQL database. Make sure to include a READ statement at the end as well to ensure that the changes you are making are working properly.",
                    },
                    {
                        stepNum: 3,
                        text: "BONUS: After successfully adding CRUD to your application, its time to test your mettle and see if you can make it so this app is more dynamic. Add the ability for users to dynamically input their own data into the database using the Inquirer NPM package.",
                    },
                    {
                        stepNum: 4,
                        text: "HINT: Recall that you can create MySQL queries which include variables using question marks. Proper usage of this will help you quite a bit.",
                    },
                    {
                        stepNum: 5,
                        text: "HINT: Remember to take into account the scope of Prompt/Promptly when putting your application together.",
                    }
                ]
            },
            {
                name: "GreatBay",
                steps: [
                    {
                        stepNum: 1,
                        text: "Within your groups you are going to be creating a Node application called Great-Bay which allows users to create and bid on assorted items, tasks, jobs, or projects. The basic application is fairly simple Upon loading up the program, the user is prompted on whether they would like to POST AN ITEM or BID ON AN ITEM",
                    },
                    {
                        stepNum: 2,
                        text: "If the user selects POST AN ITEM they are prompted for an assortment of information regarding the item and then that information is added to the database so that others can bid on it. If the user selects BID ON AN ITEM they are shown a list of all available items and then are prompted to select what they would like to bid on. The console then asks them how much they would like to bid, and their bid is compared to the previous highest bid. If their bid is higher, inform the user of their success and replace the previous bid with the new one. If their bid is lower (or equal), inform the user of their failure and boot them back to the selection screen.",
                    },
                    {
                        stepNum: 3,
                        text: "Once your group has put together the basic application, its time to test your collective skills on some additional functionality, or addons. Remember to take into consideration the amount of time you have been given when choosing what addons you would like to tackle.",
                    },
                    {
                        stepNum: 4,
                        text: "Create a sign up and login system that prompts users for a username and password upon loading up the app. Do not worry about setting up a truly secure database if you choose to tackle this addon. Just worry about building working sign up and login features.",
                    },
                    {
                        stepNum: 5,
                        text: "Create a system on the POST AN ITEM which allows users to look at the auctions they have created. On this screen they can add new auctions, modify previous auctions, or close bidding on an auction.",
                    },
                    {
                        stepNum: 6,
                        text: "Create a system which allows users to view all of the auctions of which they are the leading bidder.",
                    },
                    {
                        stepNum: 7,
                        text: "Create a third option on the main screen which allows administrators to modify the database as they see fit.",
                    },
                    {
                        stepNum: 8,
                        text: "Create visually appealing tables. This means making dynamic console code and it is a lot harder than it might seem at first so do not think this one is so simple.",
                    },
                    {
                        stepNum: 9,
                        text: "Create a search function that allows users to look through the database of available auctions to find those that share the specified keyword or username.",
                    },
                    {
                        stepNum: 10,
                        text: "Get creative! There are a lot of addons to this app which you could create so feel free to work with your group to come up with something not listed above!",
                    }
                ]
            },
            {
                name: "popQuiz",
                steps: [
                    {
                        stepNum: 1,
                        text: "Connect to MySQL server ",
                    },
                    {
                        stepNum: 2,
                        text: "Create a new Database",
                    },
                    {
                        stepNum: 3,
                        text: "Create a new table with a primary key that auto-increments, and a text field",
                    },
                    {
                        stepNum: 4,
                        text: "Insert 3 Rows into your new table",
                    },
                    {
                        stepNum: 5,
                        text: "Create a package.json",
                    },
                    {
                        stepNum: 6,
                        text: "Require `mysql`",
                    },
                    {
                        stepNum: 7,
                        text: "Connect to MySQL",
                    },
                    {
                        stepNum: 8,
                        text: "Print the 3 rows of data to the `console`",
                    }
                ]
            },
            {
                name: "top5000Schema",
                steps: [
                    {
                        stepNum: 1,
                        text: "Its time to test your skills in creating databases and tables as you create a database called `top_songsDB` which will eventually house all of the music data contained within `TopSongs.csv`",
                    },
                    {
                        stepNum: 2,
                        text: "Within your database create a table called `Top5000` and create columns capable of holding all of the data contained within `TopSongs.csv` properly.",
                    },
                    {
                        stepNum: 3,
                        text: "All of your code should be written and saved within a filed called `schema.sql` so that you can use this same code later should the need ever arise",
                    },
                    {
                        stepNum: 4,
                        text: "HINT Try to have your tables columns match those within the CSV file as closely as possible or else you may find the next step in this assignment more difficult than it would otherwise be",
                    },
                    {
                        stepNum: 5,
                        text: "BONUS: Create a `seeds.sql` file that contains the data for the first three songs found within `TopSongs.csv`",
                    },
                    {
                        stepNum: 6,
                        text: "BONUS: Look into how MySQL Workbench can import and export data files. What file types does it accept? How does it convert the data?",
                    }
                ]
            },
            {
                name: "top5000Code",
                steps: [
                    {
                        stepNum: 1,
                        text: "Now that we have learned how to import big collections of data into a server, it is time to put this new knowledge to the test by importing all of the data contained within `TopSongs.csv` into our database.",
                    },
                    {
                        stepNum: 2,
                        text: "HINT Remember, bigger datasets require more time to import properly, so be patient",
                    },
                    {
                        stepNum: 3,
                        text: "HINT If you feel that the import process is taking far too long, feel free to use `Top1000Songs.csv` instead. We would highly recommend working with the bigger dataset if you can, however.",
                    },
                    {
                        stepNum: 4,
                        text: "HINT Take the downtime you have been given to start on the next part of the activity",
                    },
                    {
                        stepNum: 5,
                        text: "With all of your data successfully imported into the database, begin working on a Node console application which will allow you to collect more specialized pieces of data. For example.",
                    },
                    {
                        stepNum: 6,
                        text: "A query which returns all data for songs sung by a specific artist",
                    },
                    {
                        stepNum: 7,
                        text: "A query which returns all artists who appear within the top 5000 more than once",
                    },
                    {
                        stepNum: 8,
                        text: "A query which returns all data contained within a specific range",
                    },
                    {
                        stepNum: 9,
                        text: "A query which searches for a specific song in the top 5000 and returns the data for it",
                    },
                    {
                        stepNum: 10,
                        text: "HINT There are some MySQL queries which could make some of these tasks even easier to accomplish. Feel free to look at MySQLs documentation to find some of them.",
                    }
                ]
            },
            {
                name: "TwoTables",
                steps: [
                    {
                        stepNum: 1,
                        text: "When dealing with big databases, it is very likely that you will have to work with two or more datasets that are related, but which have some degree of separation between them. In this case we have a table of the top 5000 songs and a table of the top\"\"albums.",
                    },
                    {
                        stepNum: 2,
                        text: "Emphasize the relationship between databases and tables Tables live in databases\u2014i.e., databases consist of tables.",
                    },
                    {
                        stepNum: 3,
                        text: "A table is a set of rows and columns. This set of rows and columns itself is _not_ a database. We might, however, have a database that consists of only a single table, but there remains a conceptual distinction between the database and the table.",
                    },
                    {
                        stepNum: 4,
                        text: "It is your task to take these two large sets of data and come up with a method to join them together in order to figure out if a given artists song and album made it into the charts at the time of their release.",
                    },
                    {
                        stepNum: 5,
                        text: "HINT This can be done in a couple different ways using external data as well, but you do have all of the data you need within your database to find the correlations. Give your methods some though before having to rely upon external info.",
                    },
                    {
                        stepNum: 6,
                        text: "HINT Remember that MySQL has the ability to combine two or more tables together so long as they share equivalent data. What data is similar between the two lists?",
                    },
                    {
                        stepNum: 7,
                        text: "Once you have managed to successfully bring the two datasets together, start making queries like those you made earlier to this new table as well.",
                    }
                ]
            }
        ]
    },
    {
        name: "12-Express",
        moduleNum: 12,
        exercises: [
            {
                name: "Two-Servers",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using the previous example as a guide, create an app that has two web servers.",
                    },
                    {
                        stepNum: 2,
                        text: "One that listens on port 7000 and one that listens on port 7500.",
                    },
                    {
                        stepNum: 3,
                        text: "The one listening on port 7000 will always tell the user something good about themselves.",
                    },
                    {
                        stepNum: 4,
                        text: "The one listening on 7500 will always tell the user something bad about themselves.",
                    },
                    {
                        stepNum: 5,
                        text: "Make sure you create a Github repo and commit this code!",
                    },
                    {
                        stepNum: 6,
                        text: "Look for other ways to expand what your server can do. As possibilities",
                    },
                    {
                        stepNum: 7,
                        text: "Generate the good/bad phrase randomly from a list of predefined phrases",
                    },
                    {
                        stepNum: 8,
                        text: "Use the `twitter` package inside the response to also return a random tweet",
                    }
                ]
            },
            {
                name: "Portfolio",
                steps: [
                    {
                        stepNum: 1,
                        text: "Look over Server.js",
                    }
                ]
            },
            {
                name: "Serving HTML",
                steps: [
                    {
                        stepNum: 1,
                        text: "Look over Server.js",
                    }
                ]
            },
            {
                name: "Serve Favorites",
                steps: [
                    {
                        stepNum: 1,
                        text: "Create a website with four routes",
                    },
                    {
                        stepNum: 2,
                        text: "Home",
                    },
                    {
                        stepNum: 3,
                        text: "Favorite Foods",
                    },
                    {
                        stepNum: 4,
                        text: "Favorite Movies",
                    },
                    {
                        stepNum: 5,
                        text: "Favorite CSS Frameworks",
                    },
                    {
                        stepNum: 6,
                        text: "Each route should be triggered by a different URL.",
                    },
                    {
                        stepNum: 7,
                        text: "Each route should display an HTML page listing your favorite three things of each.",
                    },
                    {
                        stepNum: 8,
                        text: "Be sure to use `fs` to serve your HTML files.",
                    },
                    {
                        stepNum: 9,
                        text: "Have your home page have links to all of your other pages.",
                    },
                    {
                        stepNum: 10,
                        text: "DRY up your code by only having a single `readFile`",
                    }
                ]
            },
            {
                name: "Post-Method",
                steps: [
                    {
                        stepNum: 1,
                        text: "Create an HTML file with a form that will post data.",
                    },
                    {
                        stepNum: 2,
                        text: "Create a server that will accept the POSTed data and log it to the console.",
                    },
                    {
                        stepNum: 3,
                        text: "Note You might have to do some Googling to figure this one out!",
                    }
                ]
            },
            {
                name: "StarWars1",
                steps: [
                    {
                        stepNum: 1,
                        text: "Work with those around you to confirm your `server1.js` file is working. This means figuring out what dependencies to install, how to run the file, and how to view the resulting website in your browser. This step requires you to make ZERO changes to the code file. At this point, you are just getting the file you are given to run.",
                    },
                    {
                        stepNum: 2,
                        text: "Then, once youve gotten the original code to display in the browser, create a new `Obi Wan Kenobi route` to display Kenobis information. Use the comments and the previous code in the file as a guide.",
                    },
                    {
                        stepNum: 3,
                        text: "Help those around you when done.",
                    }
                ]
            },
            {
                name: "StarWars2",
                steps: [
                    {
                        stepNum: 1,
                        text: "Examine the code sent to you. Once again, run the `server2.js` file and view the page in the browser. Troubleshoot any issues that arise. Again NO CODE CHANGES required.",
                    },
                    {
                        stepNum: 2,
                        text: "Then once you have a working server instance, begin to examine the file. Try to explain to yourself and those around you what the significance of `/character` and `req.params.character` is.",
                    },
                    {
                        stepNum: 3,
                        text: "Create a test case to check your hypothesis.",
                    }
                ]
            },
            {
                name: "StarWars3",
                steps: [
                    {
                        stepNum: 1,
                        text: "Examine the code flagged in the comments. Explain to those around you what it does and how it works. Be sure to create test cases that confirm your hypothesis.",
                    }
                ]
            },
            {
                name: "StarWars4",
                steps: [
                    {
                        stepNum: 1,
                        text: "Examine the code flagged in the comments. Was your hypothesis from the previous activity correct?",
                    }
                ]
            },
            {
                name: "StarWars5",
                steps: [
                    {
                        stepNum: 1,
                        text: "Spend a few moments researching what `body-parser` is for and what `req.body` means in the context of Express.",
                    },
                    {
                        stepNum: 2,
                        text: "Then research how you can POST data to the Express server.",
                    },
                    {
                        stepNum: 3,
                        text: "Use Postman to send a POST request to the server youve been provided. Confirm that your character has been added to the database correctly.",
                    }
                ]
            },
            {
                name: "StarWars6",
                steps: [
                    {
                        stepNum: 1,
                        text: "Look at the file sent to you then explain to the person next to you what the `res.sendFile` line does. Then try creating a new HTML file and routing to that one instead.",
                    }
                ]
            },
            {
                name: "Hot Restaurant",
                steps: [
                    {
                        stepNum: 1,
                        text: "Description Basic app demonstrating Node and Express with jQuery. Overall purpose is to help schedule reservation requests. Restaurant has just 5 tables available. First five requests get a reservation, every request after that is sent to the waiting list.",
                    },
                    {
                        stepNum: 2,
                        text: "Live Demo <https//hot-restaurant-fsf.herokuapp.com/>",
                    },
                    {
                        stepNum: 3,
                        text: "Current app doesnt have admin handling. Well deal with that at a later time.",
                    },
                    {
                        stepNum: 4,
                        text: "Dont separate the JavaScript from the HTML in the client-side code. (i.e. Dont use external JavaScript. If you do, you will need an additional line of code to configure the express server to know where the JavaScript is).",
                    },
                    {
                        stepNum: 5,
                        text: "Good luck! Dont stress out",
                    },
                    {
                        stepNum: 6,
                        text: "Spend some time trying to build exposure. But dont get overwhelmed. Well have plenty of time to come back to this.",
                    }
                ]
            }
        ]
    },
    {
        name: "13-Handlebars",
        moduleNum: 13,
        exercises: [
            {
                name: "Express Calculator",
                steps: [
                    {
                        stepNum: 1,
                        text: "You will create an Express calculator application with one get route that is able to take in three parameters an operation and two numbers.",
                    },
                    {
                        stepNum: 2,
                        text: "There are four operation values which a user may use addition, subtraction, multiplication, and division.",
                    },
                    {
                        stepNum: 3,
                        text: "When the route is hit, your browser should display the result of the math operation.",
                    },
                    {
                        stepNum: 4,
                        text: "For example, when the user goes to the url <http//localhost3000/add/10/1>, the page should display 11.",
                    }
                ]
            },
            {
                name: "Seinfeld app",
                steps: [
                    {
                        stepNum: 1,
                        text: "Create a seinfeld_db database with an actors table.",
                    },
                    {
                        stepNum: 2,
                        text: "The actors table will have a column for id (PRIMARY KEY AUTO_INCREMENT int), name (varchar), coolness_points (int), and attitude (varchar).",
                    },
                    {
                        stepNum: 3,
                        text: "Add in four actors with different names, coolness_points, and attitudes.",
                    },
                    {
                        stepNum: 4,
                        text: "Create a Node Application with Express and MySQL with three Express routes.",
                    },
                    {
                        stepNum: 5,
                        text: "Create a `/cast` route that will display all the actors and their data ordered by their ids.",
                    },
                    {
                        stepNum: 6,
                        text: "Create a `/coolness-chart` route that will display all the actors and their data ordered by their coolness points.",
                    },
                    {
                        stepNum: 7,
                        text: "Create a `/attitude-chart/att` route that will display all the actors for a specific type of attitude.",
                    }
                ]
            },
            {
                name: "Ben and Jerrys",
                steps: [
                    {
                        stepNum: 1,
                        text: "In this activity, you are going to be creating your own Ben and Jerrys App where users can see all of the different flavors Ben and Jerrys have to offer while also getting specific information on a flavor by searching for it within the URL.",
                    },
                    {
                        stepNum: 2,
                        text: "Do not use MySQL for this assignment! Use the `icecreams` variable above as your data. Add the variable to your `server.js` file.",
                    },
                    {
                        stepNum: 3,
                        text: "Using handlebars and express, create a route called `/icecream/name`. When the route is hit, it will display the name, price and awesomeness for that specific ice cream.",
                    },
                    {
                        stepNum: 4,
                        text: "Create an `/icecreams` route. It will loop over all the ice creams and display them all to the user.",
                    },
                    {
                        stepNum: 5,
                        text: "var icecreams = [      {name vanilla, price 10, awesomeness 3},      {name chocolate, price 4, awesomeness 8},      {name banana, price 1, awesomeness 1},      {name greentea, price 5, awesomeness 7},      {name jawbreakers, price 6, awesomeness 2},    ];",
                    }
                ]
            },
            {
                name: "Handlebar Animals",
                steps: [
                    {
                        stepNum: 1,
                        text: "You will edit the `server.js` file, the `dog.handlebars` file, and the `index.handlebars` file in an attempt to recreate the application that we demonstrated just a couple of minutes ago. Instructions on what to do are contained within each file you will have to edit.",
                    },
                    {
                        stepNum: 2,
                        text: "You wont be using MySQL for this exercise but will instead be using the animals array in the `server.js` file.",
                    }
                ]
            },
            {
                name: "wishes",
                steps: [
                    {
                        stepNum: 1,
                        text: "Create an app with Express, MySQL and Handlebars.",
                    },
                    {
                        stepNum: 2,
                        text: "HINT: this app will be very similar to the app your instructor just demonstrated and slacked out. Please feel free to leverage that code when creating this code.",
                    },
                    {
                        stepNum: 3,
                        text: "Create a `schema.sql` file and create the following inside of that file",
                    },
                    {
                        stepNum: 4,
                        text: "Make a database called wishes_db",
                    },
                    {
                        stepNum: 5,
                        text: "Inside of that database, make a table called wishes which will have a wish column and an id column. The id will be automatically incremented while also being the primary key.",
                    },
                    {
                        stepNum: 6,
                        text: "Run your `schema.sql` file within MySQL Workbench before moving onto the next steps.",
                    },
                    {
                        stepNum: 7,
                        text: "In your `server.js` file, you will have to create two routes a get route for `/` and a post route for `/`.",
                    },
                    {
                        stepNum: 8,
                        text: "Render all of the wishes from the wishes table when the `/` get route is hit. Additionally show the form that the user can use to create a new wish. The form will POST to the `/` route.",
                    },
                    {
                        stepNum: 9,
                        text: "The `/` post route will insert the wish from the form into the wishes table and will redirect the user back to the `/` get route.",
                    }
                ]
            },
            {
                name: "watchlist",
                steps: [
                    {
                        stepNum: 1,
                        text: "Make a database called moviePlannerDB",
                    },
                    {
                        stepNum: 2,
                        text: "Inside of that database make a movies table which will contain a movie column and an id column. The id will be automatically incremented while also being the primary key.",
                    },
                    {
                        stepNum: 3,
                        text: "Run your `schema.sql` file within MySQL Workbench before moving onto the next steps.",
                    },
                    {
                        stepNum: 4,
                        text: "In your server.js file, you will create four routes `get`, `post`, `put`, and `delete`.",
                    },
                    {
                        stepNum: 5,
                        text: "Render the main `index.handlebars` when the `/` get route is hit with all of the movies from the movies table.",
                    },
                    {
                        stepNum: 6,
                        text: "Your application should have a set of routes on `/api/movies` for create, update, and delete operations on the movies table.",
                    },
                    {
                        stepNum: 7,
                        text: "Show a delete button next to each movie. When one of the delete buttons is clicked, the code should send a DELETE request to  delete the associated movie from your database.",
                    },
                    {
                        stepNum: 8,
                        text: "Additionally, show the form that the user can use to add a movie to be watched.  When the submit button is clicked, the code will post to the `/movies` route, which will insert the movie from the form into the movies table and return the ID of the new movie.",
                    },
                    {
                        stepNum: 9,
                        text: "Have another form that will update a movie in the movies table. The form will include two inputs an id input and a movie title input. Remember to leverage a PUT method.",
                    }
                ]
            },
            {
                name: "quotesApp",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using Express, MySQL, Handlebars, and the starter code as a jumping-off point, you will be creating a simple web application which allows users to create, read, update, and delete popular quotes.",
                    },
                    {
                        stepNum: 2,
                        text: "Your application will have two pages",
                    },
                    {
                        stepNum: 3,
                        text: "One will show all of the quotes within a database and will allow users to create a new quote or delete an existing one. A button next to each, labeled Update This Quote, will take users to the other page which shows the quote selected and will allow them to update it with new information.",
                    },
                    {
                        stepNum: 4,
                        text: "Make sure to run the code contained within the `schema.sql` and `seeds.sql` files beforehand so that you have a database with which to work.",
                    }
                ]
            },
            {
                name: "Party_DB",
                steps: [
                    {
                        stepNum: 1,
                        text: "Create a Node MySQL application with an ORM that executes once the server is launched.",
                    },
                    {
                        stepNum: 2,
                        text: "You will not need Express or Handlebars for this assignment. Use `console.log` to print the data collected to the console.",
                    },
                    {
                        stepNum: 3,
                        text: "Create a MySQL database with the tables and data which were slacked out to you.",
                    },
                    {
                        stepNum: 4,
                        text: "Create a Node app and connect it to MySQL with a `config` folder and with a `connection.js` file inside of that folder.",
                    },
                    {
                        stepNum: 5,
                        text: "Create an `orm.js` file, and make an ORM that will do the following",
                    },
                    {
                        stepNum: 6,
                        text: "Console log all the party names.   Console log all the client names.   Console log all the parties that have a party-type of grown-up.   Console log all the clients and their parties.",
                    }
                ]
            },
            {
                name: "The Asynch Solution",
                steps: [
                    {
                        stepNum: 1,
                        text: "Work in pairs to see if you can come up with the reason why our code in `18-TheAsynchProblem` is console.logging undefined despite no errors being recorded.",
                    },
                    {
                        stepNum: 2,
                        text: "See if you can come up with a possible solution to this problem.",
                    },
                    {
                        stepNum: 3,
                        text: "You are free to search the web for potential causes/solutions to this issue, as it is a problem that many new coders have faced and that they will continue to face for years and years to come.",
                    },
                    {
                        stepNum: 4,
                        text: "Use the code contained within `18-TheAsynchProblem` to run, test, and mess with on your own.",
                    }
                ]
            },
            {
                name: "Cats App",
                steps: [
                    {
                        stepNum: 1,
                        text: "Add a delete button into the `index.handlebars` file next to each cat.",
                    },
                    {
                        stepNum: 2,
                        text: "Add on to the following",
                    },
                    {
                        stepNum: 3,
                        text: "The `cats.js` file to add a jQuery event handler for the delete button.",
                    },
                    {
                        stepNum: 4,
                        text: "The ORM to include a delete key and function",
                    },
                    {
                        stepNum: 5,
                        text: "The cat model to include a delete key and function that uses the ORM",
                    },
                    {
                        stepNum: 6,
                        text: "The `catsController.js` file to have a `/api/cats/id` delete route, to call the delete key of the cat model, and to pass in arguments as necessary",
                    }
                ]
            }
        ]
    },
    {
        name: "14-Sequelize",
        moduleNum: 14,
        exercises: [
            {
                name: "Chirpy",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using the app skeleton provided to you",
                    },
                    {
                        stepNum: 2,
                        text: "Create a MySQL database named `chirpy` with a `chirps` table to hold your data.",
                    },
                    {
                        stepNum: 3,
                        text: "Your `chirp` table should include a field for id, author, chirp, and time created.",
                    },
                    {
                        stepNum: 4,
                        text: "Modify the connection.js file to create a connection to your database.",
                    },
                    {
                        stepNum: 5,
                        text: "Modify the api-routes.js file so that there is a route for adding a new chirp, as well as retrieving all chirps.",
                    },
                    {
                        stepNum: 6,
                        text: "Modify the chirps.js file so that the page interacts with the database.",
                    }
                ]
            },
            {
                name: "Sequelize",
                steps: [
                    {
                        stepNum: 1,
                        text: "Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).",
                    },
                    {
                        stepNum: 2,
                        text: "Question What is Sequelize?",
                    },
                    {
                        stepNum: 3,
                        text: "Question What advantages does it offer?",
                    },
                    {
                        stepNum: 4,
                        text: "Question How do I install it? How do I incorporate it into my app?",
                    },
                    {
                        stepNum: 5,
                        text: "Question What the heck is a Sequelize model? What role will it play?",
                    },
                    {
                        stepNum: 6,
                        text: "Question How would I model a table in Sequelize?",
                    },
                    {
                        stepNum: 7,
                        text: "Question How would I query for all the records where the Independence Year was less than 50 years ago?",
                    },
                    {
                        stepNum: 8,
                        text: "How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records.",
                    },
                    {
                        stepNum: 9,
                        text: "Bonus How do I use sequelize to make changes to an existing table with data in it?",
                    }
                ]
            },
            {
                name: "Chirpy Sequelize",
                steps: [
                    {
                        stepNum: 1,
                        text: "run server.js",
                    }
                ]
            },
            {
                name: "StarWars",
                steps: [
                    {
                        stepNum: 1,
                        text: "Install the sequelize and mysql2 npm packages.",
                    },
                    {
                        stepNum: 2,
                        text: "Delete the orm from config. In your app folder, create a model folder with a character.js file in the model\n",
                    },
                    {
                        stepNum: 3,
                        text: "In character.js, model out the character table, as detailed in the schema.sql file located in the root of this project directory.\n",
                    },
                    {
                        stepNum: 4,
                        text: "Remove all references to the old orm file and replace it with character.js\n",
                    },
                    {
                        stepNum: 5,
                        text: "Use Sequelize methods in place of the orm calls to retrieve and insert data.\n",
                    },
                    {
                        stepNum: 6,
                        text: "Update connection.js to use sequelize instead of the mysql package.\n",
                    }
                ]
            },
            {
                name: "sequelizeLibrary",
                steps: [
                    {
                        stepNum: 1,
                        text: "Create a `\"sequelize_library\"` DB.",
                    },
                    {
                        stepNum: 2,
                        text: "Modify `connection.js` to include your MySQL user/database information.",
                    },
                    {
                        stepNum: 3,
                        text: "In the `models` folder, modify the `book.js` file to create a book model. Further details can be found inside this file.",
                    },
                    {
                        stepNum: 4,
                        text: "Your book model must include a title, author, genre, page numbers.",
                    },
                    {
                        stepNum: 5,
                        text: "Modify `api-routes.js` using sequelize query methods to create the required routes.",
                    },
                    {
                        stepNum: 6,
                        text: "Modify `html-routes.js` to deliver the required html files.",
                    }
                ]
            },
            {
                name: "Orm to Sequelize",
                steps: [
                    {
                        stepNum: 1,
                        text: "Create a new local MYSQL database called todolist, but dont create any tables.",
                    },
                    {
                        stepNum: 2,
                        text: "Delete any references to the orm.js file inside the `api-routes.js` file.\n",
                    },
                    {
                        stepNum: 3,
                        text: "Delete the config folder.",
                    },
                    {
                        stepNum: 4,
                        text: "While inside the activity folder, run npm install in terminal.",
                    },
                    {
                        stepNum: 5,
                        text: "In terminal, type in the following command sequelize initmodels & sequelize initconfig",
                    },
                    {
                        stepNum: 6,
                        text: "Step 5 should have created a config and a models folder for us. Navigate to the config folder, open `config.json`, and modify the development objects database,username and password values to match your MYSQL database on your machine. Include the database port number, if not using the default.",
                    },
                    {
                        stepNum: 7,
                        text: "Navigate to the models folder and create a new file called `todo.js`. Create a Todo model with columns for text (DataTypes.STRING), and complete (DataTypes.BOOLEAN).",
                    },
                    {
                        stepNum: 8,
                        text: "Sync the models by running db.sequelize.sync() before we start the express server.",
                    },
                    ,
                    {
                        stepNum: 9,
                        text: "In your terminal, run node server. Check MYSQL Workbench to see if a Todos table was created. If so, you were successful. If not, check your terminal for any errors.",
                    }
                ]
            },
            {
                name: "Sequelize Create Read",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open the folder and run `npm install`.",
                    },
                    {
                        stepNum: 2,
                        text: "Update the `config.json` files development object with your own local MYSQL database settings.",
                    },
                    {
                        stepNum: 3,
                        text: "Navigate to the `api-routes.js` folder.",
                    },
                    {
                        stepNum: 4,
                        text: "Add a Sequelize findAll method inside the GET route which finds all of the todos and returns them to the user as JSON.",
                    },
                    {
                        stepNum: 5,
                        text: "Add a Sequelize create method to the POST route to save a new todo to the database using the data sent to the server in req.body.",
                    },
                    {
                        stepNum: 6,
                        text: "To test if this worked, open your terminal and run `node server` and navigate to localhost8080. If you are able to save new todos, you were successful.",
                    },
                    {
                        stepNum: 7,
                        text: "Hint We can access the Todo model here with db.Todo",
                    }
                ]
            },
            {
                name: "Sequelize Update Delete",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open the Unsolved folder",
                    },
                    {
                        stepNum: 2,
                        text: "Run `npm install`",
                    },
                    {
                        stepNum: 3,
                        text: "Update the `config.json` files development object with your own local MYSQL database settings.",
                    },
                    {
                        stepNum: 4,
                        text: "Inside the `api-routes.js` file, look for the DELETE route and add a Sequelize method to delete the todo with the id available to us in `req.params.id`.",
                    },
                    {
                        stepNum: 5,
                        text: "Inside of the same file, look for the PUT route and add a Sequelize method to update a todo with the new todo data available to us inside req.body.",
                    },
                    {
                        stepNum: 6,
                        text: "Again, you wont need to touch the front end HTML or JavaScript to make any of this work.",
                    },
                    {
                        stepNum: 7,
                        text: "HINT: you will need to pass in an options object with a where attribute into both methods in order to filter these queries to target the Todos we want to update or delete.",
                    },
                    {
                        stepNum: 8,
                        text: "Navigate to localhost8080. If you can update and delete todos without errors, you were successful.",
                    },
                    {
                        stepNum: 9,
                        text: "If you get stuck or finish early, discuss the documentation for the `update` and `destroy` methods with your partner ",
                    }
                ]
            },
            {
                name: "sequelize Validations",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open the folder sent out to you.",
                    },
                    {
                        stepNum: 2,
                        text: "Run `npm install`.",
                    },
                    {
                        stepNum: 3,
                        text: "Update the `config.json` files development object with your own local MYSQL database settings.",
                    },
                    {
                        stepNum: 4,
                        text: "Modify the `todo.js` file so that the Todo model has a flag to prevent the text field from being null. Also add a validation to make sure the text field is at least one character, but no more than 140 characters.",
                    },
                    {
                        stepNum: 5,
                        text: "Modify the complete field in our Todo model so that it supplies a default value of false if one is not supplied during Todo creation.",
                    },
                    {
                        stepNum: 6,
                        text: "Once a Sequelize model has been created and synced for the first time, any changes we make to our Todo model wont be picked up by our database. The easiest way to get around this during the development process is to pass { force true } as an argument into our sync method inside `server.js` file. This will make it so that every time we run our app, our Todos table will be dropped and recreated with the new configuration. ",
                    },
                    {
                        stepNum: 7,
                        text: "Navigate to localhost8080 to test that this worked. Try to save a Todo without any text in it, and then try and save a Todo with over 140 characters. If these didnt save and you see errors in your console that have to do with validation, you were successful.",
                    },
                    {
                        stepNum: 8,
                        text: "Big Hint Sequelize documentation on validations with examples can be found here <http//docs.sequelizejs.com/en/latest/docs/models-definition/#validations>",
                    }
                ]
            },
            {
                name: "Post Model",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open the folder slacked out to you, run `npm install`",
                    },
                    {
                        stepNum: 2,
                        text: "Create a new MySQL database and name it `blogger`. Dont create any tables.",
                    },
                    {
                        stepNum: 3,
                        text: "Open the `config` folder and update the `config.json` files `development` object to match your own local MySQL database.",
                    },
                    {
                        stepNum: 4,
                        text: "Go to the `models` folder and open the `post.js` file.",
                    },
                    {
                        stepNum: 5,
                        text: "Create a Sequelize `Post` model here. The model should have a title property of type DataTypes.STRING, a body property of DataTypes.TEXT, and a category property of DataTypes.STRING. \n  (<http//docs.sequelizejs.com/manual/tutorial/models-definition.html#data-types>)",
                    },
                    {
                        stepNum: 6,
                        text: "To check if this worked, run `node server.js` in your terminal. Then open MySQL Workbench to check if a Posts table has been created.",
                    }
                ]
            },
            {
                name: "Blog CRUD",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open the folder sent out to you, run `npm install`",
                    },
                    {
                        stepNum: 2,
                        text: "Open the `config` folder and update the `config.json` files `development` object to match your own local MySQL database.",
                    },
                    {
                        stepNum: 3,
                        text: "Navigate to the `api-routes.js` file inside of the `routes` folder.",
                    },
                    {
                        stepNum: 4,
                        text: "Fill in each route with the code described in the comments to add each CRUD action.\n",
                    }
                ]
            },
            {
                name: "Post Author Association",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open the folder sent out to you.",
                    },
                    {
                        stepNum: 2,
                        text: "Run `npm install`",
                    },
                    {
                        stepNum: 3,
                        text: "Open the `config` folder and update the `config.json` files `development` object to match your own local MySQL database.",
                    },
                    {
                        stepNum: 4,
                        text: "Navigate to the `post.js` file.",
                    },
                    {
                        stepNum: 5,
                        text: "You will need to set an `associate` property to the `Post` model after its defined. Theres an example of this type of association being done here ",
                    },
                    {
                        stepNum: 6,
                        text: "<https//github.com/sequelize/express-example/blob/master/models/task.js>",
                    },
                    {
                        stepNum: 7,
                        text: "This may take a few tries to implement correctly in your own Post model (Theres a lot of curly braces there!). You can verify your code works by starting your node server and then checking MySQL Workbench. If the Posts table now has a foreign key of AuthorId, you were successful.",
                    },
                    {
                        stepNum: 8,
                        text: "Bonus If you complete the exercise before times up, navigate to the author.js file and add a hasMany association from the Author model to the Post Model.",
                    }
                ]
            },
            {
                name: "Post Author Joins",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open the folder sent out to you",
                    },
                    {
                        stepNum: 2,
                        text: "Run `npm install`",
                    },
                    {
                        stepNum: 3,
                        text: "Open the `config` folder and update the `config.json` files `development` object to match your own local MySQL database.",
                    },
                    {
                        stepNum: 4,
                        text: "Navigate to the `post-api-routes.js` file.",
                    },
                    {
                        stepNum: 5,
                        text: "Add the include option to the queries specified in the comments. This is a feature called eager loading. We want to include the Author model.",
                    },
                    {
                        stepNum: 6,
                        text: "Navigate to the `author-api-routes.js` file and add the include option to the queries specified in the comments. Here we want to include the Post model.",
                    },
                    {
                        stepNum: 7,
                        text: "If successful the application should now be fully functional. After you create a few Authors with a few posts, try navigating to either `localhost8080/api/posts` or `localhost8080/api/authors` to make sure the JSON returned for both routes includes all of the data.",
                    },
                    {
                        stepNum: 8,
                        text: "Hint The include key goes on the same options object as the where attribute weve been using. Examples can be found at the link supplied.",
                    }
                ]
            }
        ]
    },
    {
        name: "15-Project-2",
        moduleNum: 15,
        exercises: [
            {
                name: "Stu Create Repository",
                steps: [
                    {
                        stepNum: 1,
                        text: "One group member should create a new Github repo for the project. Important: When creating the repo, do not initialize with a README."
                    },
                    {
                        stepNum: 2,
                        text: "Protect the repo's master branch as we did during project 1."
                    },
                    {
                        stepNum: 3,
                        text: "Once at the repo's page, click the Settings tab."
                    },
                    {
                        stepNum: 4,
                        text: "Select Branches from the left sidebar."
                    },
                    {
                        stepNum: 5,
                        text: "Under Branch protection rules, choose master from the dropdown."
                    },
                    {
                        stepNum: 6,
                        text: "Check off the following options:"
                    },
                    {
                        stepNum: 7,
                        text: "Protect this branch"
                    },
                    {
                        stepNum: 8,
                        text: "Require pull request reviews before merging"
                    },
                    {
                        stepNum: 9,
                        text: "Include administrators"
                    },
                    {
                        stepNum: 10,
                        text: "Require status checks to pass before merging"
                    },
                    {
                        stepNum: 11,
                        text: "Require branches to be up to date before merging"
                    },
                    {
                        stepNum: 12,
                        text: "Click Save changes"
                    },
                    {
                        stepNum: 13,
                        text: "Once complete, invite the other group members as collaborators."
                    }
                ]
            },
            {
                name: "No Lint Example",
                steps: [
                    {
                        stepNum: 1,
                        text: "Before looking at any code, open Unsolved/index.html in your web browser and study the rendered application."
                    },
                    {
                        stepNum: 2,
                        text: "This simple example prompts the user for 2 numbers, and then what sort of mathematical operation they would like to perform. The result is then alerted back to the user."
                    },
                    {
                        stepNum: 3,
                        text: "Now open Unsolved/example.js in your editor."
                    },
                    {
                        stepNum: 4,
                        text: "For what this application is supposed to do, the code works perfectly."
                    },
                    {
                        stepNum: 5,
                        text: "Discuss with your partner: Even though the code works, what's wrong with it?"
                    }
                ]
            },
            {
                name: "ESList Example",
                steps: [
                    {
                        stepNum: 1,
                        text: "Install the VS Code Eslint Extension."
                    },
                    {
                        stepNum: 2,
                        text: "Open the Unsolved folder and run npm install from your terminal to install dependencies."
                    },
                    {
                        stepNum: 3,
                        text: "Now open Unsolved/example.js in your code editor. If you were able to complete the previous steps correctly, you should see red annotations under different parts of the code. Hovering over each displays a popover with an eslint rule being broken."
                    },
                    {
                        stepNum: 4,
                        text: "Work to fix each part of the annotated code."
                    },
                    {
                        stepNum: 5,
                        text: "Try changing the quote style to enforce single-quotes instead of double-quotes."
                    }
                ]
            },
            {
                name: "Project Starter",
                steps: [
                    {
                        stepNum: 1,
                        text: "Only one member of each group should complete this activity while the others watch."
                    },
                    {
                        stepNum: 2,
                        text: "Copy the entire [Unsolved](Unsolved) folder to another location on your computers &mdash; wherever you would like your local copy of the group project to be."
                    },
                    {
                        stepNum: 3,
                        text: "Rename the copied Unsolved folder to the name of your project."
                    },
                    {
                        stepNum: 4,
                        text: "Open the copied project folder's `package.json` file and change its `name` property to the name of your project."
                    },
                    {
                        stepNum: 5,
                        text: "CD to the root of the copied project folder with your terminal and run the following commands:"
                    },
                    {
                        stepNum: 6,
                        text: "git init"
                    },
                    {
                        stepNum: 7,
                        text: "git add ."
                    },
                    {
                        stepNum: 8,
                        text: "git commit -m 'Initial commit'"
                    },
                    {
                        stepNum: 9,
                        text: "Then copy the GitHub repo's remote SSH URL (the same URL you'd use to clone the repo)."
                    },
                    {
                        stepNum: 10,
                        text: "Run the following commands in your terminal, replacing  with your GitHub repo's remote SSH URL."
                    },
                    {
                        stepNum: 11,
                        text: "git remote add origin <remote-url>"
                    },
                    {
                        stepNum: 12,
                        text: "git push origin master"
                    },
                    {
                        stepNum: 13,
                        text: "If completed successfully you should see all of the files uploaded to GitHub."
                    },
                    {
                        stepNum: 14,
                        text: "All other group members should now clone the repo."
                    },
                    {
                        stepNum: 15,
                        text: "Discuss as a group: How would you now add changes to this project?"
                    }
                ]
            },
            {
                name: "Travis Setup",
                steps: [
                    {
                        stepNum: 1,
                        text: "Before we can set up Travis, we must configure the project repo to protect the master branch."
                    },
                    {
                        stepNum: 2,
                        text: "Navigate to the repo's page, then click the Settings tab."
                    },
                    {
                        stepNum: 3,
                        text: "Select Branches from the left sidebar."

                    },
                    {
                        stepNum: 4,
                        text: "Under Branch protection rules, choose master from the dropdown."
                    },
                    {
                        stepNum: 5,
                        text: "Check off the following options:"
                    },
                    {
                        stepNum: 6,
                        text: "Protect this branch"
                    },
                    {
                        stepNum: 7,
                        text: "Require pull request reviews before merging"
                    },
                    {
                        stepNum: 8,
                        text: "Include administrators"
                    },
                    {
                        stepNum: 9,
                        text: "Require status checks to pass before merging"
                    },
                    {
                        stepNum: 10,
                        text: "Require branches to be up to date before merging"
                    },
                    {
                        stepNum: 11,
                        text: "Click Save changes"
                    },
                    {
                        stepNum: 12,
                        text: "Navigate to https://github.com/marketplace/travis-ci."
                    },
                    {
                        stepNum: 13,
                        text: "Select the option to Set up a new plan and choose the $0 Open Source plan when prompted."
                    },
                    {
                        stepNum: 14,
                        text: "Click Install it for free and then on the next page click Complete order and begin installation."
                    },
                    {
                        stepNum: 15,
                        text: "On the next page select the radio button that reads Only select repositories."
                    },
                    {
                        stepNum: 16,
                        text: "From the Select repositories dropdown, choose your project repo."
                    },
                    {
                        stepNum: 17,
                        text: "Click the Install button to complete the process."
                    }
                ]
            },
            {
                name: "Kanban",
                steps: [
                    {
                        stepNum: 1,
                        text: "Use the Projects tab in GitHub to create a new project (use the automated Kanban template)."
                    },
                    {
                        stepNum: 2,
                        text: "Add a new column called Icebox (You will need to exit the add card pop-up to access the add column area on the right side)."
                    },
                    {
                        stepNum: 3,
                        text: "Click + Add Cards and dragging each issue into the correct column, To Do or Icebox."
                    },
                    {
                        stepNum: 4,
                        text: "If you have extra time, let each team member add some additional features to the Icebox. This is a great place to hold future enhancement ideas. Remember that each feature may need to be broken down into smaller tasks in the future before you open issues and start building them."
                    }
                ]
            },
            {
                name: "First Stand-Up",
                steps: [
                    {
                        stepNum: 1,
                        text: "Before your first stand-up, each member of the team should go through the To Do column of the project board and self-assign at least one issue."
                    },
                    {
                        stepNum: 2,
                        text: "To do this, click on the issue and on the right choose self-assign."
                    },
                    {
                        stepNum: 3,
                        text: "Everyone should have a clear idea of what they think they can accomplish today. Now it's time for your first stand-up!"
                    },
                    {
                        stepNum: 4,
                        text: "Stand if you are able - yep, stand-ups take place standing; this helps to ensure that the meetings are short and to the point."
                    },
                    {
                        stepNum: 5,
                        text: "Each member of the team should say:"
                    },
                    {
                        stepNum: 6,
                        text: "What they did yesterday"
                    },
                    {
                        stepNum: 7,
                        text: "What they plan to do today"
                    },
                    {
                        stepNum: 8,
                        text: "What, if anything, is blocking their progress."
                    },
                    {
                        stepNum: 9,
                        text: "Stand-ups should be held daily from this point forward - yes even days that you don't have class (use Slack or Google Hangouts)."
                    }
                ]
            },
            {
                name: "Check for Exceptions",
                steps: [
                    {
                        stepNum: 1,
                        text: "Update the multiply function so that it throws an error if either x or y is not a number."
                    },
                    {
                        stepNum: 2,
                        text: "Inside of the assertThrows function, wrap the call to func with a try/catch block. If an error is thrown, log the error and set threw to true. At the end of the function, return threw."
                    },
                    {
                        stepNum: 3,
                        text: "Ensure everything works by logging the result of assertThrows when passed in multiply and any two numbers. false should be printed to the console, meaning no error was thrown."
                    },
                    {
                        stepNum: 4,
                        text: "Then, log the result of assertThrows when passed in multiply with any number number and any string. An error should be logged, followed by true, meaning an error was thrown and caught."
                    }
                ]
            },
            {
                name: "Disemvowel",
                steps: [
                    {
                        stepNum: 1,
                        text: "Familiarize yourself with the Mocha and Chai documentation. Choose to read either the should, expect, or assert guide, and refer to it throughout the exercise."
                    },
                    {
                        stepNum: 2,
                        text: "Consider a function, called disemvowel, which accepts a string and returns a version of the string without vowels."
                    },
                    {
                        stepNum: 3,
                        text: "Your task is to use Chai to write a test suite for disemvowel. The catch is that you don't get an implementation yet. First,"
                    },
                    {
                        stepNum: 4,
                        text: "With your partner, determine what a representative example of an input to disemvowel might be."
                    },
                    {
                        stepNum: 5,
                        text: "What do we expect to receive? What should the function return of this input?"
                    },
                    {
                        stepNum: 6,
                        text: "What different formats can this sort of input take?"
                    },
                    {
                        stepNum: 7,
                        text: "What don't we expect? What should happen in this case? Hint: Just come up with something reasonable. We're not going to make you guess how we handled errors, so you don't have to write a test for this."
                    },
                    {
                        stepNum: 8,
                        text: "When you think you're done, explain to your partner why the test you've written totally describes disemvowel. Be prepared to explain your test suite to the class."
                    }
                ]
            },
            {
                name: "Titleize",
                steps: [
                    {
                        stepNum: 1,
                        text: "Your task is to write tests for a function that title-cases incoming names. For example: titleize('mr jones') returns 'Mr Jones'."
                    },
                    {
                        stepNum: 2,
                        text: " Proceed as with disemvowel, considering:"
                    },
                    {
                        stepNum: 3,
                        text: "What constitutes a representative expected input?"
                    },
                    {
                        stepNum: 4,
                        text: "What is unexpected input? How do you want titleize to respond to this?"
                    },
                    {
                        stepNum: 5,
                        text: "Do you want to allow arbitrarily long names, or impose a cutoff? Hint: There's no right answer, here. Choose an implementation, and write a test reflecting your choice."
                    },
                    {
                        stepNum: 6,
                        text: "Once you've written your tests, run them to ensure they fail."
                    },
                    {
                        stepNum: 7,
                        text: "Next, start implementing titleize. Pass one test at a time."
                    },
                    {
                        stepNum: 8,
                        text: "Once you've passed all tests, congratulate yourself! Be prepared to explain your tests to the rest of the class."
                    },
                    {
                        stepNum: 9,
                        text: "Create an array of titles, such as Dr; Mr; Ms; etc. If the string begins with such a title, capitalize it, and append a period."
                    }
                ]
            },
            {
                name: "Browser Automation",
                steps: [
                    {
                        stepNum: 1,
                        text: "Make sure you've installed Nightmare locally: npm install --save-dev nightmare or npm i -D nightmare."
                    },
                    {
                        stepNum: 2,
                        text: "Refer to the Nightmare documentation here: https://github.com/segmentio/nightmare#api"
                    },
                    {
                        stepNum: 3,
                        text: "Choose a site with which you're familiar. Write a few user stories for it."
                    },
                    {
                        stepNum: 4,
                        text: "Using the Nightmare documentation, try to implement a few of your user stories."
                    },
                    {
                        stepNum: 5,
                        text: "Take a look at the screenshot and html methods. Try to use them. Can you think of any use cases for these methods?"
                    },
                    {
                        stepNum: 6,
                        text: "Be prepared to share your user stories with the class."
                    },
                    {
                        stepNum: 7,
                        text: "Hint: If you have trouble interacting with elements you expect to be on the page, try using wait. Don't forget to use your browser's dev tools to determine the correct element selectors! Use 06-Nightmare-Example as a starting point if you feel overwhelmed."
                    }
                ]
            },
            {
                name: "Nightmare Tests Example",
                steps: [
                    {
                        stepNum: 1,
                        text: "Choose a website with which you're familiar, and write a few user stories for it. Be sure not to write user stories against arbitrary features. Rather, write them such that taken together, they verify some of the site's primary functionality."
                    },
                    {
                        stepNum: 2,
                        text: "Wrap those user stories in describe and it clauses."
                    },
                    {
                        stepNum: 3,
                        text: "If you can get everything to pass, repeat the exercise for a different site."
                    }
                ]
            },
            {
                name: "Mocha Refresher",
                steps: [
                    {
                        stepNum: 1,
                        text: "Complete the calculateTax function inside of tax.js."
                    },
                    {
                        stepNum: 2,
                        text: "The function should take 1 parameter that represents the price of the object."
                    },
                    {
                        stepNum: 3,
                        text: "The function should return the total price with 8% tax (price * 1.08)."
                    },
                    {
                        stepNum: 4,
                        text: "The total price should be formatted as a dollar amount (ex: 4.20)."
                    },
                    {
                        stepNum: 5,
                        text: "In a separate file, use mocha and chai to test the function. It should return the proper total for a given price if the price is a number or throw an error if price is not a number."
                    },
                    {
                        stepNum: 6,
                        text: "Reference the code from last class if needed."
                    }
                ]
            },
            {
                name: "Get Test",
                steps: [
                    {
                        stepNum: 1,
                        text: "Copy example.test.js over to the test folder in your local project repo. Rename this file to be to match the name of the api you're testing, e.g. todo.test.js or recipes.test.js."
                    },
                    {
                        stepNum: 2,
                        text: "Update the test endpoint to be one in your own project. The endpoint should return all instances of a model from the database."
                    },
                    {
                        stepNum: 3,
                        text: "Update the bulkCreate method to use your own model name instead of Example. Update the data being passed into the bulkCreate method to match what is expected by your model's schema."
                    },
                    {
                        stepNum: 4,
                        text: "Update the assertions to expect objects matching the ones passed into the bulk create method."
                    },
                    {
                        stepNum: 5,
                        text: "Run the tests by running npm run test and make sure everything passes."
                    },
                    {
                        stepNum: 6,
                        text: "The Project 2 Starter repo included all the necessary dependencies and scripts in the package.json for this activity. If you get an error about missing dependencies, double check it wasn't removed beforehand."
                    },
                    {
                        stepNum: 7,
                        text: "Ask an Instructor or TA for help if you get stuck!"
                    },
                    {
                        stepNum: 8,
                        text: "If you have a route for getting a single record of the same type by id, add a test for it!"
                    }
                ]
            }
        ]
    },
    {
        name: "16-Mongo-Mongoose",
        moduleNum: 16,
        exercises: [
            {
                name: "Create Insert and Find",
                steps: [
                    {
                        stepNum: 1,
                        text: "Start up a new database by switching to it."
                    },
                    {
                        stepNum: 2,
                        text: "Insert data into the lessondb database with this command: db.places.insert({'continent': 'Africa', 'country':'Morocco', 'majorcities': ['Casablanca', 'Fez', 'Marrakech']})"
                    },
                    {
                        stepNum: 3,
                        text: "As a class, come up with 3-5 more countries and insert them into the db using the same syntax as above."
                    },
                    {
                        stepNum: 4,
                        text: "Observe where the data was entered in the MongoDB instance (in mongod)."
                    },
                    {
                        stepNum: 5,
                        text: "Find all data in a Collection with db.[COLLECTION_NAME].find()."
                    },
                    {
                        stepNum: 6,
                        text: "Try a few queries with the examples we came up with as a class."
                    },
                    {
                        stepNum: 7,
                        text: "Also, pick something that will find more than one entry so we can see how it will return all matches."
                    },
                    {
                        stepNum: 8,
                        text: "Find specific data by matching an _id"
                    }
                ]
            },
            {
                name: "Starting with Mongo",
                steps: [
                    {
                        stepNum: 1,
                        text: "Use the command line to create a classroom database. Insert entries for yourself and the people in your row in a students collection. Each document should have:"
                    },
                    {
                        stepNum: 2,
                        text: "A field of name with the person's name."
                    },
                    {
                        stepNum: 3,
                        text: "A field of rownumber which will contain the row number that they are in."
                    },
                    {
                        stepNum: 4,
                        text: "A field of os which will contain the Operating System of the computer they are using: 'Mac', 'Win', etc"
                    },
                    {
                        stepNum: 5,
                        text: "A field of hobbies with an array of the hobbies the person likes to do."
                    },
                    {
                        stepNum: 6,
                        text: "Use find commands to get:"
                    },
                    {
                        stepNum: 7,
                        text: "A list of everyone in your row."
                    },
                    {
                        stepNum: 8,
                        text: "An entry for a single person."
                    },
                    {
                        stepNum: 9,
                        text: "The entries for all the Mac users in your row."
                    },
                    {
                        stepNum: 10,
                        text: "If you finish early, check out the MongoDB documentation and figure out how to find users by an entry in an array."
                    }
                ]
            },
            {
                name: "Stu Update Delete and Drop",
                steps: [
                    {
                        stepNum: 1,
                        text: "Go back to your classroom database."
                    },
                    {
                        stepNum: 2,
                        text: "You've decided to take on a new hobby. Add Extreme Basket Weaving to your array of hobbies."
                    },
                    {
                        stepNum: 3,
                        text: "While practicing for your Extreme Basket Weaving Competition, you broke the computer of the person next to you. They're using a new Operating System now. Change their os field."
                    },
                    {
                        stepNum: 4,
                        text: "Another student in your row saw you break that computer and wisely decided to move. Remove them from your database."
                    },
                    {
                        stepNum: 5,
                        text: "You are worried everyone else will leave and you'll have to sit all alone. You decide to bribe everyone who didn’t leave with candy. Add a field of gavecandy with a value of false to everyone in the array so you can keep track."
                    },
                    {
                        stepNum: 6,
                        text: "All this work made you hungry, so you bought yourself some candy. Change the value of gavecandy to true in your entry."
                    }
                ]
            },
            {
                name: "Scrape Starter",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using the unsolved file, the cheerio documentation, and what you've learned in class so far, scrape a website of your choice, save information from the page in a result array, and log it to the console."
                    }
                ]
            },
            {
                name: "Insert Animals",
                steps: [
                    {
                        stepNum: 1,
                        text: "Startup mongod and the mongo shell and switch to a new db named zoo."
                    },
                    {
                        stepNum: 2,
                        text: "Each entry should have:"
                    },
                    {
                        stepNum: 3,
                        text: "A field of numLegs with an integer of the number of legs that animal has."
                    },
                    {
                        stepNum: 4,
                        text: "A field of class with that animal's class (mammal, reptile, etc)."
                    },
                    {
                        stepNum: 5,
                        text: "A field of weight with an integer of the weight of the animal in pounds (any reasonable weight, really)."
                    },
                    {
                        stepNum: 6,
                        text: "A field of name, with the animal's name."
                    },
                    {
                        stepNum: 7,
                        text: "A field of whatIWouldReallyCallIt with the name of what you would call the animal if you got to name it."
                    }
                ]
            },
            {
                name: "MongoDB and Sorting",
                steps: [
                    {
                        stepNum: 1,
                        text: "Review the two routes provided to you and speak with a partner about what the code is doing."
                    },
                    {
                        stepNum: 2,
                        text: "Root: Displays a simple 'Hello World' message (no mongo required)."
                    },
                    {
                        stepNum: 3,
                        text: "All: Send JSON response with all animals."
                    },
                    {
                        stepNum: 4,
                        text: "Make two routes that display results from your zoo collection:"
                    },
                    {
                        stepNum: 5,
                        text: "Name: Send JSON response sorted by name in ascending order."
                    },
                    {
                        stepNum: 6,
                        text: "Weight: Send JSON response sorted by weight in descending order."
                    }
                ]
            },
            {
                name: "MongoJS and the Front End",
                steps: [
                    {
                        stepNum: 1,
                        text: "Make a reusable function for creating a table body in index.html with the results from your MongoDB query. Each row should have info for one animal."
                    },
                    {
                        stepNum: 2,
                        text: "Make two AJAX functions that fire when users click the two buttons on index.html."
                    },
                    {
                        stepNum: 3,
                        text: "When the user clicks the Weight button, the table should display the animal data sorted by weight."
                    },
                    {
                        stepNum: 4,
                        text: "When the user clicks the Name button, the table should display the animal data sorted by name."
                    }
                ]
            },
            {
                name: "Scraping Into a DB",
                steps: [
                    {
                        stepNum: 1,
                        text: "Using the tools and techniques you learned so far, you will scrape a website of your choice, then place the data in a MongoDB database. Be sure to make the database and collection before running this exercise."
                    },
                    {
                        stepNum: 2,
                        text: "Consult the assignment files from earlier in the class if you need a refresher on Cheerio."
                    }
                ]
            },
            {
                name: "Note Taker",
                steps: [
                    {
                        stepNum: 1,
                        text: "In this activity you will build the backend for a note-taking app."
                    },
                    {
                        stepNum: 2,
                        text: "Update the server.js file to include the routes specified in the comments."
                    }
                ]
            },
            {
                name: "Warm-Up",
                steps: [
                    {
                        stepNum: 1,
                        text: "Your goal is to complete the routes in the server file so the site can display and edit the book data. Don't worry about the front end, just use MongoJS to finish the routes"
                    }
                ]
            },
            {
                name: "User Schema",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open the userModel.js file and complete the User Schema based on the specifications outlined in the file."
                    },
                    {
                        stepNum: 2,
                        text: "The only file you will need to modify is userModel.js."
                    }
                ]
            },
            {
                name: "Custom Methods",
                steps: [
                    {
                        stepNum: 1,
                        text: "Go to userModel.js, and create custom methods based on the details offered in the file."
                    },
                    {
                        stepNum: 2,
                        text: "Once you've made those custom methods, use them in this file's POST request"
                    }
                ]
            },
            {
                name: "Populate Exercise",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open server.js and update the /populate route to return Users populated with notes as JSON to the client."
                    }
                ]
            },
            {
                name: "Scraping With Mongoose",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open server.js and complete the empty routes for accessing all articles, accessing a specific article, and for saving a new article."
                    }
                ]
            }
        ]
    },
    {
        name: "17-ES6",
        moduleNum: 17,
        exercises: [
            {
                name: "ES5 Warm-Up",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open var-example.js and discuss the code with a partner without actually running it."
                    },
                    {
                        stepNum: 2,
                        text: "Replace each '?' in the comments with the value you expect to be printed by each log function."
                    },
                    {
                        stepNum: 3,
                        text: "For each example, discuss your reasoning with your partner."
                    },
                    {
                        stepNum: 4,
                        text: "After successfully completing the base activity, see if you can convert the example to use const and let identifiers instead of var."
                    },
                    {
                        stepNum: 5,
                        text: "This is jumping a bit ahead to material we'll go over next, but check out Wes Bos's simple const & let introduction for help with this."
                    }
                ]
            },
            {
                name: "Re-Do Warm-Up",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open function-scoped.js"
                    },
                    {
                        stepNum: 2,
                        text: "Convert all of the var identifiers in this file to use either const or let, without breaking the code."
                    },
                    {
                        stepNum: 3,
                        text: "Remember, both const and let are block scoped."
                    },
                    {
                        stepNum: 4,
                        text: "const should be used for any values which won't be reassigned, let should be used for values that will be reassigned."
                    }
                ]
            },
            {
                name: "ES5 Debug",
                steps: [
                    {
                        stepNum: 1,
                        text: "Let's look at another example of ES5. Open up tacos.html and click on each of the buttons displayed."
                    },
                    {
                        stepNum: 2,
                        text: "This code doesn't behave as expected (the buttons shouldn't all behave the same way)."
                    },
                    {
                        stepNum: 3,
                        text: "Discuss with your partner: How/why doesn't this behave as expected?"
                    },
                    {
                        stepNum: 4,
                        text: "Attempt to find the cause of the bug and then use your new found knowledge of ES6 to correct it."
                    },
                    {
                        stepNum: 5,
                        text: "Update all instances of string concatenation (e.g. `var name = name + 'Zuckerberg') to use string template literals instead. This is a new feature we'll go over next, but check out MDN's documentation on string template literals to see if you can figure it out early."
                    }
                ]
            },
            {
                name: "Game of Strings",
                steps: [
                    {
                        stepNum: 1,
                        text: "Convert the game of strings into ES6 using what we've learned so far."
                    },
                    {
                        stepNum: 2,
                        text: "This activity is simply converting the code over to ES6. It isn't necessary to understand every line of code to know where improvements can be made."
                    },
                    {
                        stepNum: 3,
                        text: "Research the startsWith, endsWith, and includes methods and use them where appropriate."
                    }
                ]
            },
            {
                name: "Arrays",
                steps: [
                    {
                        stepNum: 1,
                        text: "Go through and update each example in arrays.js to utilize the array method specified in the comments place of the for-loop."
                    }
                ]
            },
            {
                name: "Arrow Arrays",
                steps: [
                    {
                        stepNum: 1,
                        text: "Convert each example to utilize arrow functions."
                    },
                    {
                        stepNum: 2,
                        text: "All of the code should behave the exact same way as before."
                    }
                ]
            },
            {
                name: "Object Destructuring",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open obj-destruct.js and update each function to use object destructuring where indicated in the comments."
                    }
                ]
            },
            {
                name: "Babel Setup",
                steps: [
                    {
                        stepNum: 1,
                        text: "Run the following in your terminal: 'npm install -g babel-cli'"
                    },
                    {
                        stepNum: 2,
                        text: "Babel makes use of different presets or configurations that tell it how exactly it should compile and run our code. These presets are installed via npm and saved to our project's package.json files. "
                    },
                    {
                        stepNum: 3,
                        text: "Additionally we must define a .babelrc. The .babelrc file is essentially a json file at the root of our project describing the presets will will be using. We don't have to worry about what these presets do exactly for now, just that they tell babel how it should treat our code."
                    },
                    {
                        stepNum: 4,
                        text: "Once both of these are in place, we can run a file with babel by using babel-node filename.js instead of node filename.js in our project folder."
                    }
                ]
            },
            {
                name: "ES 2015 Modules",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open Unsolved and go through the code in each file."
                    },
                    {
                        stepNum: 2,
                        text: "Update each file to import or export the data specified in the comments."
                    }
                ]
            },
            {
                name: "Constructors To Classes",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open DigitalPal.js, look through and run the code."
                    },
                    {
                        stepNum: 2,
                        text: "This example uses a constructor function that is able to create DigitalPal objects."
                    },
                    {
                        stepNum: 3,
                        text: "Convert this example to utilize the ES6 class syntax."
                    },
                    {
                        stepNum: 4,
                        text: "The code should still function the exact same way after it's updated."
                    }
                ]
            },
            {
                name: "SpaceX",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open index.js and run the file by running 'babel-node index.js'."
                    },
                    {
                        stepNum: 2,
                        text: "First, create a Launch class (as a separate file) with the following properties:"
                    },
                    {
                        stepNum: 3,
                        text: "details - the value of details in the raw launch object"
                    },
                    {
                        stepNum: 4,
                        text: "number - the value of flight_number in the raw launch object"
                    },
                    {
                        stepNum: 5,
                        text: "succeeded - the value of launch_success in the raw launch object"
                    },
                    {
                        stepNum: 6,
                        text: "year - the value of launch_year in the raw launch object"
                    },
                    {
                        stepNum: 7,
                        text: "It should also have the following methods:"
                    },
                    {
                        stepNum: 8,
                        text: "wasFailure - returns false if the launch succeeded, true otherwise"
                    },
                    {
                        stepNum: 9,
                        text: "launchInfo - returns a string representation of the launch year, launch number, and launch details."
                    },
                    {
                        stepNum: 10,
                        text: "Now that we have our array of Launches, we'll want to use the convenience method we built into the class earlier (wasFailure) to narrow our array down to only those launches which failed."
                    },
                    {
                        stepNum: 11,
                        text: "Now that we have an array of Launch objects of the vehicle we're looking for which we know failed, we can print information about each launch! You can use the launchInfo method we created earlier to do so."
                    }
                ]
            }
        ]
    },
    {
        name: "18-React",
        moduleNum: 18,
        exercises: [
            {
                name: "React Quiz",
                steps: [
                    {
                        stepNum: 1,
                        text: "Begin installing both the Create React App and Yarn packages globally by running the following command in your terminal: 'npm install -g create-react-app yarn'"
                    },
                    {
                        stepNum: 2,
                        text: "While those are installing, work with your group to answer each of the following questions using the ReactJS Documentation:"
                    },
                    {
                        stepNum: 3,
                        text: "In the previous section we just installed two packages, Create React App and Yarn. What are they for?"
                    },
                    {
                        stepNum: 4,
                        text: "What are some benefits of using ReactJS?"
                    },
                    {
                        stepNum: 5,
                        text: "What is a React component? Hint: Check the 'Components and Props' section of the React documentation."
                    },
                    {
                        stepNum: 6,
                        text: "What is the significance of the ReactDOM.render method? Hint: Check the 'ReactDOM' section of the documentation."
                    },
                    {
                        stepNum: 7,
                        text: "What is JSX? Why does Facebook recommend using it? Hint: Check the 'Introducing JSX' section of the documentation."
                    },
                    {
                        stepNum: 8,
                        text: "What does Facebook recommend as the “best way to start building a new React single page application”? Hint: Check the 'Installation' section of the React documentation."
                    },
                    {
                        stepNum: 9,
                        text: "What is Babel? And what role does it play in converting JSX into vanilla JavaScript? Hint: Check the 'Introducing JSX' section of the documentation."
                    },
                    {
                        stepNum: 10,
                        text: "What is the significance of { } curly braces in JSX? Hint: Check the 'Introducing JSX' section of the documentation."
                    },
                    {
                        stepNum: 11,
                        text: "What is a component prop? Hint: Check the 'Components and Props' section of the React documentation."
                    }
                ]
            },
            {
                name: "Hello React",
                steps: [
                    {
                        stepNum: 1,
                        text: "If you haven't already, generate a starter React app using Create React App. You can do this by running create-react-app reactpractice. We will run all of the activity code today inside of this boilerplate, as to avoid constantly reinstalling the same node modules."
                    },
                    {
                        stepNum: 2,
                        text: "Once you have a reactpractice React app generated, delete the src folder inside of your starter app and replace it with the src provided with this activity."
                    },
                    {
                        stepNum: 3,
                        text: "Start the app by running yarn start in your terminal, take a moment to study the HTML code being rendered in the browser at http://localhost:3000."
                    },
                    {
                        stepNum: 4,
                        text: "Then go into the src folder and with your partner, try to answer the following questions:"
                    },
                    {
                        stepNum: 5,
                        text: "What's happening inside of src/components/HelloReact.js? How does it relate to the content being rendered to the browser?"
                    },
                    {
                        stepNum: 6,
                        text: "The HelloReact function is an arrow function. Can you modify this function so it uses a regular function instead (one that uses the function keyword)?"
                    },
                    {
                        stepNum: 7,
                        text: "Open the src/App.js file, what's going on in this file? Try to answer the following questions:"
                    },
                    {
                        stepNum: 8,
                        text: "What does the App function return?"
                    },
                    {
                        stepNum: 9,
                        text: "Why do we import the React library? We aren't using the React keyword anywhere. Is it possible to remove this and still have our code work?"
                    },
                    {
                        stepNum: 10,
                        text: "Open the src/index.js file and go over the code. Notice that we're importing the ReactDOM library. Try to answer the following questions:"
                    },
                    {
                        stepNum: 11,
                        text: "Do you remember what the purpose of ReactDOM.render is? What is it doing?"
                    },
                    {
                        stepNum: 12,
                        text: "Is this where our components are rendered to the DOM?"
                    },
                    {
                        stepNum: 13,
                        text: "Instead of splitting our files up into App, components/HelloReact and index, is it possible to just write our entire Hello World app in the index.js file?"
                    }
                ]
            },
            {
                name: "Hello Div",
                steps: [
                    {
                        stepNum: 1,
                        text: "Replace the src folder of your React app with src. Stop the dev server if it is already running. Start the app in dev mode by running yarn start."
                    },
                    {
                        stepNum: 2,
                        text: "Using the code in the HelloDiv.js file as a starting point, update the HelloDiv function so that it returns the following JSX:"
                    },
                    {
                        stepNum: 3,
                        text: "A heading tag introducing yourself, e.g., <h1>Hello! My name is <insert name here></h1>."
                    },
                    {
                        stepNum: 4,
                        text: "An unordered list containing at least 3 things you like (these can be anything)."
                    }
                ]
            },
            {
                name: "Hello Bootstrap",
                steps: [
                    {
                        stepNum: 1,
                        text: " Replace your application's src folder with Unsolved/src. Stop the dev server if it is already running. Start the app in dev mode by running yarn start."
                    },
                    {
                        stepNum: 2,
                        text: "Add a Bootstrap CDN to the head of your React application's index.html file inside public/index.html."
                    },
                    {
                        stepNum: 3,
                        text: "Inside of the src/components folder, create a brand new file named HelloBootstrap.js. Add code to this file to accomplish the following:"
                    },
                    {
                        stepNum: 4,
                        text: "It should render a Bootstrap Navbar, followed by a Bootstrap Jumbotron, and lastly a Bootstrap Card."
                    },
                    {
                        stepNum: 5,
                        text: "Set the default export of this file to be your HelloBootstrap component."
                    },
                    {
                        stepNum: 6,
                        text: "Update the src/App.js file so that it imports the src/components/HelloBootstrap.js file. Render the HelloBootstrap component instead of the paragraph that is currently being rendered."
                    }
                ]
            },
            {
                name: "JSX Variable",
                steps: [
                    {
                        stepNum: 1,
                        text: "Replace your React application's src folder with Unsolved/src. Stop the dev server if it is already running. Start the app in dev mode by running yarn start."
                    },
                    {
                        stepNum: 2,
                        text: "This activity uses Bootstrap, so make sure you have the CDN added to your public/index.html file."
                    },
                    {
                        stepNum: 3,
                        text: "Open src/components/JSXVariables.js and notice the values being requested inside of the component:"
                    },
                    {
                        stepNum: 4,
                        text: "Your name"
                    },
                    {
                        stepNum: 5,
                        text: "The number of letters in your name"
                    },
                    {
                        stepNum: 6,
                        text: "What you think about React"
                    },
                    {
                        stepNum: 7,
                        text: "Render each value inside of JSX curly braces. You will need to create JavaScript variables in order to accomplish this."
                    }
                ]
            },
            {
                name: "Style Prop",
                steps: [
                    {
                        stepNum: 1,
                        text: "Replace your React application's src folder with Unsolved/src. Stop the dev server if it is already running. Start the app in dev mode by running yarn start."
                    },
                    {
                        stepNum: 2,
                        text: "Open localhost:3000 in your web browser and take a moment to study the rendered application."
                    },
                    {
                        stepNum: 3,
                        text: "Using only inline styles, and without altering any of the CSS files, update each component's CSS styles.'"
                    }
                ]
            },
            {
                name: "Props Calculator",
                steps: [
                    {
                        stepNum: 1,
                        text: "Replace your React application's src folder with Unsolved/src. Stop the dev server if it is already running. Start the app in dev mode by running yarn start."
                    },
                    {
                        stepNum: 2,
                        text: "Open your web browser to localhost:3000. Take a moment to observe the rendered app."
                    },
                    {
                        stepNum: 3,
                        text: "Open src/components/Calculator.js in your editor and take a moment to study the application's code."
                    },
                    {
                        stepNum: 4,
                        text: "Write a component named Math and render one Math component in the place of each question mark."
                    },
                    {
                        stepNum: 5,
                        text: "The Math component should perform some arithmetic using 3 props:"
                    },
                    {
                        stepNum: 6,
                        text: "num1 - a number"
                    },
                    {
                        stepNum: 7,
                        text: "operator -  a string representing an arithmetic operator, e.g. '+', '-', '*', '/'"
                    },
                    {
                        stepNum: 8,
                        text: "num3 - a number"
                    },
                    {
                        stepNum: 9,
                        text: "The Math component should render the result of problem in a span tag. e.g. 19 + 341 = 360"
                    }
                ]
            },
            {
                name: "Props Review",
                steps: [
                    {
                        stepNum: 1,
                        text: "Replace your Create React App's src folder with the provided src folder."
                    },
                    {
                        stepNum: 2,
                        text: "Stop the dev server if it is already running. Start the app in dev mode by running yarn start. Open localhost:3000 in your web browser and take a moment to study the rendered app."
                    },
                    {
                        stepNum: 3,
                        text: "Open src/App.js in your editor and notice how the SpongebobCard, MrKrabsCard, and SquidwardCard are being rendered inside of Wrapper, which is in turn being rendered inside of the App component."
                    },
                    {
                        stepNum: 4,
                        text: "Open up each component's files in turn and briefly study the JSX being returned by each. Most importantly, notice how all of the card components render very similar JSX. This isn't very DRY code. We'll fix this by creating a brand new FriendCard component and rendering it once for each friend. We'll pass down the differentiating content in the form of props."
                    },
                    {
                        stepNum: 5,
                        text: "Take a moment to study the src/friends.json file. This file contains the data that makes each friend card unique from one another. We'll use this file to pass props down to our new FriendCard component."
                    },
                    {
                        stepNum: 6,
                        text: "Import the src/friends.json file into src/App.js."
                    },
                    {
                        stepNum: 7,
                        text: "Inside of src/App.js, remove the imports for each friend's card, and remove the JSX rendering each card inside of this file."
                    },
                    {
                        stepNum: 8,
                        text: "Create a brand new component named FriendCard."
                    },
                    {
                        stepNum: 9,
                        text: "The FriendCard component can initially return the same JSX as SpongebobCard, and have its own CSS file named FriendCard.css which should have the same contents as SpongbobCard.css."
                    },
                    {
                        stepNum: 10,
                        text: "Require the FriendCard component inside of src/App.js and render it inside of the Wrapper component. Before going any further, check your browser. If successful, you should only see one card being rendered."
                    },
                    {
                        stepNum: 11,
                        text: "Still inside of src/App.js, use the first friend object in the friends JSON file to pass the following props down to your rendered FriendCard component."
                    },
                    {
                        stepNum: 12,
                        text: "Modify the FriendCard component so that it accepts and renders all of the passed props in place of the currently hard coded values. Once complete, check your browser to make sure the first FriendCard is still being properly rendered."
                    },
                    {
                        stepNum: 13,
                        text: "Inside of src/App.js, render another FriendCard component for the second and third piece of friend data. Pass down the appropriate JSON data for each as props. If successful, you should see each friend being rendered to the browser, utilizing the same same FriendCard component three times."
                    }
                ]
            },
            {
                name: "Component Map",
                steps: [
                    {
                        stepNum: 1,
                        text: "Replace your React application's src folder with src. Stop the dev server if it is already running. Start the app in dev mode by running yarn start."
                    },
                    {
                        stepNum: 2,
                        text: "This activity uses Bootstrap. Be sure to add the Bootstrap CDN to your React app's index.html file"
                    },
                    {
                        stepNum: 3,
                        text: "Open the application in your web browser and study the rendered application. Then take a minute to study the included components:"
                    },
                    {
                        stepNum: 4,
                        text: "Modify the List component so that inside of its ul tags, it renders one li tag for each item in array of grocery objects being passed via props. Each li tag should display the text property of each grocery object. The array map method should be used for this."
                    },
                    {
                        stepNum: 5,
                        text: "For styling purposes, give each li tag a class of list-group-item."
                    }
                ]
            },
            {
                name: "Decrement Counter",
                steps: [
                    {
                        stepNum: 1,
                        text: "Copy the src folder into your Create React App boilerplate. Stop the dev server if it is already running. Start the app in dev mode by running yarn start."
                    },
                    {
                        stepNum: 2,
                        text: "This example uses Bootstrap. Be sure to add the Bootstrap CDN to your index.html file."
                    },
                    {
                        stepNum: 3,
                        text: "Open localhost:3000 in your web browser. This application's starter code is identical to the last example."
                    },
                    {
                        stepNum: 4,
                        text: "Add code to the Counter component to add a Decrement button which decreases the value of this.state.count by one each time it is clicked."
                    }
                ]
            },
            {
                name: "Friends List Refactor",
                steps: [
                    {
                        stepNum: 1,
                        text: "Replace your React App's src folder with Unsolved/src. Stop the dev server if it is already running. Start the app in dev mode by running yarn start."
                    },
                    {
                        stepNum: 2,
                        text: "Open localhost:3000 in your browser and take a moment to study the rendered app."
                    },
                    {
                        stepNum: 3,
                        text: "Attempt to complete each of the following:"
                    },
                    {
                        stepNum: 4,
                        text: "Refactor the App component so that rather than rendering each FriendCard component manually, use a map to render one FriendCard component for each object in the friends JSON, passing in the appropriate props."
                    },
                    {
                        stepNum: 5,
                        text: "Refactor the App component so that it's a class component. Set the component's initial state to the friends JSON array. Inside of the render method, map over this.state.friends to render each FriendCard component."
                    },
                    {
                        stepNum: 6,
                        text: "Add functionality to the application so that when the red X icon on a FriendCard is clicked, that FriendCard is removed from the page. To accomplish this, you should define a method inside of App which accepts an id parameter, and then utilize filter to create a new array of friends without the passed id. Then set this.state.friends to this new filtered array. You'll want to pass this method into each FriendCard component and attach an onClick listener to the remove span. "
                    }
                ]
            },
            {
                name: "Fun With Forms",
                steps: [
                    {
                        stepNum: 1,
                        text: "Replace your React application's src folder with Unsolved/src. Stop the dev server if it is already running. Start the app in dev mode by running yarn start."
                    },
                    {
                        stepNum: 2,
                        text: "Update the Form component to add the following:"
                    },
                    {
                        stepNum: 3,
                        text: "A new input field that updates this.state.password."
                    },
                    {
                        stepNum: 4,
                        text: "Whenever a user clicks the Submit button, add code to accomplish the following:"
                    },
                    {
                        stepNum: 5,
                        text: "If the user hasn't provided a first and last name, throw an alert saying: 'Fill out your first and last name please!'."
                    },
                    {
                        stepNum: 6,
                        text: "If the user has provided a first and last name, but their password is less than 6 characters, throw an alert saying, 'Choose a more secure password,' followed by the full name. E.g. 'Choose a more secure password, John Smith!'"
                    },
                    {
                        stepNum: 7,
                        text: "Else, throw an alert to greet the user. E.g. 'Hello, John Smith!'."
                    },
                    {
                        stepNum: 8,
                        text: "Do not allow the user to type in a password that is longer than 15 characters. i.e. the length of the password state should never go beyond 15 characters."
                    }
                ]
            },
            {
                name: "Formal Review",
                steps: [
                    {
                        stepNum: 1,
                        text: "Replace your React application's src folder with Unsolved/src"
                    },
                    {
                        stepNum: 2,
                        text: "Start the application in dev mode by running yarn start in your terminal."
                    },
                    {
                        stepNum: 3,
                        text: "Open your browser to localhost:3000 and study the rendered application."
                    },
                    {
                        stepNum: 4,
                        text: "Update this application to accomplish the following:"
                    },
                    {
                        stepNum: 5,
                        text: "When the user types into the input fields, the values should be captured to the component’s state."
                    },
                    {
                        stepNum: 6,
                        text: "When the form is submitted, throw an alert for the user displaying their chosen username and password values. Then clear the input fields."
                    }
                ]
            },
            {
                name: "AJAX",
                steps: [
                    {
                        stepNum: 1,
                        text: "Replace your React application's src folder with Unsolved/src."
                    },
                    {
                        stepNum: 2,
                        text: "This example uses Bootstrap, so be sure to add the Bootstrap CDN to your application's index.html file."
                    },
                    {
                        stepNum: 3,
                        text: "Be sure to install the axios library by running yarn add axios in your terminal."
                    },
                    {
                        stepNum: 4,
                        text: "Stop the dev server if it is already running. Start the app in dev mode by running yarn start."
                    },
                    {
                        stepNum: 5,
                        text: "Open your browser to localhost:3000 and study the rendered application."
                    },
                    {
                        stepNum: 6,
                        text: "This application is supposed to allow users to search for the name of a movie via the form on the right of the page, and display information from the OMDB API on the left side. Currently the application isn't fully functional."
                    },
                    {
                        stepNum: 7,
                        text: "Open the src/OmdbContainer.js and add the following code:"
                    },
                    {
                        stepNum: 8,
                        text: "Add a componentDidMount method which should utilize the API.js module to query the OMDB API for the movie 'The Matrix' when the component mounts. Then update this component's result state with the result of the AJAX request. You can verify you completed this step correctly by refreshing the page in your web browser. If successful, the application should display information about the movie 'The Matrix' when the page first loads."
                    },
                    {
                        stepNum: 9,
                        text: "Add a handleInputChange method which should be called whenever the user types into the input field. Inside of this method, set this.state.search equal to the new value of the input field. You can verify you've completed this step correctly if you can now type into the input field."
                    },
                    {
                        stepNum: 10,
                        text: "Add a handleFormSubmit method which should be called when the form is submitted. Inside of this method, utilize the API module to search the OMDB API for the value of this.state.search. Then update this component's result state with the result. You can verify you completed this step correctly by searching for the name of a movie. If successful, you should see the movie poster and some information about the movie appear in the left panel."
                    }
                ]
            },
            {
                name: "Conditional Render",
                steps: [
                    {
                        stepNum: 1,
                        text: "Replace your application's src folder with Unsolved/src. Stop the dev server if it is already running. Start the app in dev mode by running yarn start."
                    },
                    {
                        stepNum: 2,
                        text: "This application uses Bootstrap, so make sure you're including the Bootstrap CSS CDN."
                    },
                    {
                        stepNum: 3,
                        text: "Navigate to localhost:3000 in your web browser and take a moment to study the rendered application."
                    },
                    {
                        stepNum: 4,
                        text: "At the top of the page there's a Bootstrap NavTabs component. Whenever a nav element is clicked, the nav element goes into an 'active' state. Whenever a nav item is clicked, it sets this.state.currentPage inside of PortfolioContainer to the selected navigation item."
                    },
                    {
                        stepNum: 5,
                        text: "Now add code to PortfolioContainer so that depending on the currently selected page, a different component is rendered underneath the NavTabs component. Example:"
                    },
                    {
                        stepNum: 6,
                        text: "Render the About component when this.state.currentPage === 'About'"
                    },
                    {
                        stepNum: 7,
                        text: "Render the Blog component when this.state.currentPage === 'Blog'"
                    },
                    {
                        stepNum: 8,
                        text: "Render the Contact component when this.state.currentPage === 'Contact'"
                    },
                    {
                        stepNum: 9,
                        text: "Render the Home component when this.state.currentPage === 'Home'"
                    }
                ]
            },
            {
                name: "Pupster App",
                steps: [
                    {
                        stepNum: 1,
                        text: "Start by scaffolding out a new starter React app by running the following command in your terminal create-react-app pupster."
                    },
                    {
                        stepNum: 2,
                        text: "cd into the pupster directory and run the following command to install React Router and Axios: '  yarn add axios react-router-dom'"
                    },
                    {
                        stepNum: 3,
                        text: "Recommended: Add the Bootstrap and Font Awesome CDNs to your application's index.html file."
                    },
                    {
                        stepNum: 4,
                        text: "Open https://pupster.netlify.com/ in your web browser and take a few moments to study the example application. You will be basing your Pupster app off of this example."
                    },
                    {
                        stepNum: 5,
                        text: "Your Pupster app should implement each of these three pages and their basic functionality, don't spend much time styling your app until you have completed everything else."
                    },
                    {
                        stepNum: 6,
                        text: "Your Pupster app should display a navigation bar that is present on every route."
                    },
                    {
                        stepNum: 7,
                        text: "Begin with routing. For each route, render a different component for each page without worrying about building in any behaviors yet. Then work on implementing the most basic functionality for each page, one piece at a time."
                    }
                ]
            },
            {
                name: "React Recipes",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open Unsolved in your editor. From the root of the project folder, run yarn install to install the required dependencies."
                    },
                    {
                        stepNum: 2,
                        text: "Run yarn start to start the React app and Express server. Visit localhost:3000 in your web browser to view the app."
                    },
                    {
                        stepNum: 3,
                        text: "Enter a search term, e.g. 'burgers' in the input field and submit. This won't have any visible affect on the page yet, but should submit an AJAX request and log the response to the console. Take a moment to study the response logged."
                    },
                    {
                        stepNum: 4,
                        text: "For this section the only file you will need to modify is App.js. Take a few moments to study the code in the file."
                    },
                    {
                        stepNum: 5,
                        text: "Using the RecipeList and RecipeListItem components, add code to render the array of recipes where indicated in the file."
                    },
                    {
                        stepNum: 6,
                        text: "The RecipeList component renders a ul tag and accepts children. The RecipeListItem component renders an li tag with some formatting to hold the recipe's title, thumbnail, etc."
                    },
                    {
                        stepNum: 7,
                        text: "Using a RecipeList component as a container, map over this.state.recipes and render one RecipeListItem component for each recipe object in this.state.recipes."
                    },
                    {
                        stepNum: 8,
                        text: "Pass the rendered RecipeListItem components each property of their recipe object."
                    },
                    {
                        stepNum: 9,
                        text: "Test your solution by searching for a recipe in your browser."
                    },
                    {
                        stepNum: 10,
                        text: "Currently the rendered RecipeListItem components are displaying hard coded recipe data. Modify the RecipeListItem component file so that it utilizes all of the passed props where appropriate. Look at the hard coded data to determine how each prop should be used."
                    },
                    {
                        stepNum: 11,
                        text: "If completed successfully, searching for a recipe in your browser should render dynamic results relevant to the search."
                    }
                ]
            },
            {
                name: "AJAX Books",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open the Unsolved folder in your editor and run yarn install at the project's root."
                    },
                    {
                        stepNum: 2,
                        text: "This application uses a Mongo database, so be sure to start mongod."
                    },
                    {
                        stepNum: 3,
                        text: "In order to initially populate the database, run the following command at the project root: yarn seed."
                    },
                    {
                        stepNum: 4,
                        text: "This should insert a few records into the MongoDB."
                    },
                    {
                        stepNum: 5,
                        text: "Run yarn start at the project root to start the application."
                    },
                    {
                        stepNum: 6,
                        text: "Open your browser to localhost:3000 and take a moment to study the rendered application."
                    },
                    {
                        stepNum: 7,
                        text: "Open up client/src/pages/Books.js and add code so that when the component mounts, it performs an AJAX request to retrieve all of the books in the database. Once the AJAX request is complete, it should set this.state.books equal to the array of books."
                    },
                    {
                        stepNum: 8,
                        text: "If successful, a list of books should be rendered on the right side of the page."
                    }
                ]
            },
            {
                name: "AJAX Form Delete",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open the Unsolved folder and install dependencies by running yarn install at the project root."
                    },
                    {
                        stepNum: 2,
                        text: "Start the app by running yarn start from the project root."
                    },
                    {
                        stepNum: 3,
                        text: "Once the app starts open your browser to localhost:3000."
                    },
                    {
                        stepNum: 4,
                        text: "Open Unsolved."
                    },
                    {
                        stepNum: 5,
                        text: "Open the Books.js file. Add code so that this.state.title, this.state.author, and this.state.synopsis are updated as their corresponding Input components are updated (see the name properties on each Input). Any props you attach to the Input components will be passed down to their underlying elements, so there's no need to modify any code other than the code inside of Books.js."
                    },
                    {
                        stepNum: 6,
                        text: "Add code so that when the FormBtn is clicked, an AJAX request is performed saving the new book. An object containing the new book's title, author and synopsis should be passed into the API.saveBook method."
                    },
                    {
                        stepNum: 7,
                        text: "Add code to the Books.js file so that when the DeleteBtn (✗ button) component is clicked, its book is deleted from the database and the books displayed are updated. To accomplish this you should create a new method (deleteBook) on the Books component, which calls the API.deleteBook method when the DeleteBtn is clicked."
                    }
                ]
            },
            {
                name: "React Router",
                steps: [
                    {
                        stepNum: 1,
                        text: "Open the Unsolved folder and install dependencies by running yarn install at the project root."
                    },
                    {
                        stepNum: 2,
                        text: "Start the app by running yarn start from the project root."
                    },
                    {
                        stepNum: 3,
                        text: "Once the app starts open your browser to localhost:3000."
                    },
                    {
                        stepNum: 4,
                        text: "Open App.js."
                    },
                    {
                        stepNum: 5,
                        text: "Set up React Router inside of the client/src/App.js file."
                    },
                    {
                        stepNum: 6,
                        text: "Notice that inside of the pages folder we have a NoMatch component. This is the component for our 404 page."
                    },
                    {
                        stepNum: 7,
                        text: "Add a route for the new NoMatch component. This should only render if no other routes are matched. e.g. /sjdfhjsdhfjsa or /notarealroute/lalala should both render the NoMatch component page."
                    },
                    {
                        stepNum: 8,
                        text: "Notice that in the pages folder we have a Detail component. This component displays additional information about a book."
                    },
                    {
                        stepNum: 9,
                        text: "Add a route for the the new Detail component. This should render when the /books/:id path is matched. e.g. if a book's _id is 59a39cf2549cf482c814333f, then /books/59a39cf2549cf482c814333f should render its book Detail page."
                    },
                    {
                        stepNum: 10,
                        text: "Inside of the Detail component, add code so that when the component mounts, we retrieve the book for the rendered route and save it to this.state.book. e.g. when the route is /books/59a39cf2549cf482c814333f, an AJAX request should be made to get the book with an _id of 59a39cf2549cf482c814333f. If completed successfully, you should see the book's synopsis on this page."
                    }
                ]
            },
            {
                name: "Deployment",
                steps: [
                    {
                        stepNum: 1,
                        text: "Deploy the React Reading List application to Heroku. Make sure to perform the following:"
                    },
                    {
                        stepNum: 2,
                        text: "Initialize the project folder as a git repo."
                    },
                    {
                        stepNum: 3,
                        text: "Create a Heroku app for the React Reading List App."
                    },
                    {
                        stepNum: 4,
                        text: "Add a MongoLab Addon for the React Reading List Heroku app."
                    },
                    {
                        stepNum: 5,
                        text: "Set up React Router inside of the client/src/App.js file."
                    },
                    {
                        stepNum: 6,
                        text: "Add and commit your changes before pushing up to heroku."
                    }
                ]
            }
        ]
    }
];

export default moduleSeed;