const { Router } = require("express");
const router = Router();
const controller = require("./employees.controller");

router.get("/view/:id", controller.view);
router.post("/index",  controller.index);
router.post("/create", controller.create);
router.put("/update/:id", controller.update);
router.delete("/delete/:id", controller.destroy);

module.exports = { router };

