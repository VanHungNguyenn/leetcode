function recursive(input) {
	if (input <= 0) {
		return input
	} else {
		console.log(input)
		return recursive(input - 1)
	}
}

console.log(recursive(6))

const getFibonaci = (position) => {
	if (position <= 1) {
		return position
	}

	return getFibonaci(position - 1) + getFibonaci(position - 2)
}

console.log(getFibonaci(3))
console.log(getFibonaci(2))
