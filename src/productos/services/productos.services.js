const productosModel = require('../model/productos.model');

async function createProductos(data) {
    try {
        const productos = new productosModel(data);
        return productos.save();
    } catch (error) {
        console.log("error", error)
    }

}
async function getProductoByID(id) {
    try {
        let producto = await productosModel.findById(Id);
        if(Number(producto.Disponibilidad) <= 0){
            return ;
        }
        
        return producto;
    } catch (error) {
        console.log("error", error)
    }

}

async function getAllProductos() {
    try {
        let producto = await productosModel.find();
        return producto;
    } catch (error) {
        console.log("error", error)
    }

}

async function deleteProductosS(productosId) {
    try {
        const deletedProductos = await productosModel.findByIdAndRemove(productosId);
        return deletedProductos;
    } catch (error) {
        console.log("error", error)
    }

}

async function updateProductosS(productosId) {
    try {
        const deletedProductos = await productosModel.findByIdAndRemove(productosId);
        return deletedProductos;
    } catch (error) {
        console.log("error", error)
    }

}

async function getProductosDataS(productosId) {
    try {
        const deletedProductos = await productosModel.findByIdAndRemove(productosId);
        return deletedProductos;
    } catch (error) {
        console.log("error", error)
    }

}
module.exports = {
    createProductos,
    deleteProductosS,
    updateProductosS,
    getProductosDataS,
    getProductoByID
};