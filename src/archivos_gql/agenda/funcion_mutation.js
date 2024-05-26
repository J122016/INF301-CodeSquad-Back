const AgendaModel = require('../../models/agendaModel');

const agendafuncmutation = {
    async addAgenda(obj, { input }) {
        const entity = new AgendaModel(input); // Create new entity
        await entity.save(); // Save the new entity
        return entity;
    },
    async addAgendas(obj, { input }) {
        const { ini,fin,categoria,id_medico,laboral } = input
        var agendas = [];
        const start = new Date(ini);
        const end = new Date(fin);
        const datos = {
            categoria: categoria,
            id_medico: id_medico,
            fecha: "",
            laboral: laboral
        };

        let currentDate = start;

        while (currentDate <= end) {
            datos.fecha = currentDate.toISOString();
            agendas.push(datos);
            currentDate.setDate(currentDate.getDate() + 1);
        }
        const entitys = await AgendaModel.insertMany(agendas);
        return entitys;
    },
    async updateAgenda(obj,{ id,input }) {
        const { categoria,id_medico,fecha,laboral } = input
        const entitys = await AgendaModel.findById(id);
        entitys.categoria = categoria;
        entitys.id_medico = id_medico;
        entitys.fecha = fecha;
        entitys.laboral = laboral;
        await entitys.save();
        return entitys;
    },
    async deleteAgenda(obj,{ id }) {
        const entitys = await AgendaModel.findById(id);
        const { fecha } = await entitys.delete();
        if (!fecha) {
            throw new Error(`Agenda no encontrada`);
        }
        return {id: id, mensaje: 'Agenda eliminada'};
    }
}

module.exports = {
    agendafuncmutation
}