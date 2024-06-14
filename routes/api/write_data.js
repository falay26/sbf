const express = require("express");
const router = express.Router();
const dataController = require("../../controllers/dataController");

router.post("/", dataController.writeData);

module.exports = router;
