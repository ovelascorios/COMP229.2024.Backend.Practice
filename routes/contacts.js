/* 
  File Name: contacts.js
  Description: Defines routes for handling contact-related operations such as listing, retrieving, creating, updating, and deleting contacts.
               Routes link HTTP requests to specific controller functions, enabling CRUD operations in the app.  
  Student's Name: Orlando Velasco Rios
  Student ID: 301368612
  Date: October 31, 2024
*/

// Import Express to define routes
var express = require('express');

// Create a router instance
var router = express.Router();

// Import contacts controller 
let contactsController = require('../controllers/contacts');

// Route to list all contacts (GET request)
router.get('/', contactsController.list);

// Route to get a specific contact by ID (GET request) using contactGet function
router.get('/:id', contactsController.contactGet , contactsController.contactByID);

// Route to create a new contact (POST request)
router.post('/', contactsController.create);

// Route to update an existing contact by ID (PUT request)
router.put('/:id', contactsController.update);

// Route to delete a contact by ID (DELETE request)
router.delete('/:id', contactsController.remove);

// Export the router for use in the app
module.exports = router;
