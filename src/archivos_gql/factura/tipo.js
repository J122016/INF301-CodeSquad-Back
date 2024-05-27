//Model mapping to give graphql available attributes of model

const facturaTipo = `
    "Modelo factura para emisión y registro de comisiones" 
    type Factura {
        "Default mongo Id"                              id: ID!
        "mongo id de médico"                            id_medico: String!
        "numero de atenciones a facturar"               numero_atenciones: Int!
        "% de comisión a pagar para el centro"          comision: Float!
        "monto a facturar"                              monto: Int!
        "comentarios adicionales (opcional)"            nota_adicional: String
        "url de comprobante de pago"                    comprobante_pdf: String
        "comentarios de comprobante (opcional)"         nota_adicional_comprobante: String
        "id de usuario que creo factura"                creada_por: String!
        "id de usuario que actualizo por última vez"    actualizada_por: String
        "fecha creación"                                createdAt: String!
        "fecha actualización (anexo de comprobante)"    updatedAt: String!
    }

    "Modelo auxiliar de resumen atenciones"
    type ResumenAtencionesACobrar{
        "monto a facturar"                              monto: Int!
        "numero de atenciones a facturar"               numero_atenciones: Int!
    }
`;

module.exports = {
    facturaTipo
}