var derivative = function(input) {
	return input * (1 - input);
};

module.exports = function() {
	var func = input => 1 / (1 + Math.pow(Math.E, -input));

	func.derivative = derivative;

	return func;
};
