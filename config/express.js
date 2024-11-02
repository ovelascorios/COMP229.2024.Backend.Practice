/* 
  File Name: express.js
  Description: Main Express application setup and configuration file.
               Configures middleware, routes, and error handling for the backend server. 
  Student's Name: Orlando Velasco Rios
  Student ID: 301368612
  Date: October 31, 2024
*/

// Import essential modules for server setup
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Route handlers for different sections of the application
var indexRouter = require('../routes/index'); // main application
var usersRouter = require('../routes/users'); // user-related endpoints
var contactsRouter = require('../routes/contacts');  //contacts-related endpoints


var app = express(); // Initialize the Express application

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Route configurations
app.use('/', indexRouter); // Root path route configuration
app.use('/api/users', usersRouter); // User routes under '/api/users'
app.use('/api/contacts', contactsRouter); // Contacts routes under '/api/contacts'


// Catch 404 errors and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Global error handler
app.use(function(err, req, res, next) {

  // Send the error message
  res.status(err.status || 500);
  
  // Return a JSON response with success status and error message
  res.json({ 
    sucess: false ,
    message: err.message

   });
});


// Export the app instance for use in other parts of the application
module.exports = app;
