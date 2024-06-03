// definitions of mutations, more details in funcion_mutation.js

const facturaMutation = `
    "Crear una factura nueva"
    addFactura(facturaInput: FacturaInput): Factura

    "Anular/eliminar factura si solo si no tiene comprobante"
    anularFactura(factura_id: String!): Mensaje

    "Anexar comprobante pago comisión a factura con id conocido, marca atenciones como facturadas"
    updateFactura(comprobanteInput: ComprobanteInput): FacturaReservasMod
    `;

module.exports = {
    facturaMutation
}