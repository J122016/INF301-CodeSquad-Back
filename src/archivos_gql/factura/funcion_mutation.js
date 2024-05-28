const FacturaModel = require('../../models/facturaModel'); //import main model

// rutinas de mutaciones
const facturaFuncMutation = {
    /**
     * Crea una factura nueva con datos recibidos
    */
    async addFactura(obj, { facturaInput }) {
        const entity = new FacturaModel(facturaInput); // Create new entity
        await entity.save(); // Save the new entity
        return entity;
    },

    /**
     * Anula/Elimina una factura ssi no tiene anexado un comprobante.
    */
    async anularFactura(obj, { factura_id }) {
        const targetDelete = await FacturaModel.findById(factura_id);
        if (!targetDelete) {
            throw new Error(`Factura ${factura_id} no encontrada`);
        }
        if (targetDelete.comprobante_pdf) {
            throw new Error(`No es posible anular factura ${factura_id}, pago confirmado.`);
        }
        const { id } = await targetDelete.delete();
        return {id:id, mensaje: 'Factura ' + id + ' fue anulada/eliminada'};
    },

    /**
     * Añade comprobante de pago comisión a factura y marca atenciones como facturadas.
    */
    async updateFactura(obj, {comprobanteInput}){
        const factura_modificada = await FacturaModel.findById(comprobanteInput.factura_id);
        factura_modificada.comprobante_pdf = comprobanteInput.comprobante_pdf;
        factura_modificada.nota_adicional_comprobante = comprobanteInput.nota_adicional_comprobante;
        factura_modificada.actualizada_por = comprobanteInput.actualizada_por;

        const ReservaModel = require('../../models/reservaModel');

        // Actualiza las reservas que cumplen con los criterios:
        // pagado, atendido del médico, con fecha previa a factura
        const reservasChanged = await ReservaModel.updateMany(
            {
                fecha: { $lt: factura_modificada.createdAt },
                id_medico: factura_modificada.id_medico,
                pagado: 1,
                atendido: 1
            },
            {
                $set: { facturado: 1 }
            }
        );

        //guarda factura actualizada y retorna cuantas atenciones se modificaron
        // TODO OPCIONAL: verificar cantidad facturada es la misma que cambiada y en caso contrario avisar por correo o dejar log
        await factura_modificada.save();
        const result = {...factura_modificada._doc, reservasActualizadas: reservasChanged.modifiedCount};
        return result
    }
}

module.exports = {
    facturaFuncMutation
}