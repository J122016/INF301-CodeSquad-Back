const mongoose = require('mongoose');

const BoletaSchema = new mongoose.Schema({
    id_atencion: String,
    monto: Number,
    fecha: Date
});

const Boleta = mongoose.model('Boleta', BoletaSchema);

module.exports = Boleta;