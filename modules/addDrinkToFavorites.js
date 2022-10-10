const Cocktail = require("../modal/cocktails");

async function addDrinkToFavorites(req, res, next) {
  try {
    let drink = await Cocktail.addDrinkToFavorites.create(req.body);
    res.status(200).json({ message: "success", payload: drink });
  } catch {
    next(error);
  }
}

module.exports = addDrinkToFavorites;