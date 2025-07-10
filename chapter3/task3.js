function countChar(str, chr) {

	let result = 0;

	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) === chr) {
			result++;
		}
	}

	return result;

}

console.log(countChar("asdawdwaj", "a"));