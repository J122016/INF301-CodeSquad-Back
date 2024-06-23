const reservamutation = `
    crearReserva(rut: String!,reserva: ReservaInput): Mensaje
    modificarReserva( input: RutFechaInput!, update: ReservaInput): Mensaje
    modificarReserva2( id: String!, update: ReservaInput): Mensaje
    cancelarReserva( input: RutInput, reserva: ReservaInput ): Mensaje3
    cancelarReserva2( id: String! ): Mensaje
    marcarPagado( input: RutInput, reserva: ReservaInput ): Mensaje3
    marcarAtendido( input: RutInput, reserva: ReservaInput ): Mensaje3
`;

module.exports = {
    reservamutation
}