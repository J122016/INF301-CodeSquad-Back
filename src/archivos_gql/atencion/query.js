const atencionQuery = `
  getAtenciones: [Atencion]
  getAtencionById(id: ID!): Atencion
  getAtencionesByUsuario(usuarioId: ID!): [Atencion]
`;

module.exports = {
  atencionQuery
};