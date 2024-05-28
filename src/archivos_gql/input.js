const { rolinput } = require('./rol/input')
const { usuarioinput } = require('./usuario/input')
const { modeloneinput } = require('./modelone/input')
const { agendainput } = require('./agenda/input')
const { reservainput } = require('./reserva/input')
const { boletaInput } = require('./boleta/input')

const inputgql = `
    ${rolinput}
    ${usuarioinput}
    ${modeloneinput}
    ${agendainput}
    ${reservainput}
    ${boletaInput}
`;

module.exports = {
    inputgql
}