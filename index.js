//imports
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/dist"));
const port = process.env.PORT || 3000;

// INITIATE DATABASE DONT TOUCH
mongoose.connect("mongodb://localhost/tayaraLike", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DATA BASE CONNECTED");
});

const userSchema = new mongoose.Schema({
  userName: String,
  userType: String,
  password: String,
  categories: String,
  img: String,
  description: String,
  price: Number,
});

const adminSchema = new mongoose.Schema({
  userName: String,
  userType: String,
  password: String,
  categories: String,
  img: String,
  description: String,
  price: Number,
});

const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);

//ROUTERS

app.post("/", (req, res) => {
  User.create(req.body).then((user) => {
    res.send("USER INSERTED TO THE DATABASEEEEEEEEE");
  });
});

app.get("/retriveAllTheUsers", (req, res) => {
  User.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/deleteUserById/:id", (req, res) => {
  User.findByIdAndRemove({ _id: req.params.id }, (err, result) => {
    if (err) {
      console.log("error");
      res.send(err);
    } else {
      console.log("deleted");
      res.send(result);
    }
  });
});

//INITIATE SEREVR
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
