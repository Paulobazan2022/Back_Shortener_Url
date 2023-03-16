const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name:{
    type : String,
    min : 3,
  },
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
    min: 8,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
