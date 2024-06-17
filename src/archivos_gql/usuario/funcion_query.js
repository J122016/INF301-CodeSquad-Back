const UsuarioModel = require('../../models/usuarioModel');

const usuariofuncquery = {
    async getUsuarios(obj, { id }) {
        const entity = await UsuarioModel.find();
        return entity;
    },
    async getUsuarioRol(obj, { input }) {
        const { nrol } = input;
        const entitys = await UsuarioModel.find();
        const entity = entitys.filter((a) => a.nrol == nrol);
        return entity;
    },
    async getUsuarioRut(obj, { input }) {
        const { rut } = input;
        const entitys = await UsuarioModel.find();
        const entity = entitys.find((a) => a.rut == rut);
        return entity;
    },
    async login(obj, { input }) {
        const { usuario,pass,mail } = input;
        let llave = "mail";
        let valor = mail;
        let error_1 = 0;
        if(usuario != "")
        {
            llave = "usuario";
            valor = usuario;
        }
        const entitys = await UsuarioModel.find();
        const entity = entitys.find(a => a[llave] == valor && a.pass == pass);
        if (!entity) {
            error_1 = 1;
        }
        if(error_1 == 0)
        {
            const { rut,nrol } = entity;
            return {rut: rut, nrol: nrol, mensaje: 'Login correcto'};
        }

        return {rut: '0', nrol: '0', mensaje: 'Login incorecto, revice sus credenciales'};
    }
}

module.exports = {
    usuariofuncquery
}