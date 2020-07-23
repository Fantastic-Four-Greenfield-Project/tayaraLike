const mongoose = require("mongoose");
// schema ITEMS declarations
const ItemsSchema = new mongoose.Schema({
    adressMail: String,
    categories: String,
    img: { type: String, data: Buffer },
    description: String,
    price: Number
});
//model ITEMS declaration
const Items = new mongoose.model("Items", ItemsSchema);

module.exports = Items;
