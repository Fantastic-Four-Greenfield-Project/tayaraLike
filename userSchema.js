// imports
const mongoose = require("mongoose");
// schema USER declarations
const userSchema = new mongoose.Schema({
  adressMail: String,
  userName: String,
  password: String,
  categories: String,
  userType: String,
  img: String,
  description: String,
  price: Number
});
// model USER declaration
const User = new mongoose.model("User", userSchema);
//exports
module.exports = User;