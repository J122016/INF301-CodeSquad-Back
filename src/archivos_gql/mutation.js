const { modelonemutation } = require('./modelone/mutation')
const { rolutation } = require('./rol/mutation')
const { usuariomutation } = require('./usuario/mutation')
const { agendautation } = require('./agenda/mutation')

const mutationgql = `
    type Mutation {
        ${modelonemutation}
        ${rolutation}
        ${usuariomutation}
        ${agendautation}
    }
`;

module.exports = {
    mutationgql
}