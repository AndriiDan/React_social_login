// використити бібліотеку
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "737459794686-is409vhe0v4qip7aog387j5crer27jvu.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "180994ee7d12d7aff368";
GITHUB_CLIENT_SECRET = "6c1df27b3f2e74cb0e30a4edc9481c50f15a7de4";

FACEBOOK_APP_ID = "id";
FACEBOOK_APP_SECRET = "secret";

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

passport.use(new GithubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
));

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback"
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