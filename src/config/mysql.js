const mysql = require("mysql2");
const util = require("node:util");
const obConfing = {
    host: "localhost",
    user: "root",
    password: "nicol225",
    database: "horario"
};

const mysqlInstance = mysql.createConnection(obConfing);
mysqlInstance.connect(err => {
    if (err) {
        console.log('Error al conectarse a la base de datos', err);
    } else {
        console.log('Conexión a la base de datos exitosa');
    }
});

const query = util.promisify(mysqlInstance.query).bind(mysqlInstance);


module.exports = { mysqlInstance, query };
