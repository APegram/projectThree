import passport from "passport";
import {Strategy as GoogleStrategy} from "passport-google-oauth20";
import { clientID, clientSecret } from "../../config"

passport.use(
    new GoogleStrategy({
        //options for the google Strat
        callbackURL: "/auth/google/redirect",
        clientID: clientID,
        clientSecret: clientSecret

    }, (accessToken, refreshToken, profile, done) => {
        console.log("passport callback function fired");
        console.log(profile);
    })
)