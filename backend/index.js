const express = require("express");
const passportSetup = require("./passport");
// require("./passport");
const passport = require("passport");
const cors = require("cors");
const cookieSession = require("cookie-session");
const authRoute = require("./routes/auth");


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
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}));

app.use("/auth", authRoute);

console.log("hello");

// port number, afer connection write something
app.listen("5000", () => {
    console.log("Server is running!")
});