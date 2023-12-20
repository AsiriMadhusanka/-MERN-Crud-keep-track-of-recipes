// src/components/NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavigationBar.css'; // Import the custom tailwind.css file

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          My Recipes App
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-recipe" className="nav-links">
              Add Recipe
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
