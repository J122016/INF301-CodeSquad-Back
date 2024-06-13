const atencionTipo = `
  type Atencion {
    id: ID!
    descripcion: String!
    fecha: String!
    hora: String!
    id_medico: String!
    usuarioId: ID!
    correo: String!
  }
`;

module.exports = {
  atencionTipo
};