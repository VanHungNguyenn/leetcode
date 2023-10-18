/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isSubsequence = (s, t) => {
	let temp = [...s]

	for (let i = 0; i < t.length; i++) {
		if (temp[0] === t[i]) {
			temp.shift()
		}
	}

	return temp.length === 0
}

const isSubsequenceOptimization = (s, t) => {
	if (s.length === 0) return false

	let indexS = 0
	let indexT = 0

	while (indexT < t.length) {
		if (s[indexS] === t[indexT]) {
			indexS++
		}

		indexT++

		if (indexS === s.length) return true
	}

	return false
}

console.log(isSubsequence('abc', 'ahbgdc'))
console.log(isSubsequence('axc', 'ahbgdc'))
