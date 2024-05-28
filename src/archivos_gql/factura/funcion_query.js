const FacturaModel = require('../../models/facturaModel'); //import main model
const ReservaModel = require('../../models/reservaModel'); //used in getAtencionesACobrar
const BoletasModel = require('../../models/boletaModel'); //soon used in getAtencionesACobrar

// rutinas de consultas
const facturaFuncQuery = {
    async getFactura(obj, { id }) {
        const entity = await FacturaModel.findById(id);
        return entity;
    },
    async getFacturas(obj, { id }) {
        const entity = await FacturaModel.find();
        return entity;
    },
    
    
    // Consulta reservas pagadas sin facturas entre las fechas junto al monto de sus boletas
    async getReservasAFacturar(obj, { id_medico, fecha_inicio, fecha_final }){        
        //reservas pagadas de médico que entre las fechas consultadas
        const reservas = await ReservaModel.find({
            id_medico,
            pagado: true,
            facturado: false,
            fecha: { $gt: new Date(fecha_inicio), $lt: new Date(fecha_final) }
        });

        // sacando id de reservas a facturar
        const reservasIds = reservas.map(reserva => reserva._id);

        // TO DO (first update from main):  consultando por boletas asociadas
        const boletas = await BoletasModel.find({
            id_atencion: { $in: reservasIds }
        });

        // preparando resultado monto total y número de atenciones
        const summary = {
            monto: boletas.reduce((acc, boleta) => acc + boleta.monto, 0),
            numero_atenciones: reservas.length
        };
        return summary
    },

    // Estadísticas para reporte - comisiones por médico por entre días
    // TODO multiplicar monto de boleta por % comisión de factura
    async getReporteComisionesMedicosPorDia(obj, { fecha_inicio, fecha_final }) {
        const startDate = new Date(fecha_inicio);
        const endDate = new Date(fecha_final);

        // 1. Get reservas facturadas entre días
        const reservas = await ReservaModel.find({
            fecha: { $gte: startDate, $lte: endDate },
            facturado: true,
        });

        // 2. Get related boletas
        const boletas = await BoletasModel.find({
            id_atencion: { $in: reservas.map(r => r.id) },
        });

        // 3. por cada médico
        const id_medicos = [...new Set(reservas.map(r => r.id_medico))];
        const reporte = [];

        for (const id_medico of id_medicos) {
            const comision = []; //arreglo de comisiones por día con monto desde boleta asociada a reserva
            for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
            const dayReservas = reservas.filter(r => r.fecha.toDateString() === date.toDateString() && r.id_medico === id_medico);
            const dayBoletas = boletas.filter(b => dayReservas.some(r => r.id === b.id_atencion));
            const monto = dayBoletas.reduce((acc, b) => acc + b.monto, 0);
            comision.push(monto);
            }
            reporte.push({ id_medico, comision });
        }

        return reporte;
    }
}

module.exports = {
    facturaFuncQuery
}