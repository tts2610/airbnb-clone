var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");
var expRouter = require("./routes/experience");
var viewRouter = require("./routes/review");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.route("*").all((req, res, next) => {
    next(new Error("notFound"));
});

const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

mongoose
    .connect(process.env.DB, {
        // some options to deal with deprecated warning, you don't have to worry about them.
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => console.log("connected to database"));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/experience", expRouter);
app.use("/review", viewRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    if (err) {
        res.send(err.message);
    }
});

module.exports = app;