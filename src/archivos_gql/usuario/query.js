const usuarioquery = `
    getUsuarios: [Usuario]
    getUsuarioRol(input: RolFilter): [Usuario]
    getUsuarioRut(input: RutFilter): Usuario
    login(input: login): Mensaje
`;

module.exports = {
    usuarioquery
}