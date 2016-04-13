'use strict';


var Neuron = require('./neuron');


const LAYERS = Symbol('Layers');


class Network {


	constructor(topology, activation) {
		this[LAYERS] = topology.map((count, layerNo) => {
			var layer = [];

			for (let i = 0; i < count; i++) {
				var weights;

				if (layerNo == 0) {
					weights = new Array(count).fill(0);
					weights[i] = 1;
				} else {
					weights = new Array(topology[layerNo - 1]).fill(true).map(() => Math.random());
				}

				layer.push(
					new Neuron(
						layerNo == 0 ? 0 : Math.random(),
						weights,
						activation
					)
				);
			}

			return layer;
		});
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