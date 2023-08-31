
const Employee = require("./module/employees/employees.model");
const Rol = require("./module/rol/rol.model");
const Department = require("./module/department/department.model");

Rol.hasMany(Employee, { foreignKey: "rol_id", as: "employees" });
Employee.belongsTo(Rol, { foreignKey: "rol_id", as: "rol" });

Department.hasMany(Employee, { foreignKey: "departamento_id", as: "employees"  });
Employee.belongsTo(Department, { foreignKey: "departamento_id", as: "departamento" });

module.exports = {
    Employee,
    Department,
    Rol
}