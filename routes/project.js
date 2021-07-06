const router = require("express").Router();
const projectController = require("../controllers/projectController");

router.get("/", projectController.getAll);

router.post("/add", projectController.add);

router.post("/update", projectController.update);

router.post("/delete", projectController.delete);

module.exports = router;
