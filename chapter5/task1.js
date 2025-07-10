function range(a,b, step=1) {
	let result = [];

	for (let i = a; (a < b) ? i <= b : i >= b; i+= step) {
		result.push(i);
	}

	return result;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));

function sum(arr) {
	let result = 0;

	for (val of arr) {
		result += val;
	}

	return result;
}

console.log(sum(range(1,10)));