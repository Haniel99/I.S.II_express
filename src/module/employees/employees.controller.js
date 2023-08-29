const { requiere, response } = require("express");

const {Employee} =  require("../../model");

let controller = {};
//
controller.index = (req= requiere, res= response) =>{
    res.json('Hello')
}

module.exports = controller;