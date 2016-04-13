module.exports = function() {
	return input => 1 / (1 + Math.pow(Math.E, -input));
};