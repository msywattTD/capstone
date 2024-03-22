const mongoose = require("mongoose");

const imagesSchema = new mongoose.Schema({
  datePosted: { type: Date },
  postedBy: { type: Number },
  tags: { type: Array },
  filePath: { type: String },
});

module.exports = mongoose.model("Image", imagesSchema);
