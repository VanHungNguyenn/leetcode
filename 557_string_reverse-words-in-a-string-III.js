/**
 * @param {string} s
 * @return {string}
 */

const reverseWords = (s) => {
	let words = s.split(/\s+/).filter(Boolean)
	let result = []

	for (const word of words) {
		result.push([...word].reverse().join(''))
	}

	return result.join(' ')
}

console.log(reverseWords("Let's take LeetCode contest   "))
console.log(reverseWords('God Ding'))
