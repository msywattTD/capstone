const express = require("express");
const router = express.Router();
const Image = require("../models/images");

//GET ROUTES ------------------------------------------------------------------------------------
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

//POST ROUTES -------------------------------------------------------------------------------------
//create a new post
router.post("/newPost", async (req, res) => {
  let newPost = new Image({
    postTitle: req.body.postTitle,
    datePosted: req.body.datePosted,
    postedBy: req.body.postedBy,
    tags: req.body.tags,
    filePath: req.body.filePath,
  });
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

module.exports = router;
