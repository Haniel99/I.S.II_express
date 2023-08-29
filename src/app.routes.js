const { Router } = require("express");

const router = Router();
router.use('/api/v1/employees', require("./module/employees/employees.routes"));
module.exports = router;