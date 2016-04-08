/**
 * Ramp activation function for single neuron.
 *
 * @param {number} output1 Emitted when input value is lower than boundary1
 * @param {number} output2 Emitted when input value is higher than boundary2
 * @param {number} boundary1 Boundary parameter to test input against
 * @param {number} boundary2 Boundary parameter to test input against
 * @returns {function(number):number}
 */
module.exports = function(output1, output2, boundary1, boundary2) {
	return input => {
		if (input < boundary1)
			return output1;

		if (input > boundary2)
			return output2;

		return output1 + ((input - boundary1) * (output2 - output1) / (boundary2 - boundary1));
	};
};