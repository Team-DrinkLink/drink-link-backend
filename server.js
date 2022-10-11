"use strict";
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const authorize = require("./auth/authorize");
const getCocktails = require("./modules/getCocktails");
const getUsers = require("./modules/getUsers");
const createUser = require("./modules/createUser");
const deleteUser = require("./modules/deleteUser");
const addCocktailToFavorites = require("./modules/addCocktailToFavorites");
const deleteCocktailFromFavorites = require("./modules/deleteCocktailFromFavorites");

const app = express();
app.use(cors());
app.use(express.json());
// app.use(authorize())

mongoose.connect(process.env.MONGO_DB);
const mongoDbConnection = mongoose.connection;
mongoDbConnection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);
mongoDbConnection.once("open", () => {
  console.log("MongoDB connection established");
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

app.get("/users", getUsers);
app.post("/users", createUser);
app.delete("/users/:id", deleteUser);

app.get("/drinks", getCocktails);
app.post("/drinks", addCocktailToFavorites);
app.delete("/drinks/:id", deleteCocktailFromFavorites);

app.get("*", (req, res) => {
  res.status(404).send("404 Not Found");
});

app.use((error, req, res) => {
  res.status(500).send(error);
});
