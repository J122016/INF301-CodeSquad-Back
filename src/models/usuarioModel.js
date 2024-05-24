const mongoose = require('mongoose');

// Define the schema for the model
const usuarioSchema = new mongoose.Schema({
    usuario: String,
    pass: String,
    nombre: String,
    rut: String,
    mail: String,
    nrol: String
});

// Create the model using the defined schema
module.exports = mongoose.model('Usuario', usuarioSchema);