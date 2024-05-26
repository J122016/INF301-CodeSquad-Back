const AgendaModel = require('../../models/agendaModel');

const agendafuncquery = {
    async getAgendas(obj, { input }) {
        const { ini,fin,categoria } = input;
        var query = {
            fecha: {
                $gte: new Date(ini).toISOString(),
                $lte: new Date(fin).toISOString()
            }
        }
        const entitys = await AgendaModel.find(query);
        const entity = entitys.filter((a) => a.categoria == categoria);
        return entity;
    },
    async getAgendasDoc(obj, { input }) {
        const { ini,fin,id_medico } = input;
        var query = {
            fecha: {
                $gte: new Date(ini).toISOString(),
                $lte: new Date(fin).toISOString()
            }
        }
        const entitys = await AgendaModel.find(query);
        const entity = entitys.filter((a) => a.id_medico == id_medico);
        return entity;
    },
}

module.exports = {
    agendafuncquery
}