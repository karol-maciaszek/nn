'use strict';


var Neuron = require('../neuron/neuron');


const NETWORK = Symbol('Network');


class Network {


	constructor(topology, activation) {
		this[NETWORK] = topology.map((count, layerNo) => {
			var layer = [];

			for (let i = 0; i < count; i++) {
				var weights;

				if (layerNo == 0) {
					weights = new Array(count).fill(0);
					weights[i] = 1;
				} else {
					weights = new Array(topology[layerNo - 1]).fill(true).map(() => 0.5);//Math.random());
				}

				layer.push(
					new Neuron(
						0,//Math.random(),
						weights,
						activation
					)
				);
			}

			return layer;
		});
	}


	activate(inputs) {
		return this[NETWORK].reduce(
			(inputs, layer) => layer.map(neuron => neuron.activate(inputs)),
			inputs
		);
	}


	toString() {
		return '[\n' + this[NETWORK].map(layer => '\t[' + layer.map(neuron => neuron.toString()).join(', ') + ']').join('\n') + '\n]';
	}


}


module.exports = Network;