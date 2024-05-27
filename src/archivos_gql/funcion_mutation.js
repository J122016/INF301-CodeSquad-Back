const { modelonefuncmutation } = require('./modelone/funcion_mutation');
const { rolfuncmutation } = require('./rol/funcion_mutation');
const { usuariofuncmutation } = require('./usuario/funcion_mutation');
const { agendafuncmutation } = require('./agenda/funcion_mutation');
const { facturaFuncMutation } = require('./factura/funcion_mutation');
const { reservafuncmutation } = require('./reserva/funcion_mutation');

const funcionmutation = {};

Object.assign(funcionmutation,modelonefuncmutation);
Object.assign(funcionmutation,rolfuncmutation);
Object.assign(funcionmutation,usuariofuncmutation);
Object.assign(funcionmutation,agendafuncmutation);
Object.assign(funcionmutation,facturaFuncMutation);
Object.assign(funcionmutation,reservafuncmutation);

module.exports = {
    funcionmutation
}