const router = require("express").Router();
const Users = require("../models/users.js");
const Schedule = require("../models/schedule.js");

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
  Users.insertOne(body)
    .then(dbUsers => {
      res.json(dbUsers);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/Users", (req, res) => {
  Users.find({})
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
    Schedule.insertOne(body)
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
  
module.exports = router;