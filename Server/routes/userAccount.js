const express = require("express");
const router = express.Router();
const User = require("../models/User");
const VideoModel = require("../models/Video");
const uploader = require("../config/cloudinary");
const requireAuth = require("../middlewares/requireAuth");

//MES VIDEOS LIKED SE METTENT SUR MA PAGE DE PROFILE
router.get("/myvideos", (req, res, next) => {
  console.log("USER GET", req.session.currentUser);
  User.findById(req.session.currentUser)
    .populate("favoriteVideos") 
    .then((videoDocuments) => {
      console.log(videoDocuments);
      res.status(200).json(videoDocuments);
    })
    .catch((error) => {
      next(error);
    });
});
//I JUST UPDATED THIS!!!

router.patch(
  "/me/videos",
  //requireAuth,
  //upload.single("profileImg"),
  async (req, res, next) => {
    const userId = req.session.currentUser;
    // console.log("try so see", userId);
    // console.log("--------", req.body);
    const favoriteVideoId = req.body.id;
    try {
      const user = await User.findById(userId);
      if (user.favoriteVideos) {
        const isExist = user.favoriteVideos.some(
          (videoId) => videoId == favoriteVideoId
        );

        if (!isExist) {
          user.favoriteVideos.push(favoriteVideoId);
        }
      } else {
        user.favoriteVideos = [favoriteVideoId];
      }
      await user.save();

      res.status(201).json(user);
    } catch (error) {
      console.log(error);
    }
  }
); 

// router.patch(
//   "/me",
//   requireAuth,
//   uploader.single("profilePic"),
//   (req, res, next) => {
//     req.body.userId = req.session.currentUser;

//     if (req.file) {
//       req.body.profilePic = req.file.path; // Add profileImage key to req.body
//     }

//     User.findByIdAndUpdate(userId, req.body, { new: true })
//       .select("-password") // Remove the password field from the found document.
//       .then((userDocument) => {
//         res.status(200).json(userDocument);
//       })
//       .catch(next);
//   }
// );

// A USER CAN UPDATE HIS ACCOUNT, ADD A PICTURE FOR EXAMPLE
router.patch(
  "/me",
  requireAuth,
  uploader.single("profilePic"),
  (req, res, next) => {
    const userId = req.session.currentUser;

    if (req.file) {
      req.body.profilePic = req.file.path; // Add profileImage key to req.body
    }

    User.findByIdAndUpdate(userId, req.body, { new: true })
      .select("-password") // Remove the password field from the found document.
      .then((userDocument) => {
        res.status(200).json(userDocument);
      })
      .catch(next);
  }
);

router.get("/me", requireAuth, (req, res, next) => {
  User.findById(req.session.currentUser)
    .select("-password") // Remove the password field from the found document.
    .then((userDocument) => {
      return res.status(200).json(userDocument);
    })
    .catch(next);
});

module.exports = router;
