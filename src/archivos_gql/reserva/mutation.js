const reservamutation = `
    crearReserva(input: ReservaInput): Mensaje
    modificarReserva( input: RutFechaInput!, update: modreservapaciente): Mensaje
    cancelarReserva( input: RutInput, reserva: modreservapaciente ): Mensaje3
    marcarPagado( input: RutInput, reserva: modreservapaciente ): Mensaje3
    marcaratendido( input: RutInput, reserva: modreservapaciente ): Mensaje3
`;

module.exports = {
    reservamutation
}