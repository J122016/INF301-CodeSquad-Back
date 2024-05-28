const BoletaModel = require('../../models/boletaModel');
const ReservaModel = require('../../models/reservaModel');

const boletaFuncMutation = {
    async addBoleta(_, { input }) {
        const nuevaBoleta = new BoletaModel(input);
        
        //actualizando reserva pagada->1
        const id = {id: input.id_atencion}
        const pop = await ReservaModel.findOneAndUpdate( id , { pagado: 1 }
        );
        if (!pop) {
            throw new Error("Error reserva no encontrada");
        }

        //guardando boleta
        try {
            await nuevaBoleta.save();
            return nuevaBoleta;
        } catch (error) {
            // TODO: log errors
            const rollback = await ReservaModel.findOneAndUpdate( id , { pagado: 0 });
            throw new Error("Error al crear boleta, rollback:",!rollback);
        }
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
