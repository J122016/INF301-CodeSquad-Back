const mongoose = require('mongoose');

// Define the schema for the model
const agendaschema = new mongoose.Schema({
    categoria: String,
    id_medico: String,
    fecha: Date,
    laboral: String
});

// Create the model using the defined schema
module.exports = mongoose.model('Agenda', agendaschema);