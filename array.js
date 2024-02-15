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
	const result = [...targetArray];	
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


export { at, concat };
