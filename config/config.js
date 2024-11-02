/* 
  File Name: config.js
  Description: Database configuration file for the backend application. 
               This file exports the connection string for MongoDB Atlas, 
               allowing the application to connect to the remote contacts database. 
  Student's Name: Orlando Velasco Rios
  Student ID: 301368612
  Date: October 31, 2024
*/

// Connection string to MongoDB Atlas. This URL contains the username, password, 
// and database path for connecting to the remote MongoDB database 'contacts'.
module.exports = {
    "ATLASDB": "mongodb+srv://dbadmin:YVr3YKLvmAZjDlPF@express.oh34o.mongodb.net/contacts?retryWrites=true&w=majority"
}