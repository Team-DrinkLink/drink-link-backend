const mongoose = require("mongoose");
const { Schema } = mongoose;

const cocktailSchema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    ingredients: { type: String, required: true },
    instructions: { type: String, required: true },
    image: { type: String, required: true },
    // drinkOwner: { type: Schema.ObjectId, ref: "user" },
  },
  { timestamps: true }
);

const Cocktail = mongoose.model("cocktails", cocktailSchema);
module.exports = Cocktail;
