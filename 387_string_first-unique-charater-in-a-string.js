/**
 * @param {string} s
 * @return {number}
 */

const firstUnique = (s) => {
	let charCount = {}

	for (const element of s) {
		charCount[element] = (charCount[element] || 0) + 1
	}

	for (const key in charCount) {
		if (charCount[key] === 1) {
			return s.indexOf(key)
		}
	}

	return -1
}

console.log(firstUnique('loveleetcode'))
console.log(firstUnique('leetcode'))
console.log(firstUnique('aabb'))
