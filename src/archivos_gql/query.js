const { modelonequery } = require('./modelone/query')
const { rolquery } = require('./rol/query')
const { usuarioquery } = require('./usuario/query')
const { agendaquery } = require('./agenda/query')
const { facturaQuery } = require('./factura/query')
const { reservaquery } = require('./reserva/query')
const { boletaQuery } = require('./boleta/query')

const querygql = `
    type Query {
        ${modelonequery}
        ${rolquery}
        ${usuarioquery}
        ${agendaquery}
        ${facturaQuery}
        ${reservaquery}
        ${boletaQuery}
    }
`;

module.exports = {
    querygql
}