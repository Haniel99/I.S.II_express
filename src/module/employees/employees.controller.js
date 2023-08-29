const { requiere, response } = require("express");
const sequelize = require("../../config/config"); 
let controller = {};

controller.index = (req= requiere, res= response) =>{
    res.json('Hello')
}

module.exports = controller;