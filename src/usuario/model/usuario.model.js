const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Nombres: {
        type: String,
        required: true,
    },
    Apellidos:{
        type: String,
    },
    FechaNacimiento: {
        type: String,
        required: true,
    },
    DPI:{
        type: String,
        required: true,
        min: [13, 'Ingresa un DPI valido'],
        max: [13, 'Ingresa un DPI valido']
    },
    Clave: {
        type: String,
        validate: {
            validator: function (v) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
            },
            message: props => `${props.value} no es una contraseña valida!`
        },
        required: [true, 'Contraseña es requerida']
    },
    ValidacionClave: {
        type: String,
        required: true,
    },
    DireccionEntrega:{
        type: String,
        required: true,
    },
    NIT:{
        type: Number,
        required: true,
    },
    NúmeroTelefonico:{
        type: Number,
        required: true,
    },
    CorreoElectronico:{
        type: String,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} no es una correo valida!`
        },
        required: true
    },
 
});

const userModel = mongoose.model('Usuario', userSchema);

module.exports = userModel