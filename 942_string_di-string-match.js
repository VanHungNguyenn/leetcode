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

	result.push(array[0])
	return result
}

console.log(diStringMatch('IDID'))
