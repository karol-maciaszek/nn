/**
 * Step activation function for single neuron.
 *
 * @param {number} output1 Emitted when input value is lower or equal boundary
 * @param {number} output2 Emitted when input value is higher than boundary
 * @param {number} boundary Boundary parameter to test input against
 * @returns {function(number):number}
 */
module.exports = function(output1, output2, boundary) {
	return input => input > boundary ? output2 : output1;
};