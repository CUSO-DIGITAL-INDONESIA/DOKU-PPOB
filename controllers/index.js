const axios = require("axios");

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

	// static async Login(req, res, next) {
	// 	try {
	// 	} catch (error) {}
	// }
}

module.exports = Controller;
