const User = require("./schemas/users");

class UserManager {
  static async logInUser(username) {
    const user = await User.findOne({ username: username });
    return user;
  }

  static async registerUser(name, username, passwordCryp) {
    const user = await User.create({
      name: name,
      username: username,
      password: passwordCryp,
    });

    await user.save();

    return user;
  }

  static async checkUserExist(value){
    const exist = await User.findOne({username : value})
    return exist
  }
}

module.exports = UserManager;
