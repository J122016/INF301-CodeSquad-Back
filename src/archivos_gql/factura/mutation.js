// definitions of mutations, more details in funcion_mutation.js

const facturaMutation = `
    "Crear una factura nueva"
    addFactura(input: FacturaInput): Factura

    "Anexar comprobante a factura con id conocido"
    updateFactura(id: String!, input: ComprobanteInput): Factura
    `;
    //deleteEntity(id: String!): Mensaje

module.exports = {
    facturaMutation
}