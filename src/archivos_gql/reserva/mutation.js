const reservamutation = `
    crearReserva(input: ReservaInput): Mensaje
    modificarReserva (search: String!, update: String): String
    cancelarReserva  (search: String!): String
`;

module.exports = {
    reservamutation
}