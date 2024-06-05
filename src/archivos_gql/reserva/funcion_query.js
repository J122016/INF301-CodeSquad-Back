const ReservaModel = require('../../models/reservaModel');

const reservasfuncquery = {
    // Obtiene Todas las Reservas de un CLIENTE segun Rut
    async getReservasCliente(obj, rut) {
        const reservas = await ReservaModel.find(rut);
        return reservas;
    },

    // Obtiene Todas las Reservas de un MEDICO segun fecha e id del medico
    async getReservasMedico(obj, FechaID) {
        const reservas = await ReservaModel.find(FechaID) ;
        return reservas;
    },

    // Obtiene Todas las Reservas en espera(pagadas) de un día
    async getReservasEnEsperaDia(obj, fecha) {
        const pagado = 1;
        const reservas = await ReservaModel.find({ ...fecha, pagado });
        return reservas;
    },

    // Obtiene Todas las Reservas PENDIENTES de un MEDICO segun fecha e id del medico
    async getAtendidosMedico(obj, FechaID) {
        const atendido = 1;
        const reservas = await ReservaModel.find({ ...FechaID, atendido });
        return reservas;
    },

    // Estadísticas para reporte - días de la semana vs atenciones
    async getReporteAtencionesEfectuadasPorDia(obj, { inicio, fin }) {
        const startDate = new Date(inicio.fecha);
        const endDate = new Date(fin.fecha);

        // TODO: optimize code, base from LLM

        // Create an array of all days between startDate and endDate
        const days = [];
        for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
            days.push(new Date(d));
        }

        // Translate day indexes to Spanish day names
        const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

        const dayCounts = {};
            dayNames.forEach(day => {
            dayCounts[day] = 0;
        });

        // Iterate over each day in the date range - TODO OPTIMIZE WITH MONGO QUERY AGREGATION
        for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
            const day = new Date(d);
            const nextDay = new Date(day);
            nextDay.setDate(nextDay.getDate() + 1);

            const dayName = dayNames[day.getDay()];

            const count = await ReservaModel.countDocuments({
                fecha: { $gte: day, $lt: nextDay },
                atendido: true
            });

            dayCounts[dayName] += count;
        }

        // Convert the dayCounts object to an array of objects
        const results = Object.keys(dayCounts).map(day => ({
            dia: day,
            atenciones: dayCounts[day]
        }));

        return results;
    }
};

module.exports = {
    reservasfuncquery
};