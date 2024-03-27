const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

const Image = require("./models/images.js");
const User = require("./models/users.js");

const seedData = require("./data/seedData.js");
const allUsers = require("./data/users.js");

const app = express();
const PORT = process.env.PORT || 3000;

//connect to db
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database."));

//MIDDLEWARE
app.use(express.json());
app.use(cors());

//ROUTES
const imageRouter = require("./routes/images");
app.use("/images", imageRouter);

const userRouter = require("./routes/users");
app.use("/users", userRouter);

app.get("/seed", async (req, res) => {
  await Image.deleteMany({});
  await Image.create(seedData);

  await User.deleteMany({});
  await User.create(allUsers);

  res.json({ message: "DB seed data created." });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
