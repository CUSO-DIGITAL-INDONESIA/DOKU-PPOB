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
			const { CHANNELCODE, LOGINNAME, PASSWORD } = req.query;
			const REQUESTDATETIME = requestDateTime();
			const WORDS = encryptWords(
				`${CHANNELCODE}${REQUESTDATETIME}${process.env.SHARED_KEY}${LOGINNAME}`
			);
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
		} catch (error) {
			res(error);
		}
	}

	static async CheckBalance(req, res, next) {
		try {
			const { CHANNELCODE, SESSIONID } = req.query;
			const REQUESTDATETIME = requestDateTime();
			const WORDS = encryptWords(
				`${CHANNELCODE}${SESSIONID}${REQUESTDATETIME}${process.env.SHARED_KEY}`
			);
			const result = await axios({
				method: "POST",
				url: `${process.env.BASE_URL}/DepositSystem-api/CheckLastBalance?`,
				params: {
					CHANNELCODE,
					SESSIONID,
					REQUESTDATETIME,
					WORDS,
				},
			});
			if (result.data) res.status(200).json(result.data);
		} catch (error) {
			res(error);
		}
	}

	static async Inquiry(req, res, next) {
		try {
			const { CHANNELCODE, SESSIONID, BILLERID, ACCOUNT_NUMBER, SYSTRACE } =
				req.query;
			const REQUESTDATETIME = requestDateTime();
			const WORDS = encryptWords(
				`${CHANNELCODE}${SESSIONID}${REQUESTDATETIME}${process.env.SHARED_KEY}${BILLERID}${ACCOUNT_NUMBER}`
			);
			const result = await axios({
				method: "POST",
				url: `${process.env.BASE_URL}/DepositSystem-api/Inquiry?`,
				params: {
					CHANNELCODE,
					SESSIONID,
					REQUESTDATETIME,
					BILLERID,
					ACCOUNT_NUMBER,
					SYSTRACE,
					WORDS,
				},
			});
			if (result.data) res.status(200).json(result.data);
		} catch (error) {
			res(error);
		}
	}

	static async Payment(req, res, next) {
		try {
			const {
				CHANNELCODE,
				SESSIONID,
				BILLERID,
				ACCOUNT_NUMBER,
				INQURYID,
				AMOUNT,
				SYSTRACE,
				BILL_ID,
				ADDITIONALDATA1,
				PASSWORD,
			} = req.query;
			const REQUESTDATETIME = requestDateTime();
			const WORDS = encryptWords(
				`${CHANNELCODE}${SESSIONID}${REQUESTDATETIME}${process.env.SHARED_KEY}${BILLERID}${ACCOUNT_NUMBER}`
			);
			const result = await axios({
				method: "POST",
				url: `${process.env.BASE_URL}/DepositSystem-api/Payment?`,
				params: {
					CHANNELCODE,
					SESSIONID,
					REQUESTDATETIME,
					BILLERID,
					ACCOUNT_NUMBER,
					INQURYID,
					AMOUNT,
					SYSTRACE,
					BILL_ID,
					WORDS,
					ADDITIONALDATA1,
					PASSWORD,
				},
			});
			if (result.data) res.status(200).json(result.data);
		} catch (error) {
			res.send(error);
		}
	}
}

module.exports = Controller;
