const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  id_user:{
    ref : "User",
    type : mongoose.Schema.Types.ObjectId
  },
  full: {
    type: String,
    require: true,
  },
  short: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Urls", urlSchema);
