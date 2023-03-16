const { nanoid } = require("nanoid");
const UrlsManager = require("../../models/urlsManager");

const saveUrls = async (req, res) => {
  const { username } = req.user;
  const { fullUrl } = req.body;
  const customId = nanoid(7);
  
  try {
    const response = await UrlsManager.createUrl(username, fullUrl, customId);
    res.status(200).json({ short: response.short, full : response.full });
  } catch (e) {
    res.status(400).json({ error });
  }
};

module.exports = saveUrls;
