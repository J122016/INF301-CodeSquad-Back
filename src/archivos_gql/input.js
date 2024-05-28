const { modeloneinput } = require('./modelone/input')
const { rolinput } = require('./rol/input')
const { usuarioinput } = require('./usuario/input')
const { facturaInput } = require('./factura/input')
const { agendainput } = require('./agenda/input')
const { reservainput } = require('./reserva/input')
const { boletaInput } = require('./boleta/input')

const inputgql = `
    ${modeloneinput}
    ${rolinput}
    ${usuarioinput}
    ${facturaInput}
    ${agendainput}
    ${reservainput}
    ${boletaInput}
`;

module.exports = {
    inputgql
}