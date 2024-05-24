const usuarioinput = `
    input RutFilter{
        rut: String!
    }

    input NuevoUsuario {
        usuario: String!
        pass: String!
        nombre: String!
        rut: String!
        mail: String!
        nrol: String!
    }

    input CambioUsuario {
        usuario: String!
        pass: String!
        nombre: String!
        mail: String!
        nrol: String!
    }
`;

module.exports = {
    usuarioinput
}