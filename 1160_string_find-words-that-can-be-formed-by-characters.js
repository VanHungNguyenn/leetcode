/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */

const countCharacters = (words, chars) => {
	const countChar = {}

	for (const char of chars) {
		countChar[char] = (countChar[char] || 0) + 1
	}

	const checkAllCharInWord = (word, array) => {
		for (const char of word) {
			if (!array[char] || array[char] === 0) {
				return false
			} else {
				array[char]--
			}
		}

		return true
	}

	let result = 0

	console.log(countChar)

	for (const word of words) {
		const cloneCountChar = { ...countChar }

		if (checkAllCharInWord(word, cloneCountChar)) {
			result += word.length
		}
	}

	return result
}

const countCharactersOptimization = function (words, chars) {
	const charsCount = new Array(26).fill(0)
	for (const char of chars) {
		charsCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
	}

	const canFormWord = (word) => {
		const wordCount = new Array(26).fill(0)
		for (const char of word) {
			const index = char.charCodeAt(0) - 'a'.charCodeAt(0)
			wordCount[index]++
			if (wordCount[index] > charsCount[index]) return false
		}
		return true
	}

	let result = 0
	for (const word of words) {
		if (canFormWord(word)) {
			result += word.length
		}
	}

	return result
}

console.log(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach'))
