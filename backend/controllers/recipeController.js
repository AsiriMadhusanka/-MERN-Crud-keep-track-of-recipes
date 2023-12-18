const Recipe = require('../models/Recipe');

// Function to add a new recipe
const addRecipe = async (req, res) => {
  try {
    const { recipeName, ingredients, description } = req.body;

    // Create a new recipe instance
    const newRecipe = new Recipe({
      recipeName,
      ingredients,
      description,
    });

    // Save the new recipe to the database
    await newRecipe.save();

    res.status(201).json({ message: 'Recipe added successfully', recipe: newRecipe });
  } catch (error) {
    console.error('Error adding recipe:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function to fetch all recipes
const getAllRecipes = async (req, res) => {
    try {
      const recipes = await Recipe.find();
      res.status(200).json({ recipes });
    } catch (error) {
      console.error('Error fetching recipes:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };




// Controller function to fetch a recipe by ID
const getRecipeById = async (req, res) => {
    try {
      const { recipeId } = req.params;
  
      const recipe = await Recipe.findById(recipeId);
  
      if (!recipe) {
        return res.status(404).json({ error: 'Recipe not found' });
      }
  
      res.status(200).json({ recipe });
    } catch (error) {
      console.error('Error fetching recipe by ID:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };




  // Controller function to edit a recipe by ID
const editRecipe = async (req, res) => {
    try {
      const { recipeId } = req.params;
      const { recipeName, ingredients, description } = req.body;
  
      const recipe = await Recipe.findById(recipeId);
  
      if (!recipe) {
        return res.status(404).json({ error: 'Recipe not found' });
      }
  
      // Update the recipe data
      recipe.recipeName = recipeName;
      recipe.ingredients = ingredients;
      recipe.description = description;
  
      // Save the updated recipe to the database
      await recipe.save();
  
      res.status(200).json({ message: 'Recipe updated successfully', recipe });
    } catch (error) {
      console.error('Error editing recipe:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };



// Controller function to delete a recipe by ID
const deleteRecipe = async (req, res) => {
    try {
      const { recipeId } = req.params;
  
      const recipe = await Recipe.findById(recipeId);
  
      if (!recipe) {
        return res.status(404).json({ error: 'Recipe not found' });
      }
  
      // Remove the recipe from the database
      await recipe.deleteOne(); // Use deleteOne method instead of remove
  
      res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (error) {
      console.error('Error deleting recipe:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


// Export the controller functions
module.exports = {
  addRecipe,
  getAllRecipes,
  getRecipeById, 
  editRecipe,
  deleteRecipe,
  // Add the new controller function here
  // You can add more controller functions here for update, delete, etc.
};



