const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/config");

class Employee extends Model {}

Employee.init(
  {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    puesto: DataTypes.STRING,
    salario: DataTypes.INTEGER,
    departamento_id: DataTypes.INTEGER,
    ubicacion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    rol_id: DataTypes.INTEGER
  },
  {
    sequelize,
    tableName: "employee",
    modelName: "Employee",
  }
);

module.exports = Employee;
