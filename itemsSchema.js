const mongoose = require("mongoose");
// schema ITEMS declarations
const ItemsSchema = new mongoose.Schema({
    userName: String,
    password: String,
    categories: String,
    name: String,
    img: String,
    description: String,
    price: Number,
});
//model ITEMS declaration
const Items = new mongoose.model("Items", ItemsSchema);

module.exports = Items;
