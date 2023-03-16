const express = require("express");
const cors = require("cors");
const app = express();
const mongoSanitize = require("express-mongo-sanitize") // libreria susttiuye $ por nada 
app.use(express.json());
app.use(cors());
require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize()) // se usa en req.params, req.header, req.body y req.query
const port = 8080;


const client = require("./models/connection");

client();

app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
