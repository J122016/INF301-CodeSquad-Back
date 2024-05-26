const agendautation = `
    addAgenda(input: NuevaAgenda): Agenda
    addAgendas(input: NuevasAgendas): [Agenda]
    updateAgenda(id: String!, input: NuevaAgenda): Agenda
    deleteAgenda(id: String!): Mensaje
`;

module.exports = {
    agendautation
}