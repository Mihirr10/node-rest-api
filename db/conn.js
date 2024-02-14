require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.DB_URL;

mongoose
  .connect(uri)
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });
