const UrlsManager = require("../../models/urlsManager");

const redirectUrl = async (req, res) => {
  const short = req.params.shortUrl;

  const url = await UrlsManager.sendFullUrl(short)
  
  if (!url) {
    return res.status(404).json({ error: "direccion no encontrada" });
  }

  res.status(200).json({fullUrl: url.full})
};

module.exports = redirectUrl;
