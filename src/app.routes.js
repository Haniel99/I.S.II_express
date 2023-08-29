const express = require("express");
const router = express.Router();

const employeeRouter = require("./module/employees/employees.routes");
router.use("/employees", employeeRouter.router);

module.exports = { router };

