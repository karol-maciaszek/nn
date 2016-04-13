var derivative = function(input) {
	return 1 - input * input;
};

module.exports = function() {
	var func = input => Math.tanh(input);

	func.derivative = derivative;

	return func;
};
