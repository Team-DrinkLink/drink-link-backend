const Cocktail = require("../modal/cocktails");

async function deleteDrinks(req, res, next) {
  try {
    const drink = await Cocktail.findByIdAndDelete(req.params.id);
    res.status(200).send({ drink });
  } catch {
    next(error);
  }
}

module.exports = deleteDrinks;
