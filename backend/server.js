const express = require('express');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes');
const cors = require('cors');

const app = express();


// Connect to MongoDB
connectDB();
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Use the recipe routes
app.use('/api/recipes', recipeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
