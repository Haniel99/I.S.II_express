const { requiere, response, request } = require("express");

const { Employee } = require("../../app.model");

const { prepareQuery } = require("../../helpers/cpp.index");

let controller = {};

controller.index = async (req = request, res = response) => {
  try {
    let options = prepareQuery(req.body); //prepareQuery() prepara la consulta verificando si existe algun filtro en el body
    const index = await Employee.findAll(options);
    return res.status(200).json({
      msg: "Consulta exitosa",
      response: index,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      err: error,
      msg: "Algo salio mal, hable con el administrador.",
    });
  }
};

controller.view = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const view = await Employee.findByPk(id, {
      include: {
        model: "Rol",
        as: "rol",
      },
      include: {
        model: "Departmant",
        as: "departamento",
      },
    });
    return res.status(200).json({
      msg: "Consulta exitosa",
      response: view,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      err: error,
      msg: "Algo salio mal, hable con el administrador.",
    });
  }
};

controller.create = async (req = request, res = response) => {
  try {
    const { body } = req;
    await Employee.create(body);
    return res.status(200).json({
      msg: "El empleado se registro exitosamente",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      err: error,
      msg: "Algo salio mal, hable con el administrador.",
    });
  }
};

controller.update = async (req = request, res = response) => {
  try {
    const { employee } = req.body;
    const empleado = await Employee.findByPk(employee.id);
    if (!empleado) {
      res.status(400).json({
        msg: "El empleado no existe",
      });
    }

    await empleado.destroy();

    await Employee.create(employee);

    return res.status(200).json({
      msg: "Los datos del empleado fueron modificados correctamente",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      err: error,
      msg: "Algo salio mal, hable con el administrador.",
    });
  }
};

controller.destroy = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const empleado = await Employee.findByPk(id);
    if (!empleado) {
      return res.status(400).json({
        msg: "El empleado no existe",
      });
    }

    await empleado.destroy();

    return res.status(200).json({
      msg: "El empleado fue eliminado correctamente",
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
