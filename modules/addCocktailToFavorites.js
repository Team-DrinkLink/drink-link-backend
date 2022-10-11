const Cocktail = require("../model/cocktails");
const User = require("../model/user");

async function addCocktailToFavorites(req, res, next) {
  console.log(req.body.cocktail)
  try {
      const foundUser = await User.findOne({ email: req.body.email });
      const newCocktail = await Cocktail.create(req.body.cocktail);
      foundUser.favoriteCocktails.push(newCocktail);
      await foundUser.save();
      res.status(200).json(foundUser);
  } catch {
    next(error);
  }
}

module.exports = addCocktailToFavorites;