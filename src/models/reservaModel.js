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

//bloqueo de horas duplicadas para un médico
reservaschema.index({ fecha: 1, hora: 1, id_medico:1}, { unique: true });

// Create the model using the defined schema
module.exports = mongoose.model('Reserva', reservaschema);