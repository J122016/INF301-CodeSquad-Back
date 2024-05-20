const mongoose = require('mongoose');

// Define the schema for the model
const roleschema = new mongoose.Schema({
    rol: String,
    nrol: String
});

// Create the model using the defined schema
module.exports = mongoose.model('Roles', roleschema);