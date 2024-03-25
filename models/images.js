const mongoose = require("mongoose");

const imagesSchema = new mongoose.Schema({
  postTitle: { type: String },
  datePosted: { type: Date },
  postedBy: { type: Number },
  tags: { type: Array },
  filePath: { type: String },
  postId: { type: String },
});

imagesSchema.index({ datePosted: -1 });

module.exports = mongoose.model("Image", imagesSchema);
