const { modelonefuncmutation } = require('./modelone/funcion_mutation');
const { rolfuncmutation } = require('./rol/funcion_mutation');
const { usuariofuncmutation } = require('./usuario/funcion_mutation');

const funcionmutation = {};

Object.assign(funcionmutation,modelonefuncmutation);
Object.assign(funcionmutation,rolfuncmutation);
Object.assign(funcionmutation,usuariofuncmutation);

module.exports = {
    funcionmutation
}