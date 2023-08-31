const { requiere, response, request } = require("express");

const { Employee, Department, Rol } = require("../../app.model");

let controller = {};
//
controller.index = async (req = request, res = response) => {
  try {
    
    const res = await Employee.findAll({
      include:{
        model: "Rol",
        as: "rol" 
      }
    });
    return res.status(200).json({
      msg: "Exitos",
      response: res,
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
