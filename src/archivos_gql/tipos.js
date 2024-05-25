const { roltipo } = require('./rol/tipo')
const { usuariotipo } = require('./usuario/tipo')
const { modelonetipo } = require('./modelone/tipo')
const { facturaTipo } = require('./factura/tipo')

const tiposgql = `
    ${modelonetipo}
    ${roltipo}
    ${usuariotipo}
    "Facturas para emisión y registro de comisiones"  ${facturaTipo}
    type Mensaje {
        id: ID!
        mensaje: String!
    }
`;

module.exports = {
    tiposgql
}