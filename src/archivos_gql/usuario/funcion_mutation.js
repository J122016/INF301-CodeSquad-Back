const UsuarioModel = require('../../models/usuarioModel');

const usuariofuncmutation = {
    async addUsuario(obj, { input }) {
        const entity = new UsuarioModel(input); // Create new entity
        await entity.save(); // Save the new entity
        return entity;
    },
    async updateUsuario(obj,args) {
        const { rut,input } = args
        const { usuario,pass,nombre,mail,nrol } = input
        const entitys = await UsuarioModel.find();
        const entity = entitys.find((a) => a.rut == rut);
        entity.usuario = usuario;
        entity.pass = pass;
        entity.nombre = nombre;
        entity.mail = mail;
        entity.nrol = nrol;
        await entity.save();
        return entity;
    },
    async deleteUsuario(obj,input) {
        const { rut } = input
        const us = await UsuarioModel.findOneAndDelete({ rut: rut });
        if (!us) {
            throw new Error(`Usuario de rut ${rut} no encontrado`);
        }
        return {id: us.id, mensaje: 'Usuario de rut ' + rut + ' fue eliminado'};
    }
}

module.exports = {
    usuariofuncmutation
}