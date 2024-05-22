const { modelonemutation } = require('./modelone/mutation')

const mutationgql = `
    type Mutation {
        ${modelonemutation}
    }
`;

module.exports = {
    mutationgql
}