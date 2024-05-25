//Auxiliar structures to use as input in mutations

const facturaInput = `
    "Estructura de entrada para crear factura"
    input FacturaInput {
        "id de médico a facturar"           id_medico: String!
        "Cantidad de atenciones a incluir"  numero_atenciones: Int!
        "% de comisión asociado"            comision: Float!
        "precio final de factura"           monto: Float!
    },

    "Estructura de entrada para modificar factura, es decir, añadir comprobante"
    input ComprobanteInput{
        "id de factura"         factura_id: String!
        "url de comprobante"    comprobante_pdf: String!
        "nota opcional"         nota_adicional_comprobante: String!
    }
`;

module.exports = {
    facturaInput
}