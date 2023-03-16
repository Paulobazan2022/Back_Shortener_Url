var router = require("express").Router();
const { validateRegister } = require("../middelwares/validateRegister");
const { validateSigIn } = require("../middelwares/validateSigIn");
const signInController = require("../controllers/userControllers/sigIn");
const registerUser = require("../controllers/userControllers/register");

router.post("/sig-in", validateSigIn, signInController);
router.post("/resgister", validateRegister, registerUser);

module.exports = router;
