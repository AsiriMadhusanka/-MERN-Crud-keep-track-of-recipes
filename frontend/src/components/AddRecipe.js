// // src/components/AddRecipe.js
// import React, { useState } from 'react';
// import api from '../services/api';
// import { useNavigate } from 'react-router-dom';
// // import '../styles/AddRecipe.css';

// const AddRecipe = () => {
//   const navigate = useNavigate();
//   const [recipeName, setRecipeName] = useState('');
//   const [ingredients, setIngredients] = useState('');
//   const [description, setDescription] = useState('');

//   const handleAddRecipe = async () => {
//     try {
//       // Validate form fields (you may add more validation logic as needed)
//       if (!recipeName || !ingredients || !description) {
//         console.error('Please fill in all fields');
//         return;
//       }

//       // Send a POST request to add a new recipe
//       const response = await api.post('/recipes/addRecipe', {
//         recipeName,
//         ingredients,
//         description,
//       });

//       console.log(response.data.message);

//       // Redirect to the home page after adding the recipe
//       navigate('/');
//     } catch (error) {
//       console.error('Error adding recipe:', error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Add Recipe</h2>
//       <form>
//         <label>
//           Recipe Name:
//           <input
//             type="text"
//             value={recipeName}
//             onChange={(e) => setRecipeName(e.target.value)}
//           />
//         </label>
//         <label>
//           Ingredients:
//           <input
//             type="text"
//             value={ingredients}
//             onChange={(e) => setIngredients(e.target.value)}
//           />
//         </label>
//         <label>
//           Description:
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </label>
//         <button type="button" onClick={handleAddRecipe}>
//           Add Recipe
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddRecipe;


// src/components/AddRecipe.js
import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import '../styles/AddRecipe.css';

const AddRecipe = () => {
  const [recipeData, setRecipeData] = useState({
    recipeName: '',
    ingredients: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to add a new recipe
      const response = await api.post('/recipes/addRecipe', recipeData);

      console.log('Recipe added successfully:', response.data);

      // Redirect to the home page after successful submission
      navigate('/');
    } catch (error) {
      console.error('Error adding recipe:', error.message);
      // Handle error (e.g., display an error message to the user)
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form className="bg-white rounded shadow-md p-8" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-medium mb-4">Add Recipe</h2>

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
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
