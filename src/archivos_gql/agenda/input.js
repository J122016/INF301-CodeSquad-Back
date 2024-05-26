const agendainput = `
    input RolFilter{
        nrol: String!
    }

    input NuevoRol{
        rol: String!
        nrol: String!
    }

    input NuevaAgenda {
        categoria: String!
        id_medico: String!
        fecha: String!
        laboral: String!
    }

    input NuevasAgendas {
        ini: String!
        fin: String!
        categoria: String!
        id_medico: String!
        laboral: String!
    }

    input VerAgendas{
        ini: String!
        fin: String!
        categoria: String!
    }

    input VerAgendasDoc{
        ini: String!
        fin: String!
        id_medico: String!
    }
`;

module.exports = {
    agendainput
}