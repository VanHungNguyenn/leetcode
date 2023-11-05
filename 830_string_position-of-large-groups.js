/**
 * @param {string} s
 * @return {number[][]}
 */

const largeGroupPosition = (s) => {
	if (s.length < 3) {
		return []
	}

	const result = []

	let start = 0
	let end = 0
	let temp = s[0]

	for (let i = 1; i < s.length; i++) {
		if (s[i] === temp) {
			end = i
		} else {
			if (end - start > 1) {
				result.push([start, end])
			}

			start = i
			temp = s[i]
		}
	}

	if (end - start > 1) {
		result.push([start, end])
	}

	return result
}

const largeGroupPositionOptimization = (s) => {
	const res = []

	let start = 0

	for (let i = 0; i < s.length; i++) {
		if (i === s.length - 1 || s[i] !== s[i + 1]) {
			if (i - start + 1 >= 3) {
				res.push([start, i])
			}

			start = i + 1
		}
	}

	return res
}

console.log(largeGroupPosition('abbxxxxzzy')) // [[3,6]]
console.log(largeGroupPosition('abcdddeeeeaabbbcd')) // [[3,5],[6,9],[12,14]]
console.log(largeGroupPosition('aaa'))
