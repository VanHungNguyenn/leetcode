/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

const findTheDifference = (s, t) => {
	let mappingS = {}

	for (const elem of s) {
		mappingS[elem] = (mappingS[elem] || 0) + 1
	}

	for (const elem of t) {
		if (!mappingS[elem] || mappingS[elem] < 0) {
			return elem
		} else {
			mappingS[elem]--
		}
	}
}

const findTheDiffenceOptimization = (s, t) => {
	let charCodeSumS = 0
	let charCodeSumT = 0

	for (const elem of s) {
		charCodeSumS += elem.charCodeAt(0)
	}

	for (const elem of t) {
		charCodeSumT += elem.charCodeAt(0)
	}

	return String.fromCharCode(charCodeSumT - charCodeSumS)
}

console.log(findTheDiffenceOptimization('abcd', 'abcde'))
console.log(findTheDifference('', 'y'))
console.log(findTheDifference('asdfg', 'sfdahg'))
console.log(findTheDifference('a', 'aa'))
