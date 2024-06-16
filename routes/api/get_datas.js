const express = require("express");
const router = express.Router();
const dataController = require("../../controllers/dataController");

router.post("/", dataController.getDatas);

module.exports = router;
