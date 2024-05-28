const boletaTipo = `
    type Boleta {
        id: ID!
        id_atencion: String!
        monto: Float!
        fecha: String!
    }
    input NuevaBoleta {
        id_atencion: String!
        monto: Float!
        fecha: String!
    }
    type Mensaje {
        id: ID!
        mensaje: String!
    }
`;

module.exports = {
    boletaTipo
};
