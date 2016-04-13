'use strict';


var q = require('q');


var sigmoid = require('./activation/sigmoid'),
	Network = require('./network/network'),
	BackPropagation = require('./learning/back_propagation');


var getExamples = function() {
	var deferred = q.defer(),
		examples = [];

	var lineReader = require('readline').createInterface({
		input: require('fs').createReadStream('./data/iris.data')
	});

	lineReader.on('line', (line) => {
		var values = line.split(',');

		examples.push({
			inputs: values.slice(0, 4).map(attribute => parseFloat(attribute)),
			expected: (() => {
				switch(values[4]) {
					case 'Iris-setosa':
						return [0.0];

					case 'Iris-versicolor':
						return [0.5];

					case 'Iris-virginica':
						return [1.0];
				}
			})()
		});
	});

	lineReader.on('close', () => deferred.resolve(examples));

	return deferred.promise;
};


var train = function(examples) {
	examples.forEach(example => {
		backPropagation.train(example);
	});
};


var test = function(examples) {
	var errors = examples.reduce(
		(errors, example) => errors.concat(network.activate(example.inputs).map((output, i) => example.expected[i] - output)),
		[]
	);

	return errors.reduce((sum, error) => sum + error * error) / errors.length;
};


var network = new Network([4, 3, 1], sigmoid()),
	backPropagation = new BackPropagation(network, 0.3);


getExamples()
	.then(examples => {
		var trainExamples = examples.filter((example, i) => i % 4 > 0),
			testExamples = examples.filter((example, i) => i % 4 == 0);

		for (var i = 0; i < 10000; i++) {
			train(trainExamples);

			if (i % 100 == 0) {
				console.log(i, test(testExamples));
			}
		}
	})
	.then(() => {
		console.log(network.toString());
	})
	.catch((error) => console.log(error.stack));