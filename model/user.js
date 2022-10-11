const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    favoriteCocktails: [{ type: Schema.ObjectId, ref: "cocktails" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
