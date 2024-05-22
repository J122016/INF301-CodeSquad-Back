const ExampleModel = require('../../models/exampleModel');

const modelonefuncquery = {
    async getEntity(obj, { id }) {
        const entity = await ExampleModel.findById(id);
        return entity;
    },
    async getEntities(obj, { id }) {
        const entity = await ExampleModel.find();
        return entity;
    }
}

module.exports = {
    modelonefuncquery
}