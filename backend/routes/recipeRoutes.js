const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// Route to add a new recipe
router.post('/addRecipe', recipeController.addRecipe);
router.get('/fetchRecipes', recipeController.getAllRecipes);
router.get('/fetchRecipe/:recipeId', recipeController.getRecipeById);
router.put('/editRecipe/:recipeId', recipeController.editRecipe);
router.delete('/deleteRecipe/:recipeId', recipeController.deleteRecipe);

module.exports = router;

