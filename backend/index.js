const express = require("express");
const passport = require("passport");
const cors = require("cors");
const cookieSession = require("cookie-session");


// create express app
const app = express();

app.use(cookieSession({
    name: "session",
    keys: ["dan"],
    maxAge: 24 * 60 * 60 * 100
}))

// initialize passport library
app.use(passport.initialize());

app.use(passport.session());

app.use(cors({
    // client server
    origin: "http://localhost:3000",
    maehods: "GET,POST,PUT,DELETE",
    credentials: true,
}))

console.log("hello");

// port number, afer connection write something
app.listen("5000", () => {
    console.log("Server is running!")
});