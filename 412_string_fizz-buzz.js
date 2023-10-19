/**
 * @param {number} n
 * @return {string[]}
 */

const fizzBuzz = (n) => {
	let result = []

	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			result.push('FizzBuzz')
		} else if (i % 3 === 0) {
			result.push('Fizz')
		} else if (i % 5 === 0) {
			result.push('Buzz')
		} else {
			result.push(i.toString())
		}
	}

	return result
}

const fizzBuzzOptimization = (n) => {
	let result = []

	for (let i = 1; i <= n; i++) {
		let value = ''

		if (i % 3 === 0) value += 'Fizz'
		if (i % 5 === 0) value += 'Buzz'

		if (!value) value = i.toString()

		result.push(value)
	}

	return result
}

console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(16))
