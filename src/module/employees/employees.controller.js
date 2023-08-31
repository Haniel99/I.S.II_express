const { requiere, response, request } = require("express");

const { Employee } = require("../../app.model");

let controller = {};
//
controller.index = async (req = request, res = response) => {
  try {
    await Employee.create({
      nombre: "Juan",
      apellido: "Perez",
      puesto: "Desarrollador de software",
      salario: 60000,
      departamento: "Tecnología",
      ubicacion: "Ciudad A",
      telefono: "123-456-7890",
    });
    console.log(await req.body);
    return res.status(200).json({
      msg: "Exitos",
      response: req.body,
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
