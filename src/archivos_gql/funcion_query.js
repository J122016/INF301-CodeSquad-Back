const { modelonefuncquery } = require('./modelone/funcion_query');
const { usuariofuncquery } = require('./usuario/funcion_query');
const { rolfuncquery } = require('./rol/funcion_query');
const { facturaFuncQuery } = require('./factura/funcion_query');


const funcionquery = {};

Object.assign(funcionquery,modelonefuncquery);
Object.assign(funcionquery,usuariofuncquery);
Object.assign(funcionquery,rolfuncquery);
Object.assign(funcionquery,facturaFuncQuery);

module.exports = {
    funcionquery
}