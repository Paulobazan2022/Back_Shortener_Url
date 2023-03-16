const Urls = require("../../models/schemas/urls");
const UrlsManager = require("../../models/urlsManager");
const User = require("../../models/schemas/users");

const deleteUrl = async (req, res) => {
  const { idUrl } = req.body;
  const deleted = await UrlsManager.deleteUrl(idUrl);

  if (deleted.deletedCount > 0) {
    return res.status(201).json("nodificacion realizada");
  }
  res.status(404).json({ error: "documento no encontrado" });
};

module.exports = deleteUrl;
