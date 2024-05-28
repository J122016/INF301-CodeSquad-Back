// definitions of queries, more details in funcion_query.js

const facturaQuery = `
    "Obtener todas las facturas"
    getFacturas: [Factura]
    
    "Obtener factura especifica con dado id"
    getFactura(id: String!): Factura

    "TO DO WAITING FOR ATENCIONES - Calcula atenciones a cobrar y monto asociado"
    getReservasAFacturar(id_medico:String!, fecha_inicio:String!, fecha_final:String!): ResumenAtencionesACobrar
`;

module.exports = {
    facturaQuery
}