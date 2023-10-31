const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuario.controller');
const verifyToken = require('../../shared/auth/auth.verify')

router.post('/:DPI', usuarioController.CreateUser);
router.get('/perfil', verifyToken, usuarioController.getUserData)
router.put('/perfil', verifyToken, usuarioController.updateUser);
router.delete('/delete', verifyToken, usuarioController.deleteUser);


module.exports = router;