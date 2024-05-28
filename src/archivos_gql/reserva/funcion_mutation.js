const ReservaModel = require('../../models/reservaModel');

const reservafuncmutation = {
    async crearReserva(obj, { input }) {
        const blanco = { atendido: 0, facturado: 0, pagado: 0 };
        Object.assign(input, blanco);
        const entity = new ReservaModel(input);

        // Reserva Hora
        try {
            await entity.save();   
        } catch (error) {
            throw new Error('Reserva no guardada',error);
        }

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

    // Cancela reserva especifica dado paciente, medico, día y hora
    async cancelarReserva(obj, { input, reserva } ) {
        const search = {...input, ...reserva}
        console.log("rut, fecha, hora, id_medico", search)
        const pop = await ReservaModel.findOneAndDelete( search );
        if (!pop) {
            return {mensaje:"Reserva No anulada"};
        }
        return {mensaje:"Reserva Anulada"};
    },

    /**
     * function marcarPagado deprecada
     * ---
     * flujo reservas es: 
     * 1. pagar (manejado por boletas > addBoleta, antes reserva > marcarPagado)
     * 2. atender (manejado por reserva > marcaratendido)
     * 3. facturar(manejado por factura > updateFactura)
     */
    async marcarPagado(obj, { input, reserva  } ) {
        return {mensaje:"Deprecada, usar 'addBoleta'."};
    },

    //Para acceder a atencion requiere pagar previamente
    async marcaratendido(obj, { input, reserva  } ) {
        const search = {...input, ...reserva}
        const target = await ReservaModel.findOne(search)
        if (target.pagado == 0) {
            return {mensaje:"Error efectando el cambio. Requiere pago previo."};
        }
        target.atendido = 1;
        try {
            target.save();
            return {mensaje:"Estado actualizado"};
        } catch (err) {
            return {mensaje:"Error efectando el cambio"};
        }
    }
}

module.exports = {
    reservafuncmutation
}