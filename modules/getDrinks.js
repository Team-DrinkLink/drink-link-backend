const Cocktail = require("../modal/cocktails");

async function getDrinks(req, res, next) {
  try {
    const drinks = await Cocktail.find({});
    res.status(200).send(drinks);
  } catch (e) {
    next("error message getDrinks" + e);
  }
}

module.exports = getDrinks;
