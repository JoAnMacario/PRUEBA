const express = require('express');
const morgan = require("morgan");
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
var cors = require('cors');
const swaggerUi = require("swagger-ui-express");
const app = express();
app.use(cors())

// Logging
app.use(morgan('dev'));
app.use(bodyParser.json())
var routerCuidadano = require('./src/usuario/routes/usuario.router')
var routerLogin = require('./src/auth/routes/auth.router')
var routerProductos = require('./src/productos/routes/productos.router')
var routerCarritoCompras = require('./src/carrito_compras/routes/carrito_compras.router')
var specs = require('./src/shared/swagger/swagger.config')
// Conexión a la base de datos MongoDB
mongoose.connect("mongodb+srv://prueba:12345@base.aggolec.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
    console.log('Conexión a MongoDB establecida');
});
mongoose.connection.on('error', (err) => {
    console.error(`Error de conexión a MongoDB: ${err}`);
});

// Configuration
const PORT = 3000;
const HOST = "localhost";

app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(specs));

app.use('/api/usuario', routerCuidadano )
app.use('/api/login', routerLogin)
app.use('/api/productos', routerProductos)
app.use('/api/carrito_compras', routerCarritoCompras)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
