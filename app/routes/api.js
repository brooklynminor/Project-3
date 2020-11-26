const router = require("express").Router();
const Users = require("../models/userDetail.js");
const Schedule = require("../models/schedule.js");
const Pets = require("../models/petDetail.js");

router.post("/api/Users", ({ body }, res) => {
  Users.create(body)
    .then(dbUsers => {
      res.json(dbUsers);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/Users/add", ({ body }, res) => {
  Users.insertMany(body)
    .then(dbUsers => {
      res.json(dbUsers);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/Users", (req, res) => {
  Users.petHotel_db.find({})
    .sort({ date: -1 })
    .then(dbUsers => {
      res.json(dbUsers);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/Schedule", ({ body }, res) => {
    Schedule.create(body)
      .then(dbUsers => {
        res.json(dbUsers);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.post("/api/Schedule/add", ({ body }, res) => {
    Schedule.insertMany(body)
      .then(dbUsers => {
        res.json(dbUsers);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.get("/api/Schedule", (req, res) => {
    Schedule.find({})
      .sort({ date: -1 })
      .then(dbUsers => {
        res.json(dbUsers);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.post("/api/Pets", ({ body }, res) => {
    Pets.create(body)
      .then(dbUsers => {
        res.json(dbUsers);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.post("/api/Pets/add", ({body}, res) => {
    console.log("THIS IS BODY: ",body)
    Pets.insertMany(body)
      .then(dbUsers => {
        res.json(dbUsers);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.get("/api/Pets", (req, res) => {
    console.log("finding Pets!", res)
    Pets.find({})
      .sort({ date: -1 })
      .then(dbUsers => {
        res.json(dbUsers);
      })
      .catch(err => {
        res.status(400).json(err);
      });
    });

module.exports = router;
