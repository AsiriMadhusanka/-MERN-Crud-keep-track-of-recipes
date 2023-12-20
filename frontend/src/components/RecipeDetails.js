// // src/components/RecipeDetails.js
// import React, { useState, useEffect } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import api from '../services/api';

// const RecipeDetails = () => {
//   const { id } = useParams();
//   const [recipe, setRecipe] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchRecipeById = async () => {
//       try {
//         const response = await api.get(`/recipes/fetchRecipe/${id}`);
//         setRecipe(response.data.recipe);
//       } catch (error) {
//         console.error('Error fetching recipe:', error.message);
//       }
//     };

//     fetchRecipeById();
//   }, [id]);

//   const handleDelete = async () => {
//     try {
//       // Send a DELETE request to delete the recipe
//       await api.delete(`/recipes/deleteRecipe/${id}`);
//       console.log('Recipe deleted successfully');
//       // Redirect to the home page after deletion
//       navigate('/');
//     } catch (error) {
//       console.error('Error deleting recipe:', error.message);
//       // Handle error (e.g., display an error message to the user)
//     }
//   };

//   return (
//     <div>
//       {recipe ? (
//         <div>
//           <h2 className="text-2xl font-medium mb-4">{recipe.recipeName}</h2>
//           <p>Ingredients: {recipe.ingredients}</p>
//           <p>Description: {recipe.description}</p>
//           <div className="mt-4">
//             <Link to={`/edit-recipe/${id}`} className="mr-4">
//               <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
//                 Edit
//               </button>
//             </Link>
//             <button
//               onClick={handleDelete}
//               className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default RecipeDetails;





// src/components/RecipeDetails.js
// import React, { useState, useEffect } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import api from '../services/api';
// import '../styles/RecipeDetails.css';

// const RecipeDetails = () => {
//   const { id } = useParams();
//   const [recipe, setRecipe] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchRecipeById = async () => {
//       try {
//         const response = await api.get(`/recipes/fetchRecipe/${id}`);
//         setRecipe(response.data.recipe);
//       } catch (error) {
//         console.error('Error fetching recipe:', error.message);
//       }
//     };

//     fetchRecipeById();
//   }, [id]);

//   const handleDelete = async () => {
//     try {
//       // Send a DELETE request to delete the recipe
//       await api.delete(`/recipes/deleteRecipe/${id}`);
//       console.log('Recipe deleted successfully');
//       // Redirect to the home page after deletion
//       navigate('/');
//     } catch (error) {
//       console.error('Error deleting recipe:', error.message);
//       // Handle error (e.g., display an error message to the user)
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       {recipe ? (
//         <div className="text-center">
//           <h2 className="text-2xl font-medium mb-4">{recipe.recipeName}</h2>
//           <p>Ingredients: {recipe.ingredients}</p>
//           <p>Description: {recipe.description}</p>
//           <div className="mt-4">
//             <Link to={`/edit-recipe/${id}`} className="mr-4">
//               <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
//                 Edit
//               </button>
//             </Link>
//             <button
//               onClick={handleDelete}
//               className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default RecipeDetails;







// src/components/RecipeDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import '../styles/RecipeDetails.css';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipeById = async () => {
      try {
        const response = await api.get(`/recipes/fetchRecipe/${id}`);
        setRecipe(response.data.recipe);
      } catch (error) {
        console.error('Error fetching recipe:', error.message);
      }
    };

    fetchRecipeById();
  }, [id]);

  const handleDelete = async () => {
    const shouldDelete = window.confirm('Are you sure you want to delete the recipe?');

    if (shouldDelete) {
      try {
        // Send a DELETE request to delete the recipe
        await api.delete(`/recipes/deleteRecipe/${id}`);
        console.log('Recipe deleted successfully');

        // Refresh the page
        window.location.reload();
      } catch (error) {
        console.error('Error deleting recipe:', error.message);
        // Handle error (e.g., display an error message to the user)
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {recipe ? (
        <div className="text-center">
          <h2 className="text-2xl font-medium mb-4">{recipe.recipeName}</h2>
          <p>Ingredients: {recipe.ingredients}</p>
          <p>Description: {recipe.description}</p>
          <div className="mt-4">
            <Link to={`/edit-recipe/${id}`} className="mr-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                Edit
              </button>
            </Link>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800"
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RecipeDetails;
