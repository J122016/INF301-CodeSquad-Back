const usuarioquery = `
    getUsuarios: [Usuario]
    getUsuarioRol(input: RolFilter): [Usuario]
    getUsuarioRut(input: RutFilter): Usuario
    getUsuario(id: String!): Usuario
    login(input: login): Mensaje2
`;

module.exports = {
    usuarioquery
}