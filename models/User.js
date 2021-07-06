const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
  phonenumber: { type: String },
  text: { type: String },
});

module.exports = mongoose.model("user", userSchema);
