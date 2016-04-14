'use strict';


module.exports = function(topology, elementBuilder) {
	return topology.map((elementCount, layerNo) => {
		var layer = [];

		for (let elementNo = 0; elementNo < elementCount; elementNo++) {
			layer.push(elementBuilder(
				elementNo,
				elementCount,
				layerNo > 0
					? topology[layerNo - 1]
					: null
			));
		}

		return layer;
	});
};