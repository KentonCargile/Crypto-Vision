const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Autopopulate = require('mongoose-autopopulate');

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"], default: "user" },
  country: String,
  profilePic: {
    type: String,
    default:
      "https://www.pinclipart.com/picdir/big/135-1352861_transparent-women-african-american-african-american-girl-cartoon.png",
  },
 favoriteVideos: [{ type: Schema.Types.ObjectId, ref: "Video", autopopulate: true, unique: true }], 
});

const User = mongoose.model("User", userSchema);

module.exports = User;
