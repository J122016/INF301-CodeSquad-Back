const UsuarioModel = require('../../models/usuarioModel');

const usuariofuncmutation = {
    async addUsuario(obj, { input }) {
        const entity = new UsuarioModel(input); // Create new entity
        await entity.save(); // Save the new entity
        return entity;
    },
    async updateUsuario(obj,args) {
        const { rut,input } = args
        const { usuario,nombre,mail,nrol } = input
        const entitys = await UsuarioModel.find();
        const entity = entitys.find((a) => a.rut == rut);
        entity.usuario = usuario;
        entity.nombre = nombre;
        entity.mail = mail;
        entity.nrol = nrol;
        await entity.save();
        return entity;
    },
    async deleteUsuario(obj,input) {
        const { rut } = input
        const entitys = await UsuarioModel.find();
        const entity = entitys.find((a) => a.rut == rut);
        const { id } = await entity.delete();
        if (!id) {
            throw new Error(`Usuario de rut ${rut} no encontrado`);
        }
        return {id: id, mensaje: 'Usuario de rut ' + rut + ' fue eliminado'};
    }
}

module.exports = {
    usuariofuncmutation
}