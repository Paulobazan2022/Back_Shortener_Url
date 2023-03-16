const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_ENDPOINT}/?retryWrites=true&w=majority`;

function client() {
  mongoose.connect(
    uri,
    () => {
      console.log("conected!");
    },
    (e) => console.error(e)
  );
}

//   mongoose.set("strictQuery", true), ??
module.exports = () => {
 
  return client();
};
