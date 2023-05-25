const express = require("express");
const app = express();
const port = 5000;
const chefslider = require("./data/chefslider.json");
const recipes = require("./data/recipes.json");
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Chef is coming");
});
app.get("/chifslider", (req, res) => {
  res.send(chefslider);
});
app.get("/recipes", (req, res) => {
  res.send(recipes);
});
app.get("/recipes/:id", (req, res) => {
  const id = req.params.id;
  const selectedRecipes = recipes.find((n) => n.id == id);
  res.send(selectedRecipes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
