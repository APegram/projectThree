import express from "express";
import path from "path";
import mongoose from "mongoose";
import dbRouter from "./routes/dbRoutes";
import bodyParser from "body-parser";
import passport from "passport";
import config from "../config";
import Chatkit from "pusher-chatkit-server";
import cors from "cors";

const PORT = process.env.PORT || 3001;
const app = express();

const chatkit = new Chatkit({
  instanceLocator: "v1:us1:c7ad5921-5ae9-48a8-9316-f0f2eebf4074",
  key: "87b2c7c0-d145-4941-9703-1e97e75aead4:DGk9FaGqHtIrmIIkGuh8pEtqAUMLZFsDpIG6xZvx2Nk="
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
}

//Routers
app.use(dbRouter);

// Mongoose set up
mongoose.Promise = Promise;
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/ProjectThree"
);
mongoose.connection.on("error", err => {
    console.log(`Mongoose connection err:\n${err}`);
});

//Setting up passport middleware
app.use(passport.initialize());

//load passport 'local' strategy
import localSignupStrategy from "./passport/local-signup";
import localLoginStrategy from "./passport/local-login";
import googleLoginStrategy from "./passport/google-login"
passport.use("local-signup", localSignupStrategy);
passport.use("local-login", localLoginStrategy);
passport.use("google-login", googleLoginStrategy);

//adding authentication middleware and wrap api routes in authentication
import isAuth from "./middleware/auth-check";
app.use("/api", isAuth);

//Adding routes
import authRoutes from "./routes/api/auth";
import apiRoutes from "./routes/api/index";
app.use("/auth", authRoutes);
app.use("/api", apiRoutes);

// Serve the client/build folder in the static call
// This ensures that all static resources are served, rather than serving index.html to every GET request
// SDG
app.use(express.static(path.join(__dirname, '../client/build')));

app.post("/users", cors(), (req, res) => {
  const fullName = req.body.username;
  const id = req.body.id;
  chatkit.createUser({
    id: id,
    name: fullName
  })
  .then(() => {
    res.sendStatus(201)
  })
  .catch(error => {
    if (error.error_type === "services/chatkit/user_already_exists") {
      res.sendStatus(200)
    }
    else {
      res.status(error.status).json(error);
    }
  });
});

app.post("/authenticate", cors(), (req, res) => {
  const authData = chatkit.authenticate({ userId: req.query.user_id })
  res.status(authData.status).send(authData.body)
})
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
