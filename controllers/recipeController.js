const Recipe = require('../models/recipeModel');

exports.getRecipes = (req, res) => {
  Recipe.getAllRecipes((err, recipes) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(recipes);
  });
};

exports.addRecipe = (req, res) => {
  const newRecipe = req.body;
  Recipe.addRecipe(newRecipe, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Recipe added!', id: result.insertId });
  });
};
