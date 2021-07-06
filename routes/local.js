const router = require("express").Router();
const localController = require("../controllers/localController");

router.post("/update", localController.update);

router.get("/", localController.get);

module.exports = router;
