const { Router } = require("express");
const router = Router();

router.get("/index", (req, res) =>{
    res.send("sss");
} )

module.exports = router;