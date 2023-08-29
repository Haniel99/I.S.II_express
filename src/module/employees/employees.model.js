const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/config");

class Employee extends Model {}

Employee.init(
  {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    puesto: DataTypes.STRING,
    salario: DataTypes.INTEGER,
    departamento: DataTypes.STRING,
    ubicacion: DataTypes.STRING,
    telefono: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: "employees",
    modelName: "Employee",
  }
);

module.exports = Employee;
