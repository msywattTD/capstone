const mongoose = require("mongoose");
const Image = require("../models/images");

const seedData = [
  {
    datePosted: "March 21, 2024 15:00:00",
    postedBy: 0,
    tags: ["dog", "flowers", "field", "sitting", "gold", "happy", "puppy"],
    filePath:
      "C:/Users/typic/Documents/GitHub/RTT-125/Capstone/Backend/data/images/dog1.jpg",
  },
  {
    datePosted: "March 21, 2024 15:01:00",
    postedBy: 1,
    tags: ["dog", "close up", "black", "brown", "sad", "puppy"],
    filePath:
      "C:/Users/typic/Documents/GitHub/RTT-125/Capstone/Backend/data/images/dog2.webp",
  },
  {
    datePosted: "March 21, 2024 15:02:00",
    postedBy: 2,
    tags: ["dog", "field", "black", "brown", "panting", "standing"],
    filePath:
      "C:/Users/typic/Documents/GitHub/RTT-125/Capstone/Backend/data/images/dog3.webp",
  },
  {
    datePosted: "March 21, 2024 15:03:00",
    postedBy: 2,
    tags: ["dog", "field", "white", "walking", "panting", "happy"],
    filePath:
      "C:/Users/typic/Documents/GitHub/RTT-125/Capstone/Backend/data/images/dog4.webp",
  },
  {
    datePosted: "March 21, 2024 15:04:00",
    postedBy: 1,
    tags: ["dog", "driveway", "gold", "sitting", "puppy", "happy"],
    filePath:
      "C:/Users/typic/Documents/GitHub/RTT-125/Capstone/Backend/data/images/dog5.jpg",
  },
  {
    datePosted: "March 21, 2024 15:05:00",
    postedBy: 1,
    tags: ["dog", "field", "gold", "sitting", "dogs", "brown", "mixed fur"],
    filePath:
      "C:/Users/typic/Documents/GitHub/RTT-125/Capstone/Backend/data/images/dog6.jpg",
  },
  {
    datePosted: "March 21, 2024 15:06:00",
    postedBy: 2,
    tags: ["dog", "close up", "white", "happy"],
    filePath:
      "C:/Users/typic/Documents/GitHub/RTT-125/Capstone/Backend/data/images/dog7.jpg",
  },
  {
    datePosted: "March 21, 2024 15:07:00",
    postedBy: 1,
    tags: ["dog", "close up", "white"],
    filePath:
      "C:/Users/typic/Documents/GitHub/RTT-125/Capstone/Backend/data/images/dog8.jpg",
  },
  {
    datePosted: "March 21, 2024 15:08:00",
    postedBy: 1,
    tags: ["dog", "black", "road"],
    filePath:
      "C:/Users/typic/Documents/GitHub/RTT-125/Capstone/Backend/data/images/dog9.jpg",
  },
  {
    datePosted: "March 21, 2024 15:09:00",
    postedBy: 0,
    tags: ["cat", "white", "grey", "close up"],
    filePath:
      "C:/Users/typic/Documents/GitHub/RTT-125/Capstone/Backend/data/images/cat1.jpg",
  },
  {
    datePosted: "March 21, 2024 15:10:00",
    postedBy: 1,
    tags: ["cat", "brown", "close up"],
    filePath:
      "C:/Users/typic/Documents/GitHub/RTT-125/Capstone/Backend/data/images/cat2.avif",
  },
  {
    datePosted: "March 21, 2024 15:11:00",
    postedBy: 2,
    tags: ["cat", "orange", "close up", "teeth"],
    filePath:
      "C:/Users/typic/Documents/GitHub/RTT-125/Capstone/Backend/data/images/cat3.webp",
  },
  {
    datePosted: "March 21, 2024 15:12:00",
    postedBy: 1,
    tags: ["cat", "orange", "glasses"],
    filePath:
      "C:/Users/typic/Documents/GitHub/RTT-125/Capstone/Backend/data/images/cat4.jpg",
  },
  {
    datePosted: "March 21, 2024 15:13:00",
    postedBy: 0,
    tags: ["cat", "black", "stupid"],
    filePath:
      "C:/Users/typic/Documents/GitHub/RTT-125/Capstone/Backend/data/images/cat5.jpg",
  },
  {
    datePosted: "March 21, 2024 15:14:00",
    postedBy: 2,
    tags: ["cat", "white", "predator"],
    filePath:
      "C:/Users/typic/Documents/GitHub/RTT-125/Capstone/Backend/data/images/cat6.png",
  },
  {
    datePosted: "March 21, 2024 15:15:00",
    postedBy: 2,
    tags: ["dog", "brown", "field", "flowers"],
    filePath:
      "C:/Users/typic/Documents/GitHub/RTT-125/Capstone/Backend/data/images/dog10.jpg",
  },
  {
    datePosted: "March 21, 2024 15:16:00",
    postedBy: 1,
    tags: ["dog", "white", "field", "stupid"],
    filePath:
      "C:/Users/typic/Documents/GitHub/RTT-125/Capstone/Backend/data/images/dog11.jpg",
  },
  {
    datePosted: "March 21, 2024 15:16:00",
    postedBy: 1,
    tags: ["dog", "white", "black", "field", "balls", "close up"],
    filePath:
      "C:/Users/typic/Documents/GitHub/RTT-125/Capstone/Backend/data/images/dog12.jpg",
  },
];

module.exports = seedData;
