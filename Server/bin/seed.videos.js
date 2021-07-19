require("dotenv").config();
require("../config/dbConnection");
const VideoModel = require("../models/Video");
const mongoose = require("mongoose");

const videos = [
  {
    title: "Joe Rogan",
    videoUrl: "https://www.youtube.com/watch?v=ycPr5-27vSI",
    description: "Elon on Joe Rogan Episode 1",
    category: "Everything Else",
    likes: [],
  },

];

//empty database
VideoModel.deleteMany()
  .then(async () => {
    //insert videos in db
    await VideoModel.insertMany(videos);
    console.log("Videos inserted");
  })
  .catch((err) => {
    console.log(err);
  });
