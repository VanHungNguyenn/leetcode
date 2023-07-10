/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = (s) => {
	let max = 0
	let start = 0
	let end = 0

	const map = new Map()

	while (end < s.length) {
		if (map.has(s[end])) {
			start = Math.max(map.get(s[end]) + 1, start)
			map.delete(s[end])
		}

		map.set(s[end], end)
		max = Math.max(max, end - start + 1)
		end++
	}

	return max
}

console.log(lengthOfLongestSubstring('abcab'))
