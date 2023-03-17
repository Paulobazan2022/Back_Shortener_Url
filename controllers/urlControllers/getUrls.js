const UrlsManager = require("../../models/urlsManager");

const getAll = async (req, res) => {
  const { username } = req.user;
  try {
    const urlsData = await UrlsManager.getAllUrls(username.toLowerCase());
    res.status(200).json({ urlsData });
  } catch (error) {
    res.status(404).json({ error: error });
  }
};

module.exports = getAll;
