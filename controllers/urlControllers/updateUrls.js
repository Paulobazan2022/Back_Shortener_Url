const UrlsManager = require("../../models/urlsManager");

const updateUrl = async (req, res) => {
  const { idUrl, newUrl } = req.body

  const updated = await UrlsManager.updateUrl(idUrl, newUrl);

  if (updated.modifiedCount > 0) {
    return res.status(201).json("nodificacion realizada");
  } 
  res.status(404).json({ error: "documento no encontrado" });
};

module.exports = updateUrl;
