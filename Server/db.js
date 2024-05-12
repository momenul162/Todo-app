const mongoose = require("mongoose");

function connectToDb(connectionStr) {
  return mongoose.connect(connectionStr);
}

module.exports = connectToDb;
