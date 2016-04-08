var sigmoid = require('./activation/sigmoid'),
	Neuron = require('./neuron/neuron'),
	Network = require('./network/network');


var network = new Network([2, 4, 2], sigmoid(0.5, 0.5, 0));

console.log(network.toString());

var result = network.activate([.15, .4]);

console.log('results:', result);