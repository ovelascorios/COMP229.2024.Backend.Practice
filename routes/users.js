/* 
  File Name: users.js
  Description: Defines routes for handling contact-related operations such as listing, retrieving, creating, updating, and deleting users.
               Routes link HTTP requests to specific controller functions, enabling CRUD operations in the app. 
  Student's Name: Orlando Velasco Rios
  Student ID: 301368612
  Date: October 31, 2024
*/

// Import Express to define routes
var express = require('express');

// Create a router instance
var router = express.Router();

// Import users controller 
let usersController = require('../controllers/users');

// Route to list all users (GET request)
router.get('/', usersController.list);

// Route to get a specific user by ID (GET request) using userGet function
router.get('/:id', usersController.userGet , usersController.userByID);

// Route to create a new user (POST request)
router.post('/', usersController.create);

// Route to update an existing user by ID (PUT request)
router.put('/:id', usersController.update);

// Route to delete a user by ID (DELETE request)
router.delete('/:id', usersController.remove);

// Export the router for use in the app
module.exports = router;
