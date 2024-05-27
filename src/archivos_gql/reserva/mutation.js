const reservamutation = `
    crearReserva(input: ReservaInput): Mensaje
    modificarReserva( input: RutFechaInput!, update: modreservapaciente): Mensaje
    cancelarReserva( input: RutFechaInput ): Mensaje3
    marcaratendido( input: RutFechaInput ): Mensaje3
`;

module.exports = {
    reservamutation
}