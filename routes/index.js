var router = require("express").Router();
const validateToken = require("../middelwares/validateToken");

router.use("/user", require("./users"));
router.use("/url", validateToken, require("./urls"));
router.use(require("./redirect"));

module.exports = router;
