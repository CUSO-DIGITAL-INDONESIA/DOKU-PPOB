require("dotenv").config();
const express = require("express");
const app = express();
const axios = require("axios");
const PORT = 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/DepositSystem-api/NetworkManagement", async (req, res) => {
	try {
		const result = await axios({
			method: "POST",
			url: `${process.env.BASE_URL}/DepositSystem-api/NetworkManagement?`,
		});
		console.log(result.data);
		if (result.data) res.status(200).json(result.data);
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
});

app.listen(PORT, () => {
	console.log("This app runing on port: ", PORT);
});
