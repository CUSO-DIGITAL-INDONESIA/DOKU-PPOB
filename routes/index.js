const Controller = require("../controllers");
const express = require("express");
const router = express.Router();

router.get(
	"/DepositSystem-api/NetworkManagement",
	Controller.NetworkManagement
);

module.exports = router;
