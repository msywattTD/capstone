const express = require("express");
const router = express.Router();
const Image = require("../models/images");

//GET ROUTES ------------------------------------------------------------------------------------
//get all images || default sort by date (+++)
router.get("/", async (req, res) => {
  let imagesList = await Image.find();
  res.send(imagesList);
});

//get all images || default sort by date (+++)
router.get("/home", async (req, res) => {
  let imagesList = await Image.find().limit(5);
  res.send(imagesList);
});

//get all images by a user
router.get("/user=:userId", async (req, res) => {
  let imagesList = await Image.find({ postedBy: req.params.userId });
  res.send(imagesList);
});

//get a single image by post title || may modify this to post count after live
router.get("/:postId", async (req, res) => {
  let imagesList = await Image.find({ _id: req.params.postId });
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

//PATCH ROUTES ---------------------------------------------------------------------------------
//edit a post
router.patch("/editPost/:postTitle", async (req, res) => {
  const post = await Image.findOne({ postTitle: req.params.postTitle });
  try {
    (post.postTitle = req.body.postTitle || post.postTitle),
      (post.datePosted = req.body.datePosted || post.datePosted),
      (post.postedBy = req.body.postedBy || post.postedBy),
      (post.tags = req.body.tags || post.tags),
      (post.filePath = req.body.filePath || post.filePath);
    post.save();
    res.status(200).json({ post });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

//DELETE ROUTES --------------------------------------------------------------------------------
//delete a post
router.delete("/deletePost/:postTitle", async (req, res) => {
  await Image.deleteOne({ postTitle: req.params.postTitle });
  res
    .status(200)
    .json({ message: `${req.params.postTitle} has been deleted.` });
});

module.exports = router;
