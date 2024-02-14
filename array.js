function at(targetArray, index) {
	if (!targetArray || !Array.isArray(targetArray)) {
		throw new Error('First argument needs to be an Array')
	}
	if (!parseInt(index)) {
		throw new Error('Second argument needs to be an integer');
	}
	return targetArray[(index >= 0) ? parseInt(index) : parseInt(targetArray.length + index)]
}

function concat(targetArray) {
}

export { at, concat };
