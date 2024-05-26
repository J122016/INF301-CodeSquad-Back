const { modelonefuncquery } = require('./modelone/funcion_query');
const { usuariofuncquery } = require('./usuario/funcion_query');
const { rolfuncquery } = require('./rol/funcion_query');
const { agendafuncquery } = require('./agenda/funcion_query');

const funcionquery = {};

Object.assign(funcionquery,modelonefuncquery);
Object.assign(funcionquery,usuariofuncquery);
Object.assign(funcionquery,rolfuncquery);
Object.assign(funcionquery,agendafuncquery);

module.exports = {
    funcionquery
}