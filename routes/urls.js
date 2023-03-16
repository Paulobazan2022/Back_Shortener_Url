var router = require("express").Router();
const saveUrls = require("../controllers/urlControllers/saveUrls");
const getAll = require("../controllers/urlControllers/getUrls")
const updateUrl = require("../controllers/urlControllers/updateUrls")
const deleteUrl = require("../controllers/urlControllers/deleteUrls")


router.post("/short-url", saveUrls);
router.get("/get-urls", getAll)
router.patch("/update-url", updateUrl)
router.delete("/delete-url", deleteUrl)


module.exports = router;
