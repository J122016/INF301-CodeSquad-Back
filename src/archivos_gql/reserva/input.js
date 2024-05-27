const reservainput = `
    input ReservaInput{
        rut: String!
        fecha: String!
        hora: String!
        id_medico : String!
    }

    input RutInput{
        rut: String!
    }

    input RutFechaInput {
        rut:   String!
        fecha: String!
    }
`;

module.exports = {
    reservainput
}