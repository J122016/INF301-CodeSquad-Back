const ReservaModel = require('../../models/reservaModel');

const reservafuncmutation = {
    async crearReserva(obj, { input }) {
        const blanco = { atendido: 0, facturado: 0, pagado: 0 };
        Object.assign(input, blanco);
        const entity = new ReservaModel(input);

        // Reserva Hora
        await entity.save();

        // Manejo de reslutado
        return {id: entity.id,mensaje:"Reserva Creada"}
    },

    async modificarReserva (obj, { input, update } ) {
        // { rut, fecha } = search
        // ReservaModel ( update )

        try {
            const updatedReserva = await ReservaModel.findOneAndUpdate(
                input,       // Rut y Fecha
                update,
                { new: true } // opt: Devuelve el documento actualizado
            );

            if (!updatedReserva) {
                throw new Error('Reserva no encontrada');
            }
            return {id: updatedReserva.id,mensaje:"Reserva Modificada"};
        } catch (error) {
            console.error('Error al actualizar la reserva:', error);
            return {id: "0",mensaje:"Reserva No Modificada"};
        }
    },

    async cancelarReserva(obj, { input } ) {
        const pop = await ReservaModel.findOneAndDelete( input );
        if (!pop) {
            return {mensaje:"Reserva No anulada"};
        }
        return {mensaje:"Reserva Anulada"};
    },

    async marcaratendido(obj, { input } ) {
        const pop = await ReservaModel.findOneAndUpdate( input , { atendido: 1 }
        );
        if (!pop) {
            return {mensaje:"Error efectando el cambio"};
        }
        return {mensaje:"Estado actualizado"};
    }
}

module.exports = {
    reservafuncmutation
}