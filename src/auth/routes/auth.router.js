const express = require('express');
const { Login } = require('../controller/auth.controller');
const router = express.Router();

router.post('', Login);


module.exports = router;