const reservatipo = `
    type Reserva {
		id: ID!
		rut: String!
		fecha: String!
		hora: String!
		id_medico: String!
		atendido: Boolean!
		facturado: Boolean!
		pagado: Boolean!
    }
`;

module.exports = {
    reservatipo
}