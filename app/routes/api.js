const router = require("express").Router();
const Schedule = require("../models/schedule.js");
const Pet = require("../models/PetDetail.js");
const User = require("../models/userDetail.js");
const orm = require("../db/orm")

router.post("/api/users/register", async (req, res) => {
  console.log(req)
  const userData = {
    firstName:     req.body.firstName,
    lastName:      req.body.lastName,
    phoneNumber:   req.body.phoneNumber,
    emergencyNo:   req.body.emergencyNo,
    emailAddress:  req.body.emailAddress,
    userPassword:  req.body.userPassword
};
const userId = await orm.registerUser(userData);

const newUser = new User(userId);
console.log("NEW USER:",newUser)
  try {
    const result = await User.save(userId);
    res.send(result);
  } catch (err) {
    res.status(400).json(err.message);
  }

console.log( ' created user [orm.registerUser]: userId=', userId );

if( !userId ){
    return res.send( { status: false, message: 'Sorry failed to create the user, try later?' } );
}

res.send( { status: true, message: `You are registered (userId: #${userId})!` } );
});

router.get("/api/users/:firstName", async (req, res) => {
  try {
    const result = await User.findOne({firstName: req.params.firstName});
    console.log("USER SEARCH RESULTS: ", result)
    res.send(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.get("/api/users/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const userData = await orm.loginUser(email, password);
  console.log( '[/api/user/login] userData: ', userData);
  if( !userData ){
      return res.send( { status: false, message: 'Sorry unknown user or wrong password' } );
  }

  console.log('* valid password, proceeding with sending userData to client!', userData);
  res.send({ status: true, ...userData });
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
