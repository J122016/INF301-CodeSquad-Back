const RolModel = require('../../models/rolModel');

const rolfuncmutation = {
    async addRol(obj, { input }) {
        const entity = new RolModel(input); // Create new entity
        await entity.save(); // Save the new entity
        return entity;
    },
    async updateRol(obj,input) {
        const { rol,nrol } = input
        const entitys = await RolModel.find();
        const entity = entitys.find((a) => a.nrol == nrol);
        entity.rol = rol;
        await entity.save();
        return entity;
    },
    async deleteRol(obj,input) {
        const { nrol } = input
        const entitys = await RolModel.find();
        const entity = entitys.find((a) => a.nrol == nrol);
        const { id } = await entity.delete();
        if (!id) {
            throw new Error(`Rol de numero ${nrol} no encontrado`);
        }
        return {id: id, mensaje: 'Rol de numero ' + nrol + ' fue eliminado'};
    }
}

module.exports = {
    rolfuncmutation
}