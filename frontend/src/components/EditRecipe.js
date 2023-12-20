// src/components/EditRecipe.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

const EditRecipe = () => {
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState({
    recipeName: '',
    ingredients: '',
    description: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipeById = async () => {
      try {
        const response = await api.get(`/recipes/fetchRecipe/${id}`);
        const { recipeName, ingredients, description } = response.data.recipe;
        setRecipeData({ recipeName, ingredients, description });
      } catch (error) {
        console.error('Error fetching recipe:', error.message);
      }
    };

    fetchRecipeById();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a PUT request to edit the recipe
      await api.put(`/recipes/editRecipe/${id}`, recipeData);
      console.log('Recipe updated successfully');
      // Redirect to the recipe details page after editing
      navigate(`/recipe/${id}`);
    } catch (error) {
      console.error('Error editing recipe:', error.message);
      // Handle error (e.g., display an error message to the user)
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-medium mb-4">Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Recipe Name</label>
          <input
            type="text"
            name="recipeName"
            value={recipeData.recipeName}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:shadow-outline-blue"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Ingredients</label>
          <textarea
            name="ingredients"
            value={recipeData.ingredients}
            onChange={handleChange}
            rows="3"
            className="mt-1 p-2 border rounded-md w-full textarea focus:outline-none focus:shadow-outline-blue"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Description</label>
          <textarea
            name="description"
            value={recipeData.description}
            onChange={handleChange}
            rows="3"
            className="mt-1 p-2 border rounded-md w-full textarea focus:outline-none focus:shadow-outline-blue"
            required
          ></textarea>
        </div>

        <div className="flex items-center justify-end mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRecipe;
