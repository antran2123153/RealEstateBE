const mongoose = require("mongoose");

const contractSchema = new mongoose.Schema({
  fullname: { type: String },
  phonenumber: { type: String },
  birthday: { type: String },
  address: { type: String },
  email: { type: String },
});

module.exports = mongoose.model("contract", contractSchema);
