const atencionMutation = `
  addAtencion(input: NuevaAtencion): Atencion
  updateAtencion(id: ID!, input: CambioAtencion): Atencion
  deleteAtencion(id: ID!): Mensaje
`;

module.exports = {
  atencionMutation
};