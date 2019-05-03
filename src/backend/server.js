const mongoose = require("mongoose");
const express = require("express");
const userRouter = require("./router");
const bodyParser = require("body-parser");
const url = "mongodb://localhost:27017/userlist";
const connect = mongoose.connect(url, { useNewUrlParser: true });
const port = 8888;

connect.then(
  db => {
    console.log("Connected correctly to server");
  },
  err => {
    console.log(err);
  }
);
const app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
};
app.use(allowCrossDomain);

app.use(userRouter);

app.use(function(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
