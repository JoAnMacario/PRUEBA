const mongoose = require('mongoose');

const productosSchema = new mongoose.Schema({
    Identificador: {
        type: String,
        required: true,
        
    },
    Nombre: {
        type: String,
        
        
    },
    Marca: {
        type: String,
        required: true,
        
    },
    Disponibilidad: {
        type: String,
        required: true,
        
    },
    Descuento:{
        type: String,
        required: true,
        
    },
    PrecioDescuento:{
        type: String,
        required: true,
        
    },
    Imagen:{
        type: String,
        required: true,
       
    },
    Descripcion: {
        type: String,
        required: true,
        
    },
    Categoria: {
        type: String,
        required: true,
       
    },

 
});

const productosModel = mongoose.model('Productos', productosSchema);

module.exports = productosModel