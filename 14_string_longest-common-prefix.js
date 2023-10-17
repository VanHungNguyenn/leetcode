/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = function (strs) {
	if (!strs.length) return ''

	let result = ''
	let minLen = Math.min(...strs.map((str) => str.length))

	for (let x = 0; x < minLen; x++) {
		let temp = strs[0][x]

		for (let index = 1; index < strs.length; index++) {
			if (strs[index][x] !== temp) {
				return result
			}
		}

		result += temp
	}

	return result
}

console.log(
	`Result: ${longestCommonPrefix([
		'vanhungnguyen',
		'vanhunghaha',
		'vantrong123',
	])}`
)
