const atencionInput = `
  input NuevaAtencion {
    descripcion: String!
    fecha: String!
    hora: String!
    id_medico: String!
    usuarioId: ID!
    correo: String!
  }

  input CambioAtencion {
    descripcion: String
    fecha: String
    hora: String
    id_medico: String
    usuarioId: ID
    correo: String
  }
`;

module.exports = {
  atencionInput
};