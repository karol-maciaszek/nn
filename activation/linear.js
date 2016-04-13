var derivative = function(input) {
	return 1;
};

module.exports = function() {
	var func = input => input;

	func.derivative = derivative;

	return func;
};
