
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();
const path = require('path')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));
app.get("/",function(req,res){
  res.sendFile(path.join(__dirname, "client/build/index.html")
  )
})
mongoose.connect(process.env.MONGODB_URI ? process.env.MONGODB_URI : "mongodb://localhost:27017/petHotel_db", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// routes
app.use(require("./app/routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
