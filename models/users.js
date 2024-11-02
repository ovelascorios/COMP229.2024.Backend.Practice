/* 
  File Name: users.js
  Description: Defines the Mongoose schema and model for users entries,
               specifying the structure and data types for contacts in the MongoDB database.  
  Student's Name: Orlando Velasco Rios
  Student ID: 301368612
  Date: October 31, 2024
*/


// Import Mongoose library for MongoDB interaction
const mongoose = require('mongoose');

// Alias for Mongoose schema creation
const Schema = mongoose.Schema;

// Define schema for user entries, specifying each field and its data type
const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    created: Date,
    updated: Date
});

// Export the Users model based on the defined schema
module.exports = mongoose.model('User', UserSchema);