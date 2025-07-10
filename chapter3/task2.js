function isEven(val) {
	
	if (val < 0) {
		return isEven(-val);
	}

	if (val === 0) {
		return true;
	} else if (val === 1) {
		return false;
	} else {
		return isEven(val - 2);
	}

	return val

}

console.log(isEven(50));

console.log(isEven(75));

console.log(isEven(-1));