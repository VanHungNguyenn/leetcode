/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */

const uncommonFromSentence = function (s1, s2) {
	const countWord = []

	for (const word of s1.split(' ')) {
		countWord[word] = (countWord[word] || 0) + 1
	}

	for (const word of s2.split(' ')) {
		countWord[word] = (countWord[word] || 0) + 1
	}

	const result = []

	for (const key in countWord) {
		if (countWord[key] === 1) {
			result.push(key)
		}
	}

	return result
}
console.log(uncommonFromSentence('this apple is sweet', 'this apple is sour'))
