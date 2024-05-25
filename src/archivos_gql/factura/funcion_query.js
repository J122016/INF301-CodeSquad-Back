const FacturaModel = require('../../models/facturaModel'); //import main model

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
    
    /*
    --- TO DO WAITING FOR ATENCIONES ---
    async getAtencionesACobrar(obj, { medico_id, fecha_inicio, fecha_final }){
        //pseudocode
        const atenciones = await atenciones where ... medico_id=medico_id createdAt>fecha_inicio, updatedAt<fecha_final
        summary.atenciones = count of atenciones
        summary.monto = sum of each atenciones.monto
        return summary

        ---
        //code idea, test later
        const atenciones = await Atencion.find({
            medico_id,
            createdAt: { $gt: new Date(fecha_inicio) },
            updatedAt: { $lt: new Date(fecha_final) }
        });

        const summary = {
            monto: atenciones.reduce((acc, atencion) => acc + atencion.monto, 0),
            numero_atenciones: atenciones.length
        };
        return summary
        ---

    */
}

module.exports = {
    facturaFuncQuery
}