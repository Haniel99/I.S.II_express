const { requiere, response } = require("express");
const {query} = require("../../config/mysql"); 
let controller = {};

controller.index = (req= requiere, res= response) =>{
    res.json('Hello')
}

module.exports = controller;