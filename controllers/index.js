const axios = require("axios");
const { encryptWords, requestDateTime } = require("../helpers");

class Controller {
	static async NetworkManagement(req, res) {
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
	}

	static async Login(req, res, next) {
		try {
			const { LOGINNAME, PASSWORD } = req.query;
			const CHANNELCODE = Number(req.query.CHANNELCODE);
			const REQUESTDATETIME = requestDateTime();
			const WORDS = encryptWords(
				`${CHANNELCODE}${REQUESTDATETIME}${process.env.SHARED_KEY}${LOGINNAME}`
			);
			console.log(req.query);
			console.log(WORDS);
			console.log(REQUESTDATETIME);
			const result = await axios({
				method: "POST",
				url: `${process.env.BASE_URL}/DepositSystem-api/AgentLoginMIP?`,
				params: {
					CHANNELCODE,
					REQUESTDATETIME,
					LOGINNAME,
					PASSWORD,
					WORDS,
				},
			});
			if (result.data) res.status(200).json(result.data);
			// res.json({
			// 	CHANNELCODE,
			// 	REQUESTDATETIME,
			// 	WORDS,
			// });
		} catch (error) {
			res(error);
		}
	}
}

module.exports = Controller;
