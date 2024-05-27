const reservaquery = `
    getReservasCliente ( input: RutInput) : [ Reserva ]
    getReservasMedico  ( input: RutFechaInput ) : [ Reserva ]
`;

module.exports = {
    reservaquery
}