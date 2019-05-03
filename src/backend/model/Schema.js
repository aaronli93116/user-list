const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
  firstName: String,
  lastName: String,
  sex: String,
  age: String,
  password1: String,
  password2: String
});

var Users = mongoose.model("Users", userSchema);

module.exports = Users;
