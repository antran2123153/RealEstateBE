const mongoose = require("mongoose");

const localSchema = new mongoose.Schema({
  logo: { type: String, required: true },
  name: { type: String, required: true },
  facebook: { type: String, required: true },
  youtube: { type: String, required: true },
  twiter: { type: String, required: true },
  gmail: { type: String, required: true },
  address: { type: String, required: true },
  phonenumber1: { type: String, required: true },
  phonenumber2: { type: String, required: true },
  description: { type: String },
  footerImg: [String],
  rightSideImg: [String],
});

module.exports = mongoose.model("local", localSchema);
