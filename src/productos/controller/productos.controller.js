const { createProductos, updateProductosS, getProductosDataS, deleteProductosS,findByID  } = require('../services/productos.services') 

const CreateProductos = async (req, res) => {

    try {
        
        const newProductos = await createProductos(req.body)
        res.status(201).json({message: "Producto creado correctamente"});
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ error: error });
    }
   
};

const updateProductos = async (req, res) => {

    try {

        const productosId = req.productosId;
        const existsProductos = await findByID(productosId)

        if (!existsProductos) {
            res.status(404).json({ message: "Producto no encontrado" })
        }

        const productos = new productosModel(req.body);
        existsProductos = { ...productos};
        existsProductos.save()
        res.status(200).json(existsProductos)
    } catch (error) {
        console.log("error", error)
        res.status(500).json({ error: error });
    }

};

const getProductosData = async (req, res) => {

    try {
        const productosId = req.productosId;
        const existsProductos = await findByID(productosId)

        if (!existsProductos) {
            res.status(404).json({ message: "Producto no encontrado" })
        }
        res.status(200).json(existsProductos)

    } catch (error) {
        res.status(500).json({ error: error });
    }

    };

const deleteProductos = async (req, res) => {

    try {
        const productosId = req.productosId;
        const deletedProductos = await deleteProductos(productosId)

        if (!deletedProductos) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ message: 'Product deleted successfully' });

    } catch (error) {
        res.status(500).json({ error: error });
    }

};


module.exports = {
    CreateProductos,
    getProductosData,
    updateProductos,
    deleteProductos
    
};