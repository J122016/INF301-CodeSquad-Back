const ReservaModel = require('../../models/reservaModel');

const reservasfuncquery = {
    // Obtiene Todas las Reservas de un CLIENTE segun Rut
    async getReservasCliente(obj, { input }) {
        const { rut } = input ;
        const reservas = await ReservaModel.find({ rut });
        return reservas;
    },

    // Obtiene Todas las Reservas de un MEDICO segun fecha e id del medico
    async getReservasMedico(obj, { input }) {
        const { fecha, id_medico } = input;
        const reservas = await ReservaModel.find({ fecha,id_medico });
        return reservas;
    },

    // Obtiene Todas las Reservas de un MEDICO segun fecha e id del medico
    async getAtendidosMedico(obj, { input }) {
        const { fecha, id_medico } = input;
        const atendido = 0;
        const reservas = await ReservaModel.find({ fecha,id_medico,atendido });
        return reservas;
    }
};

module.exports = {
    reservasfuncquery
};