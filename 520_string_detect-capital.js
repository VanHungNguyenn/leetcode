/**
 * @param {string} word
 * @return {boolean}
 */

const isUppercase = (char) => {
	return char === char.toUpperCase()
}

const detectCapitalUse = (word) => {
	if (word.length === 1) return true

	let isFirstCapital = isUppercase(word[0])
	let isSecondCapital = isUppercase(word[1])

	if (!isFirstCapital && isSecondCapital) return false

	let capitalConsistency = isSecondCapital

	for (let i = 2; i < word.length; i++) {
		if (isUppercase(word[i]) !== capitalConsistency) {
			return false
		}
	}

	return true
}

console.log(detectCapitalUse('USA'))
console.log(detectCapitalUse('FlaG'))
console.log(detectCapitalUse('leetcode'))
console.log(detectCapitalUse('Google'))

// console.log(isUppercase('a'))
// console.log(isUppercase('A'))
