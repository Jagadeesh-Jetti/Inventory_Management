const mongoose = require("mongoose");

const dotEnv = require("dotenv");

dotEnv.config({
  path: ".env",
});

const mongoURL = process.env.MONGODB;

const database = () => {
  if (!mongoURL) {
    console.error("Environment variables not defined ");
  } else {
    mongoose
      .connect(mongoURL)
      .then(() => {
        console.log("Database connected");
      })
      .catch((error) => {
        console.error("Error while connecting database", error);
      });
  }
};

module.exports = database;
