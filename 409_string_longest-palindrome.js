/**
 * @param {string} s
 * @return {number}
 */

const longestPalindrome = (s) => {
	let charCount = {}

	for (const element of s) {
		charCount[element] = (charCount[element] || 0) + 1
	}

	let result = 0
	let hasOdd = false

	for (const key in charCount) {
		if (charCount[key] % 2 === 0) {
			result += charCount[key]
		} else {
			result += charCount[key] - 1
			hasOdd = true
		}
	}

	return flag > 0 ? result + 1 : result
}

const longestPalindromeOptimization = (s) => {
	let chars = new Set()
	let result = 0

	for (const char of s) {
		if (chars.has(char)) {
			chars.delete(char)
			result += 2
		} else {
			chars.add(char)
		}
	}

	return chars.size > 0 ? result + 1 : result
}

console.log(longestPalindromeOptimization('abccccdd'))
console.log(longestPalindromeOptimization('a'))
