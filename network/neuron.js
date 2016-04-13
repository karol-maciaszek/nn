'use strict';


var ACTIVATION_FUNC = Symbol('ActivationFunction'),
	WEIGHTS = Symbol('Weights'),
	BIAS = Symbol('Bias'),
	OUTPUT = Symbol('Output'),
	INPUTS = Symbol('Inputs');


class Neuron {


	constructor(bias, weights, activation) {
		this[BIAS] = bias;
		this[WEIGHTS] = weights;
		this[ACTIVATION_FUNC] = activation;
		this[OUTPUT] = 0.0;
	}


	activate(inputs) {
		this[INPUTS] = inputs;

		return this[OUTPUT] = this[ACTIVATION_FUNC](
			this[WEIGHTS].reduce(
				(sum, weight, i) => sum + inputs[i] * weight,
				this[BIAS]
			)
		);
	}


	get output() {
		return this[OUTPUT];
	}


	get weights() {
		return this[WEIGHTS];
	}


	set weights(weights) {
		this[WEIGHTS] = weights;
	}


	get bias() {
		return this[BIAS];
	}


	set bias(bias) {
		this[BIAS] = bias;
	}


	get inputs() {
		return this[INPUTS];
	}


	toString() {
		return `[${this[BIAS].toFixed(2)},${this[WEIGHTS].map(w => w.toFixed(2)).join(',')}->${this[OUTPUT].toFixed(2)}]`;
	}


}


module.exports = Neuron;
