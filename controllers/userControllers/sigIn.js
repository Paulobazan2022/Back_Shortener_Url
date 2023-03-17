const UserManager = require("../../models/userManager")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const signInController = async (req, res) => {
  const { username, password } = req.body;

  const user = await UserManager.logInUser(username.toLowerCase())

  if (!user) {
    res.status(401).json({ error: "Usuarios no encontrado" });
    return;
  }

  const validatePassword = await bcrypt.compare(password, user.password);

  if (!validatePassword) {
    res.status(401).json({ error: "contraseña no válida" });
    return;
  }

  const token = jwt.sign({ username }, process.env.SECRET, {
    algorithm: "HS256",
    expiresIn: 30000,
  });

  res.status(200).json({ token: token, name : user.name });
};

module.exports = signInController;
