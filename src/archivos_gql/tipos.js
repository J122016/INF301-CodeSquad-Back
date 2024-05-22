const tiposgql = `
    type ModelOne {
        id: ID!
        nombre: String!
    }

    type Mensaje {
        id: ID!
        mensaje: String!
    }

    type Rol {
        id: ID!
        rol: String!
        nrol: String!
    }

    type Usuario {
        id: ID!
        usuario: String!
        nombre: String!
        rut: String!
        mail: String!
        nrol: String!
    }
`;

module.exports = {
    tiposgql
}