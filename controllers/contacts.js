/* 
  File Name: contacts.js
  Description: Controller file for handling CRUD operations on contacts entries.
               Defines methods to create, list, retrieve, update, and delete contacts
               in the MongoDB database using the Contacts model.  
  Student's Name: Orlando Velasco Rios
  Student ID: 301368612
  Date: October 31, 2024
*/

// Import the Contacts model for database operations
let ContactModel = require('../models/contacts')

// Create a new contact entry in the database
  module.exports.create =  async function(req,res,next){
    try {
        
        // Create new contact from request body
        let newContact = new ContactModel(req.body);

        // Save contact to database
        let result = await ContactModel.create(newContact);
        
        // Log the result to the console
        console.log(result);
        res.json({
            success: true,
            message: `Contact (ID: ${result._id}) created successfully`
        })

    } catch (error) {
        console.log(error); // Log error
        next(error); // Pass error for handling
    }
  }


  // List all contacts in the database
  module.exports.list = async function(req,res,next){
    try {
        
         // Retrieve all contacts
        let list = await ContactModel.find({});

        // Send contact list as JSON response
        res.json(list);

    } catch (error) {
        console.log(error);
        next(error);
    }
  }

  // Retrieve a specific contact by ID and attach it to the request
  module.exports.contactGet = async function(req,res,next){
    try {
        
        // Get contact ID from request parameters
        let uID  = req.params.id;
        // Retrieve contact by ID
        req.contact = await ContactModel.findOne({_id: uID});
        next();

    } catch (error) {
        console.log(error);
        next(error);
    }
  }


  // Retrieve a specific contact by ID from the request object and send as JSON
  module.exports.contactByID = async function(req,res,next){
    // Send contact data attached to the request as JSON
    res.json(req.contact);
  }

  // Update a specific contact entry in the database
  module.exports.update =  async function(req,res,next){
    try {
        
         // Get contact ID from request parameters
        let uID  = req.params.id;
        // Create new contact object with updated data
        let updateContact = new ContactModel(req.body);
        // Set the contact ID to match the ID in the request
        updateContact._id = uID;

        // Update contact in database
        let result = await ContactModel.updateOne({_id: uID}, updateContact);
        // Log the update result
        console.log(result);

        if(result.modifiedCount>0){
            res.json({
                success: true,
                message: `Contact (ID: ${uID}) updated successfully`
            });

        } else{
            //Express will catch this on its own
            throw new Error(`Contact (ID: ${uID}) not updated. Are you sure it exists?`);
            
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
  }

  // Delete a specific contact entry from the database
  module.exports.remove =  async function(req,res,next){
    try {
        
        // Get contact ID from request parameters
        let uID  = req.params.id;
        
        // Delete contact from database
        let result = await ContactModel.deleteOne({_id: uID});
         // Log the deletion result
        console.log(result);

        if(result.deletedCount>0){
            res.json({
                success: true,
                message: `Contact (ID: ${uID}) deleted successfully`
            });

        } else{
            //Express will catch this on its own
            throw new Error(`Contact (ID: ${uID}) not deleted. Are you sure it exists?`);
            
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
  }