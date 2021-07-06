const router = require("express").Router();
const adminController = require("../controllers/adminController");

// router.get("/logout", adminController.logout);

router.post("/login", adminController.login);

router.post("/add", adminController.add);

// router.put("/update", adminController.update);

module.exports = router;
