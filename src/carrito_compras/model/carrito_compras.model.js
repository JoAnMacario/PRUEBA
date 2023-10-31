const mongoose = require('mongoose');

const shoppingCartSchema = new mongoose.Schema({
    Usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuario'
    },
    Productos: [{
            Producto: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'productos' // This refers to the User model
            },
            Cantidad: {
                type: String,
                required: true,
            }
        }
    ],
    Total:{
        type: Number,
        required: true
    }
 
});

const shoppingCartModel = mongoose.model('Carrito_Compras', shoppingCartSchema);

module.exports = shoppingCartModel