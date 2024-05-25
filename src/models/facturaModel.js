const mongoose = require('mongoose');

// Define schema factura
const facturaSchema =  new mongoose.Schema({
  //_id: mongo auto defined
  id_medico: {
    type: String,
    required: true,
  },
  /*fecha: {
    type: Date,
    required: true,
  },*/
  numero_atenciones: {
    type: Number,
    required: true,
  },
  comision: {
    type: Number,
    required: true,
  },
  monto: {
    type: Number,
    required: true,
  },
  nota_adicional: {
    type: String,
  },
  comprobante_pdf: {
    type: String, // String to store as base64 OR Buffer for binaries OR String to the file path
  },
  /*fecha_comprobante: {
    type: Date,
    required: true,
  },*/
  nota_adicional_comprobante: {
    type: String,
  },
}, { timestamps: true }); // Adds createdAt (fecha) and updatedAt(fecha_comprobante) mongo fields

// export model Factura
module.exports = mongoose.model('Factura', facturaSchema);