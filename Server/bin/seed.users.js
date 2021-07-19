require("dotenv").config();
require("../config/dbConnection");
const User = require("../models/User");
const mongoose = require("mongoose");

const users = [
  {
    username: "Kenton",
    email: "kenton@gmail.com",
    password: "1234",
    country: "France",
  },
];

//empty database
User.deleteMany()
  .then(async () => {
    //insert users in db
    await User.insertMany(users);
    console.log("ok: nb a users has been inserted");
  })
  .catch((err) => {
    console.log(err);
  });
