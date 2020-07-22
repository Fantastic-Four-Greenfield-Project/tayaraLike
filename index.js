//imports
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const User = require("./userSchema.js");
const db = require("./databse.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Items = require('./itemsSchema')
process.env.SECRET_KEY = "secret"
//set static folder to serve
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/dist"));
//TEST
// app.post("/", (req, res) => {
//   Items.create(req.body).then(item => {
//     res.send("item add")
//   })
// })
//// MIMOUNI YOSRI GET ALL THE ITEMS FROM THE DATA BASE TO THE GUESTSEARCH COMPONENT
app.get('/post', (req, res) => {
  Items.find({}, (err, docs) => {
    res.send(docs)
  });
})
////ABDELLI HOUSSEM EDDINE SIGNUP COMPONENT 
app.post("/signUp", (req, res) => {
  let newUser = {
    adressMail: req.body.adressMail,
    userName: req.body.userName,
    password: req.body.password,
  };
  User.findOne({ adressMail: req.body.adressMail })
    .then((user) => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          newUser.password = hash;
          User.create(newUser)
            .then((user) => {
              res.json("User Registered");
            })
            .catch((err) => {
              res.send("Server error");
            });
        });
      } else {
        res.json("User exists");
      }
    })
    .catch((err) => {
      res.send("server error");
    });
});
////ABDELLI HOUSSEM EDDINE SIGNIN COMPONENT 
app.post("/signIn", (req, res) => {
  User.findOne({ adressMail: req.body.adressMail })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            adressMail: user.adressMail,
            userName: user.userName,
          }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 2020,
          })
          res.send(token)
        } else {
          res.json("User exists in the database but password is wrong");
        }
      } else {
        res.json("User Does not exists in the Data Base");
      }
    })
    .catch((err) => {
      res.send("server error");
    })
});
//OMAR YAKOUBI TO CREATE A POST
app.post("/createUsersPosts", (req, res) => {
  Items.create(req.body).then((user) => {
    res.send("USER POST CREATED");
  });
});
// OMAR YAKOUBI GET POSTS
app.get("/getAllPosts", (req, res) => {
  Items.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
////YAKOUBI OMAR DELETE POSTS
app.delete("/deletePost/:id", (req, res) => {
  Items.findByIdAndRemove({ _id: req.params.id }, (err, result) => {
    if (err) {
      console.log("error");
      res.send(err);
    } else {
      console.log("deleted");
      res.send(result);
    }
  });
});
//OMAR YAKOUBI GET THE LIST OF THE USERS
app.get("/retriveAllTheUsers", (req, res) => {
  User.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
//OMAR YAKOUBI TO DELETE A USER OR ADMIN.
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
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
