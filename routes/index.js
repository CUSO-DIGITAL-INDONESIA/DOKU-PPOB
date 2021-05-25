const Controller = require("../controllers");
const express = require("express");
const router = express.Router();

router.get(
	"/DepositSystem-api/NetworkManagement",
	Controller.NetworkManagement
);

router.post("/DepositSystem-api/AgentLoginMIP?", Controller.Login);
router.post("/DepositSystem-api/CheckLastBalance?", Controller.CheckBalance);
router.post("/DepositSystem-api/Inquiry?", Controller.Inquiry);

module.exports = router;
