const { check, validationResult } = require("express-validator");


const validateSigIn = [
    check("username", "Introduce un email válido")
      .isEmail(),
    check("password", "Introduce una contraseña válida").exists(),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorsMsg = errors.array();
        res.status(400).json({ errorsMsg: errorsMsg });
      } 
      else {
        next();
      } 
    },
  ];
  
  module.exports = { validateSigIn };