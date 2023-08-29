const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/config");

class Employee extends Model {}

Employee.init(
  {},
  {
    sequelize,
    tableName: "",
    modelName: "",
  }
);

module.exports = Employee;
