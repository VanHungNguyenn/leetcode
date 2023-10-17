/**
 * @param {string} haystack
 * @param {string} neddle
 * @return {number}
 */

const strStr = (haystack, needle) => {
	return haystack.indexOf(needle)
}

const strStrWithOutIndexOf = (haystack, needle) => {}

console.log(strStrWithOutIndexOf('sadbutsad', 'sad'))
console.log(strStrWithOutIndexOf('leetcode', 'leeto'))
