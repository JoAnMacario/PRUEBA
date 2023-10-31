const express = require('express');
const router = express.Router();
const productosController = require('../controller/productos.controller');//Controller producto
const verifyToken = require('../../shared/auth/auth.verify')


router.post('', productosController.CreateProductos);
router.get('/perfil/',  productosController.getProductosData)
router.put('/perfil', verifyToken, productosController.updateProductos);
router.delete('/delete', verifyToken, productosController.deleteProductos);

module.exports = router;