/**
 * @param {string} s
 * @return {string}
 */

const reverseVowels = (s) => {
	const vowelsSet = new Set([
		'a',
		'e',
		'i',
		'o',
		'u',
		'A',
		'E',
		'I',
		'O',
		'U',
	])

	let result = [...s]

	let left = 0
	let right = s.length - 1

	while (left < right) {
		if (!vowelsSet.has(result[left])) {
			left++
			continue
		}

		if (!vowelsSet.has(result[right])) {
			right--
			continue
		}

		let temp = result[left]
		result[left] = result[right]
		result[right] = temp

		left++
		right--
	}

	return result.join('')
}

console.log(reverseVowels('hello'))
console.log(reverseVowels('leetcode'))
