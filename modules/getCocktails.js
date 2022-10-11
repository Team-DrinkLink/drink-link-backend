const Cocktail = require("../model/cocktails");

async function getCocktails(req, res, next) {
  try {
    const cocktails = await Cocktail.find({});
    res.status(200).send(cocktails);
  } catch (e) {
    next("error message getCocktails" + e);
  }
}

module.exports = getCocktails;
