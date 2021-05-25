sha1 = require("js-sha1");

function encryptWords(words) {
	return sha1(words);
}

module.exports = encryptWords;
