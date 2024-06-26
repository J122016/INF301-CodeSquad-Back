//Auxiliar structures to use as input in mutations

const facturaInput = `
    "Estructura de entrada para crear factura"
    input FacturaInput {
        "id de médico a facturar"           id_medico: String!
        "Cantidad de atenciones a incluir"  numero_atenciones: Int!
        "% de comisión asociado"            comision: Float!
        "precio final de factura"           monto: Float!
        "id de usuario que creo factura"    creada_por: String!
    },

    "Estructura de entrada para modificar factura, es decir, añadir comprobante"
    input ComprobanteInput{
        "id de factura"                     factura_id: String!
        "url de comprobante"                comprobante_pdf: String!
        "nota opcional"                     nota_adicional_comprobante: String!
        "id usuario que actualiza"          actualizada_por: String!
    }

    "Estructura auxiliar contenedora de filtros opcionales"
    input OptionalFilters{
        "fecha corte de inicio"             inicio:String
        "fecha corte final"                 final:String
        "id de médico a buscar"             id_medico: String
    }
`;

module.exports = {
    facturaInput
}