const { modelonequery } = require('./modelone/query')
const { rolquery } = require('./rol/query')
const { usuarioquery } = require('./usuario/query')
const { agendaquery } = require('./agenda/query')
const { reservaquery } = require('./reserva/query')
const { boletaQuery } = require('./boleta/query')

const querygql = `
    type Query {
        ${modelonequery}
        ${rolquery}
        ${usuarioquery}
        ${agendaquery}
        ${reservaquery}
        ${boletaQuery}
    }
`;

module.exports = {
    querygql
}