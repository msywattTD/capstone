const express = require("express");
const router = express.Router();
const Image = require("../models/images");

//get all images || default sort by date (+++)
router.get("/", async (req, res) => {
  let imagesList = await Image.find();
  res.send(imagesList);
});

//get all images by a user
router.get("/user=:userId", async (req, res) => {
  let imagesList = await Image.find({ postedBy: req.params.userId });
  res.send(imagesList);
});

//get a single image by post title || may modify this to post count after live
router.get("/:postTitle", async (req, res) => {
  let imagesList = await Image.find({ postTitle: req.params.postTitle });
  res.send(imagesList);
});
module.exports = router;
