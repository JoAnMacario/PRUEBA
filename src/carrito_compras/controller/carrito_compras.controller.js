const { createShoppingCartS,
    findshoppingByID,
    deleteShoppingCartS,
    addProduct, findByUser } = require('../services/carrito_compras.services') 

const { getProductoByID } = require('../../productos/services/productos.services') 
const { findByID } = require('../../usuario/services/usuario.services')

const createShoppingCart = async (req, res) => {

    try {
        const userId = req.userId;
        const user = await findByID(userId)
        const existsShoppingCart = await findByUser(user)
        if (existsShoppingCart){
            res.status(200).json({message:"El carrito de compras ya se encuentra registrado"})
        }
        const newShoppingCart = await createShoppingCartS(req.body)
        res.status(201).json({message: "Usuario creado correctamente"})
    } catch (error) {
        console.log("error", error)
        res.status(500).json({ error: error });
    }
   
};

const addProductShoppingCart = async (req, res) => {

    try {

        const shoppingCartID = req.params.ID;
        const productID = req.params.pID;

        const existsShoppingCart = await findshoppingByID(shoppingCartID)

        if (!existsShoppingCart) {
            res.status(404).json({ message: "Usuario no encontrado" })
        }

        const existProduct = await getProductoByID(productID)

        if (!existProduct) {
            res.status(404).json({ message: "El producto a agregar no existe no encontrado" })
        }
        const updatedShoppingCart = await addProduct(existsShoppingCart, existProduct)
       
        res.status(200).json(updatedShoppingCart)

    } catch (error) {
        console.log("error", error)
        res.status(500).json({ error: error });
    }

};

const getShoppingCart = async (req, res) => {

    try {
        const userId = req.userId;
        const user = await findByID(userId)
        const existsShoppingCart = await findByUser(user)

        if (!existsShoppingCart) {
            res.status(404).json({ message: "El Carrito de compras no existe" })
        }
        res.status(200).json(existsShoppingCart)

    } catch (error) {
        res.status(500).json({ error: error });
    }

};

const deleteShoppingCart = async (req, res) => {

    try {
        const shoppingCartID = req.params.ID;
        const deletedUser = await deleteShoppingCartS(shoppingCartID)

        if (!deletedUser) {
            return res.status(404).json({ message: 'Carrito de compras no existe' });
        }

        res.json({ message: 'Carrto de compras eliminado correctamente' });

    } catch (error) {
        res.status(500).json({ error: error });
    }

};

module.exports = {
    createShoppingCart,
    getShoppingCart,
    addProductShoppingCart,
    deleteShoppingCart
};

