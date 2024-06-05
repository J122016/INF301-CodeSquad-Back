const reservamutation = `
    crearReserva(input: ReservaInput): Mensaje
    modificarReserva( input: RutFechaInput!, update: ReservaInput): Mensaje
    cancelarReserva( input: RutInput, reserva: ReservaInput ): Mensaje3
    marcarPagado( input: RutInput, reserva: ReservaInput ): Mensaje3
    marcaratendido( input: RutInput, reserva: ReservaInput ): Mensaje3
`;

module.exports = {
    reservamutation
}