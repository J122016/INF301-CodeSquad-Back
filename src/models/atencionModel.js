const mongoose = require('mongoose');

const atencionSchema = new mongoose.Schema({
    descripcion: String,
    fecha: String,
    hora: String,
    id_medico: String,
    usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
    correo: String
});

module.exports = mongoose.model('Atencion', atencionSchema);
