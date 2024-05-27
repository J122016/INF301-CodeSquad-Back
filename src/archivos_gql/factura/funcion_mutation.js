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

        //TODO (atenciones):
        //actualizar atenciones, facturadas --> true:
        //- fecha sea menor a la de creación factura
        //- pertenezcan al médico de facura
        //- esten pagadas

        await factura_modificada.save();
        return factura_modificada;
    }
}

module.exports = {
    facturaFuncMutation
}