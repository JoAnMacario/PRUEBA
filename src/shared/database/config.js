const { MongoClient } = require('mongodb');

const connectionString = "mongodb+srv://prueba:12345@base.aggolec.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(connectionString);
let conn;
try {
    conn = await client.connect();
} catch (e) {
    console.error(e);
}

let db = conn.db("usuario");

export default db;