const express = require("express");
const router = require("./routes");

const app = express();

app.use(router);
app.listen(3100, () =>{
    console.log("Servidor corriendo en el puerto 3100");
})