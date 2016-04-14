'use strict';


var networkBuilder = require('./builder/network'),
	neuronBuilder = require('./builder/neuron');


const LAYERS = Symbol('Layers'),
	ACTIVATION_FUNCTION = Symbol('ActivationFunction');


class Network {


	constructor(topology, activationFunction) {
		this[ACTIVATION_FUNCTION] = activationFunction;
		this[LAYERS] = networkBuilder(topology, neuronBuilder(activationFunction));
	}


	activate(inputs) {
		return this[LAYERS].reduce(
			(inputs, layer) => layer.map(neuron => neuron.activate(inputs)),
			inputs
		);
	}


	get layers() {
		return this[LAYERS];
	}


	toString() {
		return '[\n' + this[LAYERS].map(layer => '\t[' + layer.map(neuron => neuron.toString()).join(', ') + ']').join('\n') + '\n]';
	}


}


module.exports = Network;