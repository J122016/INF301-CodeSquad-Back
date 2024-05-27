const { modelonefuncquery } = require('./modelone/funcion_query');
const { usuariofuncquery } = require('./usuario/funcion_query');
const { rolfuncquery } = require('./rol/funcion_query');
const { agendafuncquery } = require('./agenda/funcion_query');
const { facturaFuncQuery } = require('./factura/funcion_query');

const { reservasfuncquery } = require('./reserva/funcion_query');

const funcionquery = {};

Object.assign(funcionquery,modelonefuncquery);
Object.assign(funcionquery,usuariofuncquery);
Object.assign(funcionquery,rolfuncquery);
Object.assign(funcionquery,agendafuncquery);
Object.assign(funcionquery,facturaFuncQuery);
Object.assign(funcionquery,reservasfuncquery);

module.exports = {
    funcionquery
}