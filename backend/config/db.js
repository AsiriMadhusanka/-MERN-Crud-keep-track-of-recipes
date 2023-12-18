const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const { DB_URI } = process.env;

const connectDB = async () => {
 try {
   await mongoose.connect(DB_URI);
   console.log('Connected to MongoDB Atlas');
 } catch (error) {
   console.error('Error connecting to MongoDB Atlas:', error.message);
   process.exit(1);
 }
};

module.exports = connectDB;
