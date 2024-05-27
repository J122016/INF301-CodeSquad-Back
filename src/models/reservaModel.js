const mongoose = require('mongoose');

const reservaschema = new mongoose.Schema({
    rut: String,
    fecha: Date,
    hora: String,
    id_medico: String,
    atendido: Boolean,
    facturado: Boolean,
    pagado: Boolean,
});

// Create the model using the defined schema
module.exports = mongoose.model('Reserva', reservaschema);