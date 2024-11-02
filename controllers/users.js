/* 
  File Name: users.js
  Description: Controller file for handling CRUD operations on  users entries.
               Defines methods to create, list, retrieve, update, and delete contacts
               in the MongoDB database using the Users model.  
  Student's Name: Orlando Velasco Rios
  Student ID: 301368612
  Date: October 31, 2024
*/

// Import the Users model for database operations
let UserModel = require('../models/users')

// Create a new user entry in the database
  module.exports.create =  async function(req,res,next){
    try {
        
        // Create new user from request body
        let newUser = new UserModel(req.body);

        // Save user to database
        let result = await UserModel.create(newUser);
        
        // Log the result to the console
        console.log(result);
        res.json({
            success: true,
            message: `User (ID: ${result._id}) created successfully`
        })

    } catch (error) {
        console.log(error); // Log error
        next(error); // Pass error for handling
    }
  }


  // List all users in the database
  module.exports.list = async function(req,res,next){
    try {
        
         // Retrieve all users
        let list = await UserModel.find({});

        // Send contact list as JSON response
        res.json(list);

    } catch (error) {
        console.log(error);
        next(error);
    }
  }

  // Retrieve a specific user by ID and attach it to the request
  module.exports.userGet = async function(req,res,next){
    try {
        
        // Get usert ID from request parameters
        let uID  = req.params.id;
        // Retrieve user by ID
        req.user = await UserModel.findOne({_id: uID});
        next();

    } catch (error) {
        console.log(error);
        next(error);
    }
  }


  // Retrieve a specific user by ID from the request object and send as JSON
  module.exports.userByID = async function(req,res,next){
    // Send user data attached to the request as JSON
    res.json(req.user);
  }

  // Update a specific user entry in the database
  module.exports.update =  async function(req,res,next){
    try {
        
         // Get user ID from request parameters
        let uID  = req.params.id;
        // Create new user object with updated data
        let updateUser = new UserModel(req.body);
        // Set the user ID to match the ID in the request
        updateUser._id = uID;

        // Update user in database
        let result = await UserModel.updateOne({_id: uID}, updateUser);
        // Log the update result
        console.log(result);

        if(result.modifiedCount>0){
            res.json({
                success: true,
                message: `User (ID: ${uID}) updated successfully`
            });

        } else{
            //Express will catch this on its own
            throw new Error(`User (ID: ${uID}) not updated. Are you sure it exists?`);
            
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
  }

  // Delete a specific user entry from the database
  module.exports.remove =  async function(req,res,next){
    try {
        
        // Get user ID from request parameters
        let uID  = req.params.id;
        
        // Delete user from database
        let result = await UserModel.deleteOne({_id: uID});
         // Log the deletion result
        console.log(result);

        if(result.deletedCount>0){
            res.json({
                success: true,
                message: `User (ID: ${uID}) deleted successfully`
            });

        } else{
            //Express will catch this on its own
            throw new Error(`User (ID: ${uID}) not deleted. Are you sure it exists?`);
            
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
  }