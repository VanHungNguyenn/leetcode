/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

const numJewelsInStones = (jewels, stones) => {
	const charCount = []

	for (const char of stones) {
		charCount[char] = (charCount[char] || 0) + 1
	}

	let result = 0

	for (const element of jewels) {
		if (charCount[element]) {
			result += charCount[element]
		}
	}

	return result
}

console.log(numJewelsInStones('aA', 'aAAbbbb'))
console.log(numJewelsInStones('z', 'ZZ'))
