const usuarioquery = `
    getUsuarios: [Usuario]
    getUsuarioRol(input: RolFilter): [Usuario]
    getUsuarioRut(input: RutFilter): Usuario
`;

module.exports = {
    usuarioquery
}