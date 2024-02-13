function at(array, index) {
	if (!array || !Array.isArray(array)) {
		throw new Error('First argument needs to be an Array')
	}
	if (!parseInt(index)) {
		throw new Error('Second argument needs to be an integer');
	}
	return array[(index >= 0) ? parseInt(index) : parseInt(array.length + index)]
}

export { at };
