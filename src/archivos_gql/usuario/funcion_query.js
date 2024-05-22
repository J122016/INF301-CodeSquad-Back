const UsuarioModel = require('../../models/usuarioModel');

const usuariofuncquery = {
    async getUsuarios(obj, { id }) {
        const entity = await UsuarioModel.find();
        return entity;
    },
    async getUsuarioRol(obj, { input }) {
        const { nrol } = input;
        const entitys = await UsuarioModel.find();
        const entity = entitys.filter((a) => a.nrol == nrol);
        return entity;
    },
    async getUsuarioRut(obj, { input }) {
        const { rut } = input;
        const entitys = await UsuarioModel.find();
        const entity = entitys.find((a) => a.rut == rut);
        return entity;
    },
}

module.exports = {
    usuariofuncquery
}