let date = new Date();
date = new Date(date.setHours(date.getHours() + 7));

function pad2(n) {
	return n < 10 ? "0" + n : n;
}

console.log(
	Number(
		date.getFullYear().toString() +
			pad2(date.getMonth() + 1) +
			pad2(date.getDate()) +
			pad2(date.getHours()) +
			pad2(date.getMinutes()) +
			pad2(date.getSeconds())
	)
);
