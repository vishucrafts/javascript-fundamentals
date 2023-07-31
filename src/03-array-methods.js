function customMap(arr, mapFn) {
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(mapFn(arr[i], i));
	}

	return newArr;
}

function customFilter(arr, predicateFn) {
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (predicateFn(arr[i], i)) {
			newArr.push(arr[i]);
		}
	}

	return newArr;
}

function customReduce(arr, reducerFn, initialValue) {
	let acc = initialValue;
	for (let i = 0; i < arr.length; i++) {
		acc = reducerFn(acc, arr[i], i);
	}

	return acc;
}

export {customMap, customFilter, customReduce}