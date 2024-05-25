const FacturaModel = require('../../models/facturaModel'); //import main model

// rutinas de mutaciones
const facturaFuncMutation = {
    async addFactura(obj, { FacturaInput }) {
        const entity = new FacturaModel(FacturaInput); // Create new entity
        await entity.save(); // Save the new entity
        return entity;
    },
    async updateFactura(obj, {ComprobanteInput}){
        const factura_modificada = await FacturaModel.findById(ComprobanteInput.id);
        factura_modificada.comprobante_pdf = ComprobanteInput.comprobante_pdf;
        factura_modificada.nota_adicional_comprobante = ComprobanteInput.nota_adicional_comprobante;
        await factura_modificada.save();
        return factura_modificada;
    }
}

module.exports = {
    facturaFuncMutation
}