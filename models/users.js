const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  posterId: { type: Number },
  name: { type: String },
});

module.exports = mongoose.model("User", usersSchema);
