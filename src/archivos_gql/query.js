const querygql = `
    type Query {
        getEntities: [ModelOne]
        getUsuarios: [Usuario]
        getRoles: [Rol]
        getEntity(id: String!): ModelOne
        getUsuarioRol(input: RolFilter): [Usuario]
        getUsuarioRut(input: RutFilter): Usuario
        getRol(input: RolFilter): Rol
    }
`;

module.exports = {
    querygql
}