function reverseArrayInPlace(array) {
	let j = array.length - 1;

	for (let i = 0; i != j; i++) {
		let temp = array[j];
		array[j] = array[i];
		array[i] = temp;
		j--;
	}
}

function reverseArray(array) {
	let copy = [...array];

	reverseArrayInPlace(copy);

	return copy;	
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];