const reservaquery = `
    getReservasCliente ( input: RutInput) : [ Reserva ]
    getReservasMedico  ( input: FechaIDInput ) : [ Reserva ]
    getReservasEnEsperaDia (input: FechaInput): [ Reserva ]
    getAtendidosMedico  ( input: FechaIDInput ) : [ Reserva ]
`;

module.exports = {
    reservaquery
}