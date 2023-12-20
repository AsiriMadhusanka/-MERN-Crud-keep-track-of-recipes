// // src/components/RecipeList.js
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import api from '../services/api';

// const RecipeList = () => {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await api.get('/recipes/fetchRecipes');
//         setRecipes(response.data.recipes);
//       } catch (error) {
//         console.error('Error fetching recipes:', error.message);
//       }
//     };

//     fetchRecipes();
//   }, []);

//   return (
//     <div>
//       <h2 className="text-2xl font-medium mb-4">Recipes</h2>
//       <ul>
//         {recipes.map((recipe) => (
//           <li key={recipe._id}>
//             <Link to={`/recipe/${recipe._id}`}>{recipe.recipeName}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RecipeList;


// src/components/RecipeList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import '../styles/RecipeList.css'; 

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await api.get('/recipes/fetchRecipes');
        setRecipes(response.data.recipes);
      } catch (error) {
        console.error('Error fetching recipes:', error.message);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-medium mb-4">Recipes</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Recipe Name</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe._id}>
              <td className="py-2 px-4 border-b">
                <Link to={`/recipe/${recipe._id}`}>{recipe.recipeName}</Link>
              </td>
              <td className="py-2 px-4 border-b">
                <Link to={`/edit-recipe/${recipe._id}`} className="text-blue-500 hover:underline mr-2">
                  Edit
                </Link>
                <Link to={`/recipe/${recipe._id}`} className="text-red-500 hover:underline">
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecipeList;

