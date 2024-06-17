const ReservaModel = require('../../models/reservaModel');

const reservafuncmutation = {
    async crearReserva(obj, rut, reserva ) {
        const blanco = { atendido: 0, facturado: 0, pagado: 0 };
        const entity = new ReservaModel({...reserva, ...rut, ...blanco});

        // Reserva Hora
        try {
            await entity.save();   
        } catch (error) {
            throw new Error('Reserva no guardada',error);
        }

        // Manejo de reslutado
        return {id: entity.id,mensaje:"Reserva Creada"}
    },

    async modificarReserva (obj, RutFechaSearch, DataUpdate) {
        // { rut, fecha } = RutFechaSearch
        // ReservaModel ( update )

        try {
            const updatedReserva = await ReservaModel.findOneAndUpdate(
                RutFechaSearch,       // Rut y Fecha
                DataUpdate,
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
    async cancelarReserva(obj, rut, reserva ) {
        // console.log("rut, fecha, hora, id_medico", search)
        const pop = await ReservaModel.findOneAndDelete( {...rut, ...reserva} );
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
    async marcarAtendido(obj, rut, reserva) {
        const target = await ReservaModel.findOne({...rut, ...reserva})
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