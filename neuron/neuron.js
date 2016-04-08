'use strict';


var ACTIVATION_FUNC = Symbol('ActivationFunction'),
	WEIGHTS = Symbol('Weights'),
	BIAS = Symbol('Bias');


class Neuron {


	constructor(bias, weights, activation) {
		this[BIAS] = bias;
		this[WEIGHTS] = weights;
		this[ACTIVATION_FUNC] = activation;
	}


	activate(inputs) {
		return this[ACTIVATION_FUNC](
			this[WEIGHTS].reduce(
				(sum, weight, i) => sum + inputs[i] * weight,
				this[BIAS]
			)
		);
	}


	train(bias, weights) {
		this[BIAS] = bias;
		this[WEIGHTS] = weights;
	}


	toString() {
		return `[${this[BIAS].toFixed(2)},${this[WEIGHTS].map(w => w.toFixed(2)).join(',')}]`;
	}


}


module.exports = Neuron;
