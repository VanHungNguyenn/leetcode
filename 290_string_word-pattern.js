/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

const wordPattern = (pattern, s) => {
	const words = s.split(' ')

	if (words.length !== pattern.length) return false

	const patternToWord = {}
	const wordToPattern = {}

	for (let i = 0; i < pattern.length; i++) {
		const char = pattern[i]
		const word = words[i]

		if (!patternToWord.hasOwnProperty(char)) {
			patternToWord[char] = word
		}

		if (!wordToPattern.hasOwnProperty(word)) {
			wordToPattern[word] = char
		}

		if (patternToWord[char] !== word || wordToPattern[word] !== char) {
			return false
		}
	}

	return true
}

console.log(wordPattern('abba', 'dog constructor constructor dog'))
console.log(wordPattern('abba', 'dog cat cat dog'))
console.log(wordPattern('aaaa', 'dog cat cat dog'))
