const { rolinput } = require('./rol/input')
const { usuarioinput } = require('./usuario/input')
const { modeloneinput } = require('./modelone/input')

const inputgql = `
    ${rolinput}
    ${usuarioinput}
    ${modeloneinput}
`;

module.exports = {
    inputgql
}