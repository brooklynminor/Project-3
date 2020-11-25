
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/petHotel_db", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./app/routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
