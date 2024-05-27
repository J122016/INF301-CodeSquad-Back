const ReservaModel = require('../../models/reservaModel');

const reservafuncmutation = {
    async crearReserva(obj, { input }) {
        // Crea atencion
        const entity = new ReservaModel(input);

        // Reserva Hora
        await entity.save();

        // Manejo de reslutado
        return {id: entity.id,mensaje:"Reserva Creada"}
    },

    async modificarReserva (obj, { search, update } ) {
        // { rut, fecha } = search
        // ReservaModel ( update )

        try {
            const updatedReserva = await ReservaModel.findOneAndUpdate(
                search,       // Rut y Fecha
                update,
                { new: true } // opt: Devuelve el documento actualizado
            );

            if (!updatedReserva) {
                throw new Error('Reserva no encontrada');
            }
            return "Reserva Modificada";
        } catch (error) {
            console.error('Error al actualizar la reserva:', error);
            return "Reserva No Modificada";
        }
    },

    async cancelarReserva  (obj, { search } ) {
        try {
            const pop = await reservaModel.findOneAndDelete( search );
            if (!pop) {
                throw new Error('Reserva no encontrada');
            }
            return "Reserva Anulada"
        } catch {
            console.error('Error al anular la reserva:', error);
            return "Reserva No anulada";
        }
    }
}

module.exports = {
    reservafuncmutation
}