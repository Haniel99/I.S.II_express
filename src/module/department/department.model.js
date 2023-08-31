const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/config");

class Department extends Model {}
Department.init(
  {
    nombre: DataTypes.STRING,
    giro: DataTypes.STRING,
    ubicacion: DataTypes.STRING,
},
  {
    sequelize,
    tableName: "department",
    modelName: "Department",
  }
);

module.exports = Department;