const { requiere, response } = require("express");

const { Employee } = require("../../app.model");

let controller = {};
//
controller.index = async (req = requiere, res = response) => {
  try {
    console.log("Hola");
    await Employee.create({
      nombre: "Juan",
      apellido: "Perez",
      puesto: "Desarrollador de software",
      salario: 60000,
      departamento: "Tecnología",
      ubicacion: "Ciudad A",
      telefono: "123-456-7890",
    });
    return res.status(200).json({
      msg: "Exitos",
      response: [],
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      err: error,
      msg: "Algo salio mal, hable con el administrador.",
    });
  }
};

module.exports = controller;
