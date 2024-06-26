const { roltipo } = require('./rol/tipo')
const { usuariotipo } = require('./usuario/tipo')
const { modelonetipo } = require('./modelone/tipo')
const { agendatipo } = require('./agenda/tipo')
const { facturaTipo } = require('./factura/tipo')
const { reservatipo } = require('./reserva/tipo')
const { boletaTipo } = require('./boleta/tipo')

const tiposgql = `
    ${modelonetipo}
    ${roltipo}
    ${usuariotipo}
    ${agendatipo}
    ${facturaTipo}
    ${reservatipo}
    ${boletaTipo}
    type Mensaje {
        id: ID!
        mensaje: String!
    }
    type Mensaje2 {
        rut: String!
        nrol: String!
        mensaje: String!
    }
    type Mensaje3 {
        mensaje: String!
    }
`;

module.exports = {
    tiposgql
}