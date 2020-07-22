const mongoose = require("mongoose");

const userPosts = new mongoose.Schema({
    userName: String,
    categories: String,
    img: String,
    description: String,
    price: String,
});

const UserPosts = new mongoose.model("UserPosts", userPosts);

module.exports = UserPosts