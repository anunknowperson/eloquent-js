var width = 5, height = 5;

for (var i = 0; i < height; i++) {

	if (i % 2 === 0) {
		console.log("# ".repeat(width));
	} else {
		console.log(" #".repeat(height));
	}
}