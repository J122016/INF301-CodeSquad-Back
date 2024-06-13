const AtencionModel = require('../../models/atencionModel');

const atencionFuncionQuery = {
  async getAtenciones() {
    return await AtencionModel.find();
  },
  async getAtencionById(_, { id }) {
    return await AtencionModel.findById(id);
  },
  async getAtencionesByUsuario(_, { usuarioId }) {
    return await AtencionModel.find({ usuarioId });
  }
};

module.exports = {
  atencionFuncionQuery
};