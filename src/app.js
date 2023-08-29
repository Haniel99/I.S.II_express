require("dotenv/config");
const express = require("express");
const router = require("./routes");
const cors = require("cors");
const app = express();

app.use(cors);
app.use(router);

app.listen(3100, () =>{
    console.log("Servidor corriendo en el puerto 3100");
})