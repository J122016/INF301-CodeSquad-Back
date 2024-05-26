const { rolinput } = require('./rol/input')
const { usuarioinput } = require('./usuario/input')
const { modeloneinput } = require('./modelone/input')
const { agendainput } = require('./agenda/input')

const inputgql = `
    ${rolinput}
    ${usuarioinput}
    ${modeloneinput}
    ${agendainput}
`;

module.exports = {
    inputgql
}