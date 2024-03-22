const express = require("express");
const router = express.Router();
const Image = require("../models/images");

//get all images || default sort by date (+++)
router.get("/", async (req, res) => {
  let imagesList = await Image.find();
  res.send(imagesList);
});

module.exports = router;
