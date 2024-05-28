const boletaMutation = `
    addBoleta(input: BoletaInput): Boleta
    updateBoleta(id: ID!, input: BoletaInput): Boleta
    deleteBoleta(id: ID!): Mensaje
`;

module.exports = {
    boletaMutation
};
