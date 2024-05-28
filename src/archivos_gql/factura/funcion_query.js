const FacturaModel = require('../../models/facturaModel'); //import main model
const ReservaModel = require('../../models/reservaModel'); //used in getAtencionesACobrar
//const BoletasModel = require('../../models/boletaModel'); //soon used in getAtencionesACobrar

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
    
    
    //--- TO DO WAITING FOR RESERVAS ---
    async getReservasAFacturar(obj, { medico_id, fecha_inicio, fecha_final }){        
        //reservas pagadas de médico que entre las fechas consultadas
        const reservas = await ReservaModel.find({
            medico_id,
            pagado: true,
            fecha: { $gt: new Date(fecha_inicio), $lt: new Date(fecha_final) }
        });

        // sacando id de reservas a facturar
        const reservasIds = reservas.map(reserva => reserva._id);

        // TO DO (first update from main):  consultando por boletas asociadas
        /*const boletas = await BoletaModel.find({
            id_atencion: { $in: reservasIds }
        });*/

        // preparando resultado monto total y número de atenciones
        const summary = {
            monto: 0, //boletas.reduce((acc, boleta) => acc + boleta.monto, 0),
            numero_atenciones: reservas.length
        };
        return summary
    }
}

module.exports = {
    facturaFuncQuery
}