const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  mainImg: { type: String },
  introImg: [String],
  date: { type: String },
  name: { type: String },
  price: { type: String },
  area: { type: Number },
  address: { type: String },
  descriptions: { type: String },
  descriptionsImg: { type: String },
  location: { type: String },
  locationImg: { type: String },
  utilities: { type: String },
  utilitiesImg: { type: String },
  ground: { type: String },
  groundImg: { type: String },
  policy: { type: String },
  policyImg: { type: String },
  state: { type: String, required: true, default: "new" },
  maps: { type: String },
  video: { type: String },
});

module.exports = mongoose.model("project", projectSchema);
