const router = require("express").Router();
const Schedule = require("../models/schedule.js");
const email = require('../db/email')
const Pet = require("../models/PetDetail.js");
const User = require("../models/userDetail.js");
const orm = require("../db/orm")

router.post("/api/users/register", async (req, res) => {
  // console.log(req)
  let userData = {
    fullName:     req.body.fullName,
    phoneNumber:   (req.body.phoneNumber),
    emergencyNo:   (req.body.emergencyNo),
    emailAddress:  req.body.emailAddress,
    userPassword:  req.body.userPassword
};
userData = await orm.registerUser(userData);

const newUser = new User(userData);
console.log("NEW USER:",userData)
  try {
    const result = await newUser.save(userData);
    console.log("save result: ",result)
    res.send(result);
  } catch (err) {
    res.status(400).json(err.message);
  }

console.log( ' created user [orm.registerUser]: userId=', userData );

if( !newUser ){
    return res.send( { status: false, message: 'Sorry failed to create the user, try later?' } );
}
console.log("Email Address in api.js: ", newUser.emailAddress)
email.email(newUser)
res.send( { status: true, message: `You are registered (userId: #${newUser._id})!` } );
});

router.get("/api/users/search/:firstName", async (req, res) => {
  try {
    const result = await User.findOne({firstName: req.params.fullName});
    console.log("USER SEARCH RESULTS: ", result)
    res.send(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.get("/api/users/login", async (req, res) => {
  console.log("IN LOGIN USERS: ",req.query)
  const email = req.query.emailAddress;
  const password = req.query.userPassword;
  console.log(email, password)
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
  const findUser = await User.findOne({firstName:body.ownerName})
  console.log("FIND USER: ", findUser)
  email.emailSchedule(schedule, findUser)
  try {
    const result = await schedule.save(body);
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
    console.log("get api pet: ",result);
    res.send(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.get("/api/pet/:ownerId", async (req, res) => {
  const ownName = req.params.ownerId;
  console.log("search pets api",ownName);
  try {
    const result = await Pet.findOne({ ownerId: ownName });
    res.send(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
});


module.exports = router;
