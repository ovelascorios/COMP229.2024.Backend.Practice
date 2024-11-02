/* 
  File Name: index.js
  Description: Defines the root route for the application, sending a welcome message for the Portfolio Backend API.  
  Student's Name: Orlando Velasco Rios
  Student ID: 301368612
  Date: October 31, 2024
*/

// Import Express to define routes
var express = require('express');
// Create a router instance
var router = express.Router();

// GET route for the home page
// Sends a welcome message when accessing the root URL ('/')
router.get('/', function(req, res, next) {
  res.send('Welcome to Portfolio Backend API'); 
});

// Export the router for use in the app
module.exports = router;
