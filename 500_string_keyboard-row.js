/**
 * @param {string[]} words
 * @return {string[]}
 */

const findWords = (words) => {
	const charactersList = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']

	const result = []

	loop: for (const word of words) {
		let index

		if (charactersList[0].includes(word[0].toLowerCase())) {
			index = 0
		} else if (charactersList[1].includes(word[0].toLowerCase())) {
			index = 1
		} else {
			index = 2
		}

		for (let i = 1; i < word.length; i++) {
			if (!charactersList[index].includes(word[i].toLowerCase())) {
				continue loop
			}
		}

		result.push(word)
	}

	return result
}

const findWordsOptimization = (words) => {
	const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']

	const charToRow = {}

	for (let i = 0; i < rows.length; i++) {
		for (const char of rows[i]) {
			charToRow[char] = i
		}
	}

	const res = []

	for (const word of words) {
		const row = charToRow[word[0].toLowerCase()]

		let valid = true

		for (let i = 1; i < word.length; i++) {
			if (charToRow[word[i].toLowerCase()] !== row) {
				valid = false
				break
			}
		}

		if (valid) res.push(word)
	}

	return res
}

console.log(findWordsOptimization(['Hello', 'Alaska', 'Dad', 'Peace']))
console.log(findWords(['omk']))
console.log(findWords(['adsdf', 'sfd']))
