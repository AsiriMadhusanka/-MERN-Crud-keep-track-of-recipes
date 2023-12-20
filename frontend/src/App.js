// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavigationBar from './components/NavigationBar';
// import RecipeList from './components/RecipeList';
// import RecipeDetails from './components/RecipeDetails';
// import AddRecipe from './components/AddRecipe';
// import EditRecipe from './components/EditRecipe';

// // Placeholder Home component for each route
// const Home = () => <div>Home Page</div>;

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <NavigationBar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/recipe/:id" element={<RecipeDetails />} />
//           <Route path="/add-recipe" element={<AddRecipe />} />
//           <Route path="/edit-recipe/:id" element={<EditRecipe />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



// // frontend/src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavigationBar from './components/NavigationBar';
// import RecipeList from './components/RecipeList';
// import RecipeDetails from './components/RecipeDetails';
// import AddRecipe from './components/AddRecipe';
// import EditRecipe from './components/EditRecipe';

// // Placeholder Home component for each route
// const Home = () => <div>Home Page</div>;

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <NavigationBar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/recipe/:id" element={<RecipeDetails />} />
//           <Route path="/add-recipe" element={<AddRecipe />} />
//           <Route path="/edit-recipe/:id" element={<EditRecipe />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;





// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipe from './components/AddRecipe';
import EditRecipe from './components/EditRecipe';

const Home = () => <RecipeList />;

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/edit-recipe/:id" element={<EditRecipe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
