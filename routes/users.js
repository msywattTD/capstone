const express = require("express");
const router = express.Router();
const User = require("../models/users");

//get all users
router.get("/", async (req, res) => {
  let usersList = await User.find();
  res.send(usersList);
});

//create a new user
router.post("/newUser", async (req, res) => {
  let newUser = new User({
    name: req.body.name,
    handle: req.body.handle,
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
});

//edit a user's info
router.patch("/editUser/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  try {
    (user.name = req.body.name || user.name),
      (user.handle = req.body.handle || user.handle);
    user.save();
    res.status(203).json({ user });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
});

//delete a user
router.delete("/deleteUser/:id", async (req, res) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  let usersList = await User.find();
  res.send(usersList); //returns the remaining users
});

module.exports = router;
