const db = require('../config/database');

exports.getAllRecipes = (callback) => {
  db.query('SELECT * FROM recipes', callback);
};

exports.addRecipe = (recipe, callback) => {
  const query = 'INSERT INTO recipes (name, ingredients, instructions, protein, kcal, fat) VALUES (?, ?, ?, ?, ?, ?)';
  const params = [recipe.name, recipe.ingredients, recipe.instructions, recipe.protein, recipe.kcal, recipe.fat];
  db.query(query, params, callback);
};
