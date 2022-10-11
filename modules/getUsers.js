const User = require("../model/user");

async function getUsers(req, res, next) {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (e) {
    next("error message getUsers" + e);
  }
}

module.exports = getUsers;
