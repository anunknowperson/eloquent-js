const arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function (curr, val) { 

	return curr.concat(val);

}));