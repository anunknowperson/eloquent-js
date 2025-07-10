function every(arr, func) {
	for (const val of arr) {

		if (!func(val)) return false;
	}
	return true;
}

function some(arr, func) {
	for (const val of arr) {

		if (func(val)) return true;
	}
	return false;
}



console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false