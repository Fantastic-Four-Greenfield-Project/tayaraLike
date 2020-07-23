// imports declaration
const mongoose = require("mongoose");
//mongoose connection
mongoose.connect("mongodb://localhost/tayaraLike", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//mongoose connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DATA BASE CONNECTED");
});
//exports
module.exports = db;
