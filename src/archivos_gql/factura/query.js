// definitions of queries, more details in funcion_query.js

const facturaQuery = `
    "Obtener facturas filtradas o todas por defecto"
    getFacturas(filters: OptionalFilters): [Factura]
    
    "Obtener factura especifica con dado id"
    getFactura(id: String!): Factura

    "Calcula atenciones a cobrar y monto asociado"
    getReservasAFacturar(id_medico:String!, fecha_inicio:String!, fecha_final:String!): ResumenAtencionesACobrar

    "Calcula monto comision recaudado por día de reserva para cada medico"
    getReporteComisionesMedicosPorDia( fecha_inicio:String!, fecha_final:String!): [ReporteAtencionesEfectuadasPorDia]
`;

module.exports = {
    facturaQuery
}