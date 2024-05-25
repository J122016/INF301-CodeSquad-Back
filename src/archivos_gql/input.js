const { modeloneinput } = require('./modelone/input')
const { rolinput } = require('./rol/input')
const { usuarioinput } = require('./usuario/input')
const { facturaInput } = require('./factura/input')

const inputgql = `
    ${modeloneinput}
    ${rolinput}
    ${usuarioinput}
    ${facturaInput}
`;

module.exports = {
    inputgql
}