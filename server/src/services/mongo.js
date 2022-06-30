const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "..", "..", "..", ".env"),
});
const mongoose = require("mongoose");
const colors = require("colors");
const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!".cyan.bold);
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true
    });
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
  }
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
