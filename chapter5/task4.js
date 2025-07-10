function deepEqual(a, b) {
	if (a === null || b === null) {
		return a === b;
	} else if (typeof a === "object" && typeof b === "object") {

		const keysA = Object.keys(a);
		const keysB = Object.keys(b);
		if (keysA.length !== keysB.length) return false;


		for (let key in a) {
			if (!deepEqual(a[key], b[key])) {
				return false;
			}
		}

		
	} else {
		return a === b;
	}
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true