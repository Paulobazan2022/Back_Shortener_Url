var router = require("express").Router();
const redirectUrl = require("../controllers/urlControllers/redirect");

router.get("/:shortUrl", redirectUrl);


module.exports = router