function createCouter() {
	var counter = 0

	function increase() {
		return ++counter
	}

	return increase
}

const counter1 = createCouter()

console.log(counter1())
console.log(counter1())
console.log(counter1())
