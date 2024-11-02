/* 
  File Name: contacts.js
  Description: Defines the Mongoose schema and model for contact entries,
               specifying the structure and data types for contacts in the MongoDB database.  
  Student's Name: Orlando Velasco Rios
  Student ID: 301368612
  Date: October 31, 2024
*/


// Import Mongoose library for MongoDB interaction
const mongoose = require('mongoose');

// Alias for Mongoose schema creation
const Schema = mongoose.Schema;

// Define schema for contact entries, specifying each field and its data type
const ContactSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String
});

// Export the Contacts model based on the defined schema
module.exports = mongoose.model('Contact', ContactSchema);