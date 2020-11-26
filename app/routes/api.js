const router = require("express").Router();
const Users = require("../models/userDetail.js");
const Schedule = require("../models/schedule.js");
const Pet = require("../models/PetDetail.js");
const User = require("../models/userDetail.js");

router.post("/api/users", async ({ body }, res) => {
  const user = new User(body);
  console.log(user);

  try {
    const result = await user.save();
    res.send(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.get("/api/users", async (req, res) => {
  try {
    const result = await User.find();
    res.send(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.post("/api/schedule", async ({ body }, res) => {
  const schedule = new Schedule(body);
  console.log(schedule);

  try {
    const result = await Schedule.save(body);
    res.send(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.get("/api/schedule/:username", async (req, res) => {
  const userschedule = req.params.username
  try {
    const result = await Schedule.findOne({ownerName:userschedule});
    res.send(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.get("/api/schedule", async (req, res) => {
  try {
    const result = await Schedule.find();
    res.send(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.post("/api/pet", async ({ body }, res) => {
  const petObj = new Pet(body);
  try {
    const result = await petObj.save();
    console.log(result);
    res.send(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.get("/api/pet/:ownerName", async (req, res) => {
  const ownName = req.params.ownerName;
  console.log(ownName);
  try {
    const result = await Pet.findOne({ ownerName: ownName });
    res.send(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

module.exports = router;
