const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.get('/recipes', recipeController.getRecipes);

router.post('/recipes', recipeController.addRecipe);

module.exports = router;
