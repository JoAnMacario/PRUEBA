const userModel = require('../../usuario/model/usuario.model');

async function findUserLogin(CorreoElectronico, Clave) {
    let collection = await userModel.findOne({ CorreoElectronico: CorreoElectronico, Clave: Clave });
    return collection
}

module.exports = findUserLogin
