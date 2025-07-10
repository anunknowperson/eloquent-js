function arrayToList(arr) {

	let start = null;
	let prev = null;

	for (val of arr) {
		if (start === null) {
			start = {
				value : val,
				rest : null
			}
			prev = start;
		} else {
			let list = {
				
				value : val,
				rest : null
				
			}

			prev.rest = list;

			prev = list;
		}
	}

	return start;
}

function listToArray(list) {
	let result = [];

	while (list !== null) {
		result.push(list.value);
		list = list.rest;
	}

	return result;
}

function prepend(val, list) {
	return {
		value : val,
		rest : list
	}
}

function nth(list, index, counter = 0) {
	if (counter == index) {
		return list.value;
	} else {
		return nth(list.rest, index, counter+1);
	}
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20