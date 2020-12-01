
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

}

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
