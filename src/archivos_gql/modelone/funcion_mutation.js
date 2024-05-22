const ExampleModel = require('../../models/exampleModel');

const modelonefuncmutation = {
    async addEntity(obj, { input }) {
        const entity = new ExampleModel(input); // Create new entity
        await entity.save(); // Save the new entity
        return entity;
    }
}

module.exports = {
    modelonefuncmutation
}