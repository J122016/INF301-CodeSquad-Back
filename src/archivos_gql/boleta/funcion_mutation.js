const BoletaModel = require('../../models/boletaModel');

const boletaFuncMutation = {
    async addBoleta(_, { input }) {
        const nuevaBoleta = new BoletaModel(input);
        await nuevaBoleta.save();
        return nuevaBoleta;
    },
    async updateBoleta(_, { id, input }) {
        const boletaActualizada = await BoletaModel.findByIdAndUpdate(id, input, { new: true });
        return boletaActualizada;
    },
    async deleteBoleta(_, { id }) {
        const boletaBorrada = await BoletaModel.findByIdAndDelete(id);
        if (!boletaBorrada) {
            throw new Error(`Boleta no encontrada`);
        }
        return { id: id, mensaje: 'Boleta eliminada' };
    }
};

module.exports = {
    boletaFuncMutation
};
