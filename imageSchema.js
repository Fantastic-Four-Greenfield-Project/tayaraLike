const mongoose = require("mongoose");
// schema ITEMS declarations
const ImageSchema = new mongoose.Schema({
    profileImg: { type: String },
});
//model ITEMS declaration
const Image = new mongoose.model("Image", ImageSchema);

module.exports = Image;
