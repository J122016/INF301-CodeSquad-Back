const { modelonemutation } = require('./modelone/mutation')
const { rolutation } = require('./rol/mutation')
const { usuariomutation } = require('./usuario/mutation')
const { agendautation } = require('./agenda/mutation')
const { facturaMutation } = require('./factura/mutation')
const { reservamutation } = require('./reserva/mutation')
const { boletaMutation } = require('./boleta/mutation')

const mutationgql = `
    type Mutation {
        ${modelonemutation}
        ${rolutation}
        ${usuariomutation}
        ${agendautation}
        ${facturaMutation}
        ${reservamutation}
        ${boletaMutation}
    }
`;

module.exports = {
    mutationgql
}