const usuariomutation = `
    addUsuario(input: NuevoUsuario): Usuario
    updateUsuario(rut: String!, input: CambioUsuario): Usuario
    deleteUsuario(rut: String!): Mensaje
`;

module.exports = {
    usuariomutation
}