const mongoose = require('mongoose');

// Define the schema for the model
const modelSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    }
});

// Create the model using the defined schema
const exampleModel = mongoose.model('exampleModel', modelSchema);

module.exports = exampleModel;