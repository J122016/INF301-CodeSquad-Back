const boletaInput = `
    input BoletaInput {
        id_atencion: String!
        monto: Float!
        fecha: String!
    }

    input IdAtencionInput {
        id_atencion: String!
    }

    input MontoFechaInput {
        monto: Float!
        fecha: String!
    }

    input IdInput {
        id: ID!
    }
`;

module.exports = {
    boletaInput
};
