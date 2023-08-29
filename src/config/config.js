const { database } = require("./keys");
const { Sequelize } = require("sequelize");


//Configuracion para la conexion a la base de datos
const sequelize = new Sequelize(
  database.database,
  database.username,
  database.password,
  {
    host: database.host,
    dialect: "mysql",
    logging: false,
    dialectOptions: {
      dateStrings: true,
      typeCast: function (field, next) {
        if (
          field.type === "DATETIME" ||
          field.type === "TIMESTAMP" ||
          field.type === "DATE"
        ) {
          return field.string();
        }
        return next();
      },
    },
    timezone: new Date().getTimezoneOffset() == 180 ? "-03:00" : "-04:00",
    define: {
      freezeTableName: true,
      timestamps: false,
      underscored: true,
    },
  }
);

//Verificar conexion
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a la base de datos establecida correctamente.");
  })
  .catch((err) => {
    console.error("No se pudo conectar a la base de datos:", err);
  });

module.exports = sequelize;
