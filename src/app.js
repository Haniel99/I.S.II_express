require("dotenv/config");
const express = require("express");
const indexPath = process.env.INDEXPATH || '';

const { router } = require("./app.routes");
const cors = require("cors");
const { json } = require("body-parser");

const app = express();

app.use(cors()); 
app.use(json());
app.use(indexPath, router);

app.listen(3100, () => {
    console.log("Servidor corriendo en el puerto 3100");
});
