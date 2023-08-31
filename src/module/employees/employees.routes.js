const { Router } = require("express");
const router = Router();
const controller = require("./employees.controller");

router.post("/index",  controller.index);

module.exports = { router };

