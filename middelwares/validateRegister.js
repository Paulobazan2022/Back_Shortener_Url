const { check, validationResult } = require("express-validator");
const UserManager = require("../models/userManager");

const validateRegister = [
  check("username", "Introduce un email válido")
    .isEmail()
    .custom(async (value) => {
      const exist = await UserManager.checkUserExist(value)
      if (exist) {
        throw new Error("El nombre de usuario ya existe");
      }
      return true;
    }),
  check("password", "Introduce una contraseña válida").isStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorsMsg = errors.array();
      res.status(400).json({ errorsMsg: errorsMsg });
    } else {
      next();
    }
  },
];

module.exports = { validateRegister };
