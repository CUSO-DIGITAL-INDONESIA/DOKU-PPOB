function pad2(n) {
	return n < 10 ? "0" + n : n;
}

function requestDateTime() {
	let date = new Date();
	date = new Date(date.setHours(date.getHours() + 7));

	return Number(
		date.getFullYear().toString() +
			pad2(date.getMonth() + 1) +
			pad2(date.getDate()) +
			pad2(date.getHours()) +
			pad2(date.getMinutes()) +
			pad2(date.getSeconds())
	);
}

module.exports = requestDateTime;
