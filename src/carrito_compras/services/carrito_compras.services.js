const shoppingCartModel = require('../model/carrito_compras.model');

async function findshoppingByID(Id) {
    let collection = await shoppingCartModel.findById(Id);
    return collection
}

async function findByUser(User) {
    let collection = await shoppingCartModel.findOne({Usuario: User});
    return collection
}


async function addProduct(collection, product) {
    //let collection = await shoppingCartModel.findById(Id);
    collection.Productos.push(product)
    return collection
}

async function createShoppingCartS(data) {
    try {
        const shoppingCart = new shoppingCartModel(data);
        return shoppingCart.save();
    } catch (error) {
        console.log("error", error)
    }

}


async function deleteShoppingCartS(userId) {
    try {
        const deletedUser = await shoppingCartModel.findByIdAndRemove(userId);
        return deletedUser;
    } catch (error) {
        console.log("error", error)
    }

}


module.exports = {
    createShoppingCartS,
    findshoppingByID,
    deleteShoppingCartS,
    addProduct,
    findByUser
};