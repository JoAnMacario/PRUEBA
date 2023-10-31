
const swaggerJsdoc = require("swagger-jsdoc");
const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "API Proyecto Desarrollo web",
            version: "0.1.0",
            description:
                "Esta API contiene las funciones necesarias para poder realizar un carrito de compras, conectado a una base de datos de MongoDB",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "API Proyecto Brian, Macario",
                url: "",
                email: "",
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./api/*/routes/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = specs

