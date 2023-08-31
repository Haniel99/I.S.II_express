const req = require("express/lib/request");
const { Employee } = require("../app.model");

const ExisteEmpleadoPorId = async (id='') => {
  // Verificar si usuario existe
  const validator = await Employee.findByPk(id);

  if (!validator) {
    throw new Error(`El id ${id} no existe`);
  }
};
