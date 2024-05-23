const { modelonemutation } = require('./modelone/mutation')
const { rolutation } = require('./rol/mutation')
const { usuariomutation } = require('./usuario/mutation')

const mutationgql = `
    type Mutation {
        ${modelonemutation}
        ${rolutation}
        ${usuariomutation}
    }
`;

module.exports = {
    mutationgql
}