/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

const reverseStr = (s, k) => {
	if (s.length <= k) return [...s].reverse().join('')

	let result = ''

	for (let i = 0; i < s.length; i = i + k) {
		console.log(i)

		if (i % (2 * k) === 0) {
			result += [...s.slice(i, i + k)].reverse().join('')
		} else {
			result += s.slice(i, i + k)
		}
	}

	return result
}

console.log(reverseStr('abcdefg', 2))
console.log(reverseStr('abcd', 2))
console.log(reverseStr('abcdefghij', 4))
console.log(reverseStr('abc', 4))
