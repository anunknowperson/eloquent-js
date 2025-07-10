const ancestry = JSON.parse(require("./ancestry.js"));


function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function groupBy(array, func) {
	let result = {};

	for (let val of array) {
		const key = func(val);
		if (key in result) {
			result[key].push(val);
		} else {
			result[key] = [val]
		}
	
	}

	return result;
}

const byCentury = groupBy(ancestry, function ({died}){
	return String(Math.ceil(died / 100));
});

for (const [key, value] of Object.entries(byCentury)) {
	console.log(key + ": " + average(value.map(person => person.died - person.born)));
}

/*
16: 43.5
17: 51.2
18: 52.78947368421053
19: 54.833333333333336
20: 84.66666666666667
21: 94
*/