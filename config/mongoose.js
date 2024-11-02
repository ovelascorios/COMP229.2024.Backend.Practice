/* 
  File Name: mongoose.js
  Description: MongoDB database connection configuration file.
               Sets up and initializes a connection to MongoDB using Mongoose,
               accessing the connection string from the config file.  
  Student's Name: Orlando Velasco Rios
  Student ID: 301368612
  Date: October 31, 2024
*/

// Import the configuration file for database connection string
let config = require('./config');

//DataBase SetUp

// Import Mongoose library for MongoDB interaction
const mongoose = require('mongoose');

// Export a function to establish a database connection when invoked
module.exports = function (){

  // Connect to MongoDB Atlas using the connection string provided in config  
  mongoose.connect(config.ATLASDB);

  // Reference to the database connection  
  let mongodb = mongoose.connection;

  // Event listener for handling connection errors
  mongodb.on('error', console.error.bind(console, 'Connection Error: '));

  // Event listener for successful connection
  mongodb.once('open', ()=>{
      console.log("===> Connected to MongoDB.")
  })
}