const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/add", userController.add);

router.get("/", userController.get);

router.post("/delete", userController.delete);

module.exports = router;
