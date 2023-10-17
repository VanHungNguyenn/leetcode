/**
 * @param {string} haystack
 * @param {string} neddle
 * @return {number}
 */

const strStr = (haystack, needle) => {
	return haystack.indexOf(needle)
}

const strStrWithOutIndexOf = (haystack, needle) => {
	if (!needle.length) return 0

	for (let i = 0; i <= haystack.length - needle.length; i++) {
		let j = 0

		if (haystack[i] === needle[0]) {
			while (haystack[i + j] === needle[j] && j < needle.length) {
				j++
			}

			if (j === needle.length) return i
		}
	}

	return -1
}

console.log(strStrWithOutIndexOf('sadbutsad', 'sad'))
console.log(strStrWithOutIndexOf('leetcode', 'leeto'))
console.log(strStrWithOutIndexOf('a', 'a'))
