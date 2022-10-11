const User = require("../model/user");

async function createUser(req, res, next) {
  try {
    let newUser = await User.create(req.body);
    res.status(200).json({ message: "success", payload: newUser });
  } catch {
    next(error);
  }
}

module.exports = createUser;
