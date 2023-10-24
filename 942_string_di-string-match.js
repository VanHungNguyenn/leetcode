/**
 * @param {string} s
 * @return {number[]}
 */

const diStringMatch = (s) => {
	const array = Array.from({ length: s.length + 1 }, (_, i) => i)

	const result = []

	for (const element of s) {
		if (element === 'I') {
			result.push(array.shift())
		} else {
			result.push(array.pop())
		}
	}

	console.log(array)
	return [...result + ...array]
}

console.log(diStringMatch('IDID'))
