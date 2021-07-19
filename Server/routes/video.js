const express = require("express");
const router = express.Router();
const VideoModel = require("../models/Video");
const User = require("../models/User");

// GET ALL VIDEOS IN THE DATABASE
router.get("/", (req, res, next) => {
  VideoModel.find()
    .then((videoDocument) => {
      res.status(200).json(videoDocument);
    })
    .catch((error) => {
      next(error);
    });
});

// GET VIDEOS CATEGORY 2021
router.get("/2021", (req, res, next) => {
  VideoModel.find({ category: { $eq: "2021" } }) // eq query selects specific index number
    .then((videoDocument) => {
      console.log("toto ----", videoDocument);
      res.status(200).json(videoDocument);
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

// GET VIDEOS CATEGORY 2020
router.get("/2020", (req, res, next) => {
  VideoModel.find({ category: { $eq: "2020" } })
    .then((videoDocument) => {
      res.status(200).json(videoDocument);
    })
    .catch((error) => {
      next(error);
    });
});

// GET VIDEOS CATEGORY 2019
router.get("/2019", (req, res, next) => {
  VideoModel.find({ category: { $eq: "2019" } })
    .then((videoDocument) => {
      res.status(200).json(videoDocument);
    })
    .catch((error) => {
      next(error);
    });
});

// GET VIDEOS CATEGORY 2018
router.get("/2018", (req, res, next) => {
  VideoModel.find({ category: { $eq: "2018" } })
    .then((videoDocument) => {
      res.status(200).json(videoDocument);
    })
    .catch((error) => {
      next(error);
    });
}); 

// GET VIDEOS CATEGORY 2017
router.get("/2017", (req, res, next) => {
  VideoModel.find({ category: { $eq: "2017" } })
    .then((videoDocument) => {
      res.status(200).json(videoDocument);
    })
    .catch((error) => {
      next(error);
    });
}); 

// GET VIDEOS CATEGORY 2016
router.get("/2016", (req, res, next) => {
  VideoModel.find({ category: { $eq: "2016" } })
    .then((videoDocument) => {
      res.status(200).json(videoDocument);
    })
    .catch((error) => {
      next(error);
    });
}); 

// GET VIDEOS CATEGORY 2015
router.get("/2015", (req, res, next) => {
  VideoModel.find({ category: { $eq: "2015" } })
    .then((videoDocument) => {
      res.status(200).json(videoDocument);
    })
    .catch((error) => {
      next(error);
    });
}); 

// GET VIDEOS CATEGORY 2014
router.get("/2014", (req, res, next) => {
  VideoModel.find({ category: { $eq: "2014" } })
    .then((videoDocument) => {
      res.status(200).json(videoDocument);
    })
    .catch((error) => {
      next(error);
    });
}); 

// GET VIDEOS CATEGORY 2013
router.get("/2013", (req, res, next) => {
  VideoModel.find({ category: { $eq: "2013" } })
    .then((videoDocument) => {
      res.status(200).json(videoDocument);
    })
    .catch((error) => {
      next(error);
    });
}); 

// GET VIDEOS CATEGORY 2012
router.get("/2012", (req, res, next) => {
  VideoModel.find({ category: { $eq: "2012" } })
    .then((videoDocument) => {
      res.status(200).json(videoDocument);
    })
    .catch((error) => {
      next(error);
    });
}); 

// GET VIDEOS CATEGORY 2011
router.get("/2011", (req, res, next) => {
  VideoModel.find({ category: { $eq: "2011" } })
    .then((videoDocument) => {
      res.status(200).json(videoDocument);
    })
    .catch((error) => {
      next(error);
    });
}); 

// GET VIDEOS CATEGORY 2010
router.get("/2010", (req, res, next) => {
  VideoModel.find({ category: { $eq: "2010" } })
    .then((videoDocument) => {
      res.status(200).json(videoDocument);
    })
    .catch((error) => {
      next(error);
    });
}); 

// GET VIDEOS CATEGORY 2009
router.get("/2009", (req, res, next) => {
  VideoModel.find({ category: { $eq: "2009" } })
    .then((videoDocument) => {
      res.status(200).json(videoDocument);
    })
    .catch((error) => {
      next(error);
    });
}); 

// GET VIDEOS CATEGORY 2008
router.get("/2008", (req, res, next) => {
  VideoModel.find({ category: { $eq: "2008" } })
    .then((videoDocument) => {
      res.status(200).json(videoDocument);
    })
    .catch((error) => {
      next(error);
    });
}); 

// GET VIDEOS CATEGORY 2007
router.get("/2007", (req, res, next) => {
  VideoModel.find({ category: { $eq: "2007" } })
    .then((videoDocument) => {
      res.status(200).json(videoDocument);
    })
    .catch((error) => {
      next(error);
    });
}); 

// GET VIDEOS CATEGORY 2006
router.get("/2006", (req, res, next) => {
  VideoModel.find({ category: { $eq: "2006" } })
    .then((videoDocument) => {
      res.status(200).json(videoDocument);
    })
    .catch((error) => {
      next(error);
    });
}); 

// GET VIDEOS CATEGORY 2005
router.get("/2005", (req, res, next) => {
  VideoModel.find({ category: { $eq: "2005" } })
    .then((videoDocument) => {
      res.status(200).json(videoDocument);
    })
    .catch((error) => {
      next(error);
    });
}); 

// GET VIDEOS CATEGORY 2004
router.get("/2004", (req, res, next) => {
  VideoModel.find({ category: { $eq: "2004" } })
    .then((videoDocument) => {
      res.status(200).json(videoDocument);
    })
    .catch((error) => {
      next(error);
    });
}); 

// CREATE ONE VIDEO : ONLY ADMINS CAN DO IT
router.post("/", (req, res, next) => {
  VideoModel.create(req.body)
    .then((videoDocument) => {
      res.status(201).json(videoDocument);
    })
    .catch((error) => {
      next(error);
    });
});

// UPDATE ONE VIDEO : ONLY ADMINS CAN DO IT
router.patch("/:id", (req, res, next) => {
  VideoModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((videoDocument) => {
      res.status(200).json(videoDocument);
    })
    .catch((error) => {
      next(error);
    });
});

// DELETE ONE VIDEO : ONLY ADMINS CAN DO IT
router.delete("/:id", (req, res, next) => {
  VideoModel.findByIdAndRemove(req.params.id)
    .then((videoDocument) => {
      res.status(204).json({
        message: "Successfuly deleted !",
      });
    })
    .catch((error) => {
      next(error);
    });
});

// GET ONE VIDEO IN DB
router.get("/:id", (req, res, next) => {
  VideoModel.findById(req.params.id)
    .then((videoDocument) => {
      res.status(200).json(videoDocument);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
