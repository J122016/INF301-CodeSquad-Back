const reservaquery = `
    getReservasCliente ( input: RutInput) : [ Reserva ]
    getReservasMedico  ( input: FechaIDInput ) : [ Reserva ]
    getAtendidosMedico  ( input: FechaIDInput ) : [ Reserva ]
`;

module.exports = {
    reservaquery
}