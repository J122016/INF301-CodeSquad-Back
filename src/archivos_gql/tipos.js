const { roltipo } = require('./rol/tipo')
const { usuariotipo } = require('./usuario/tipo')
const { modelonetipo } = require('./modelone/tipo')

const tiposgql = `
    ${modelonetipo}
    ${roltipo}
    ${usuariotipo}
    type Mensaje {
        id: ID!
        mensaje: String!
    }
    type Mensaje2 {
        id: ID!
        nrol: String!
        mensaje: String!
    }
`;

module.exports = {
    tiposgql
}