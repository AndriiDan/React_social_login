// використити бібліотеку
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "737459794686-is409vhe0v4qip7aog387j5crer27jvu.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    // callbackURL: "http://localhost:5000/auth/google/callback"
    callbackURL: "/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
));

passport.serializeUser((user, done) => {
    done(null, user)
});

passport.deserializeUser((user, done) => {
    done(null, user)
});