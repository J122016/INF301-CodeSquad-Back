const modelonemutation = `
    addEntity(input: ModelOneInput): ModelOne
    updateEntity(id: String!, input: ModelOneInput): ModelOne
    deleteEntity(id: String!): Mensaje
`;

module.exports = {
    modelonemutation
}