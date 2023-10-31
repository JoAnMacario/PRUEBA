const express = require('express');
const router = express.Router();
const shoppingCartController = require('../controller/carrito_compras.controller');
const verifyToken = require('../../shared/auth/auth.verify')

router.post('', shoppingCartController.createShoppingCart);
router.get('', verifyToken, shoppingCartController.getShoppingCart)
router.put('/:ID/:pID', verifyToken, shoppingCartController.addProductShoppingCart);
router.delete('/delete/:ID', verifyToken, shoppingCartController.deleteShoppingCart);


module.exports = router;