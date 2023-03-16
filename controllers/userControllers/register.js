const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserManager = require("../../models/userManager");

const registerUser = async (req, res) => {
  const { name, username, password } = req.body;

  var BCRYP_SALT_RAUNDS = 10;

  const passwordCryp = await bcrypt.hash(password, BCRYP_SALT_RAUNDS);

  try {
   const response = await UserManager.registerUser(name, username, passwordCryp);
    const token = jwt.sign({ username }, process.env.SECRET, {
      algorithm: "HS256",
      expiresIn: 30000,
    });
    
    res.status(201).json({ token: token, name: response.name });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = registerUser;
