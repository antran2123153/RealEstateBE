const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  mainImg: { type: String },
  introImg: [String],
  date: { type: String },
  name: { type: String },
  price: { type: String },
  area: { type: String },
  address: { type: String },
  body: [String],
  maps: { type: String },
  video: { type: String },
  priority: { type: Number },
});

module.exports = mongoose.model("project", projectSchema);
