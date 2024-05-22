const RolModel = require('../../models/rolModel');

const rolfuncquery = {
    async getRol(obj, { input }) {
        const { nrol } = input;
        const entitys = await RolModel.find();
        const entity = entitys.find((a) => a.nrol == nrol);
        return entity;
    },
    async getRoles(obj, { id }) {
        const entity = await RolModel.find();
        return entity;
    }
}

module.exports = {
    rolfuncquery
}