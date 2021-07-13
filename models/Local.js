const mongoose = require("mongoose");

const localSchema = new mongoose.Schema({
  logo: { type: String },
  name: { type: String },
  facebook: { type: String },
  youtube: { type: String },
  twiter: { type: String },
  gmail: { type: String },
  address: { type: String },
  phonenumber: { type: String },
  description: { type: String },
  rightSideImg: { type: String },
});

module.exports = mongoose.model("local", localSchema);
