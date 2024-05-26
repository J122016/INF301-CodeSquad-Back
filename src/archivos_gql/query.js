const { modelonequery } = require('./modelone/query')
const { rolquery } = require('./rol/query')
const { usuarioquery } = require('./usuario/query')
const { agendaquery } = require('./agenda/query')

const querygql = `
    type Query {
        ${modelonequery}
        ${rolquery}
        ${usuarioquery}
        ${agendaquery}
    }
`;

module.exports = {
    querygql
}