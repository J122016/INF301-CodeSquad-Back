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
    }
}

module.exports = {
    rolfuncmutation
}