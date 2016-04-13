'use strict';


const NETWORK = Symbol('Network'),
	LEARNING_RATE = Symbol('LearningRate');


var update = function(neuron, delta) {
	neuron.weights = neuron.weights.map(
		(weight, i) => weight + this[LEARNING_RATE] * neuron.inputs[i] * delta
	);
	neuron.bias += this[LEARNING_RATE] * delta;
};


var computeDeltas = function(example, layer, previous) {
	return layer.map((neuron, n) => {
		let error = previous
			? previous.layer.reduce((sum, previousNeuron, pn) => sum + previousNeuron.weights[n] * previous.deltas[pn], 0)
			: example.expected[n] - neuron.output;

		return neuron.output * (1 - neuron.output) * error;
	});
};


class BackPropagation {


	constructor(network, learningRate) {
		this[NETWORK] = network;
		this[LEARNING_RATE] = learningRate;
	}


	train(example) {
		this[NETWORK].activate(example.inputs);

		this[NETWORK].layers
			.slice()
			.reverse()
			.reduce((previous, layer) => {
				let deltas = computeDeltas(example, layer, previous);

				if (previous)
					previous.layer.forEach((neuron, n) => update.call(this, neuron, previous.deltas[n]));

				return {layer, deltas};
			}, null);
	}


	get learningRate() {
		return this[LEARNING_RATE];
	}


	set learningRate(learningRate) {
		this[LEARNING_RATE] = learningRate;
	}


}


module.exports = BackPropagation;