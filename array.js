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

function every(targetArray, callbackFunction) {
	if (!targetArray || !Array.isArray(targetArray)) {
		throw new Error('First argument needs to be an Array');
	}
	if (!callbackFunction || typeof callbackFunction !== 'function') {
		throw new Error('Second argument needs to be a Function');
	}
	if (!targetArray.length) { return true; }
	for (let i=0; i<targetArray.length; i++) {
		let result = callbackFunction(targetArray[i], i, targetArray);
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

function filter(targetArray, filterFunction) {
	if (!targetArray || !Array.isArray(targetArray)) {
		throw new Error('First argument needs to be an Array');
	}
	if (!filterFunction || typeof filterFunction !== 'function') {
		throw new Error('Second arguments must be a function');
	}
	const result = [];
	for (let i=0; i<targetArray.length; i++) {
		const filterTest = filterFunction(targetArray[i], i, targetArray);
		if (filterTest) {
			result.push(targetArray[i]);
		}
	}
	return result;
}

function find(targetArray, finderFunction) {
	if (!targetArray || !Array.isArray(targetArray)) {
		throw new Error('First argument needs to be an Array');
	}
	if (!finderFunction || typeof finderFunction !== 'function') {
		throw new Error('Second arguments must be a function');
	}
	for (let i=0; i<targetArray.length; i++) {
		const findTest = finderFunction(targetArray[i], i, targetArray);
		if (findTest) {
			return targetArray[i];
		}
	}
	return undefined;
}

function findIndex(targetArray, finderFunction) {
	if (!targetArray || !Array.isArray(targetArray)) {
		throw new Error('First argument needs to be an Array');
	}
	if (!finderFunction || typeof finderFunction !== 'function') {
		throw new Error('Second arguments must be a function');
	}
	for (let i=0; i<targetArray.length; i++) {
		const findTest = finderFunction(targetArray[i], i, targetArray);
		if (findTest) {
			return i;
		}
	}
	return -1;
}

function findLast(targetArray, finderFunction) {
	if (!targetArray || !Array.isArray(targetArray)) {
		throw new Error('First argument needs to be an Array');
	}
	if (!finderFunction || typeof finderFunction !== 'function') {
		throw new Error('Second arguments must be a function');
	}
	for (let i=targetArray.length-1; i>=0; i--) {
		const findTest = finderFunction(targetArray[i], i, targetArray);
		if (findTest) {
			return targetArray[i];
		}
	}
	return -1;
}

function findLastIndex(targetArray, finderFunction) {
	if (!targetArray || !Array.isArray(targetArray)) {
		throw new Error('First argument needs to be an Array');
	}
	if (!finderFunction || typeof finderFunction !== 'function') {
		throw new Error('Second arguments must be a function');
	}
	for (let i=targetArray.length-1; i>=0; i--) {
		const findTest = finderFunction(targetArray[i], i, targetArray);
		if (findTest) {
			return i;
		}
	}
	return -1;
}

export { at, concat, entries, every, fill, filter, find, findIndex, findLast, findLastIndex };
