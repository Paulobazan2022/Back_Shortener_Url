const Urls = require("./schemas/urls");
const User = require("./schemas/users");

class UrlsManager {
  static async createUrl(username, fullUrl, customId) {
    const user = await User.findOne({ username: username });
    const newUrl = await Urls.create({
      id_user: user._id,
      full: fullUrl,
      short: customId,
    });
    const response = await newUrl.save();

    return response;
  }

  static async getAllUrls(username) {
    const user = await User.findOne({ username: username });
    const urls = await Urls.find({ id_user: user._id });
    const urlsData = urls.map((url) => {
      return { idUrl: url._id, fullurl: url.full, shortUrl: url.short };
    });
    return urlsData;
  }

  static async deleteUrl(idUrl) {
    const deleted = await Urls.deleteOne({
      _id: idUrl,
    });
    return deleted;
  }

  static async updateUrl(idUrl, newUrl) {
    const updated = await Urls.find({ _id: idUrl }).updateOne({ full: newUrl });

    return updated;
  }

  static async sendFullUrl(short){

    const url = await Urls.findOne({ short: short });
    return url
  }
}

module.exports = UrlsManager;
