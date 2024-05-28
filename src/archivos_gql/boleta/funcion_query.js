const BoletaModel = require('../../models/boletaModel');

const boletaFuncQuery = {
    async getBoletas() {
        return await BoletaModel.find();
    },
    async getBoleta(_, { id }) {
        return await BoletaModel.findById(id);
    }
};

module.exports = {
    boletaFuncQuery
};
