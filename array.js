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
	if (!targetArray || !Array.isArray(targetArray)) {
		throw new Error('First argument needs to be an array');
	}
	const result = structuredClone(targetArray);
	for (let i=1; i<arguments.length; i++) {
		const item = arguments[i];
		if (typeof item[Symbol.iterator] === 'function' && typeof item !== 'string') {
			console.log(item, 'is iterable');
			for (let subitem of item) {
				result.push(subitem);
			}
		} else {
			result.push(item);
		}
	}
	return result;
}

function entries(targetArray) {
	if (!targetArray || !Array.isArray(targetArray)) {
		throw new Error('First argument needs to be an Array');
	}
	const result = [];
	for (let i=0; i<targetArray.length; i++) {
		result.push([ i, targetArray[i] ]);
	}
	return result;
}

function every(targetArray, fn) {
	if (!targetArray || !Array.isArray(targetArray)) {
		throw new Error('First argument needs to be an Array');
	}
	if (!fn || typeof fn !== 'function') {
		throw new Error('Second argument needs to be a Function');
	}
	if (!targetArray.length) { return true; }
	for (let i=0; i<targetArray.length; i++) {
		let result = fn(targetArray[i], i, targetArray);
		if (!result) { return false; }
	}
	return true;
}

function fill(targetArray, fillValue, startIndex, stopIndex) {
	if (!targetArray || !Array.isArray(targetArray)) {
		throw new Error('First argument needs to be an Array');
	}
	if (typeof fillValue === 'undefined') {
		throw new Error('Second arguments must have the value to be filled');
	}
	const result = structuredClone(targetArray);
	const startAt = parseInt(startIndex) ? parseInt(startIndex) : 0;
	const stopAt = parseInt(stopIndex) ? parseInt(stopIndex) : targetArray.length - 1;
	for (let i=startAt; i<=stopAt; i++) {
		result[i] = fillValue;
	}
	return result;
}

export { at, concat, entries, every, fill };
