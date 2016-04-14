var Neuron = require('../neuron');


module.exports = function(activationFunction) {
	return (elementNo, elementCount, previousLayer) => {
		var weights;

		if (previousLayer) {
			weights = new Array(previousLayer).fill(true).map(() => Math.random());
		} else {
			weights = new Array(elementCount).fill(0);
			weights[elementNo] = 1;
		}

		return new Neuron(
			previousLayer ? Math.random() : 0,
			weights,
			activationFunction
		);
	}
};