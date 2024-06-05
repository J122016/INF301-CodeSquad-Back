const reservainput = `
    input ReservaInput{
        fecha: String!
        hora: String!
        id_medico : String!
    }

    input RutInput{
        rut: String!
    }

    input RutFechaInput {
        rut: String!
        fecha: String!
    }

    input FechaIDInput {
        fecha: String!
        id_medico: String!
    }

    input FechaInput {
        fecha: String!
    }

    input Fecha {
        fecha: String!
    }
`;

module.exports = {
    reservainput
}