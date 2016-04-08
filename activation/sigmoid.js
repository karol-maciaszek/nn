module.exports = function(x, y, z) {
	return input => z + (1 / (1 + Math.exp(-1 * x * input + y)))
};