const mongoose = require("mongoose");
const cocktails = require("./cocktails");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    favoriteDrinks: [
      {
        title: { type: String, required: true },
        ingredients: { type: String, required: true },
        instructions: { type: String, required: true },
        image: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
