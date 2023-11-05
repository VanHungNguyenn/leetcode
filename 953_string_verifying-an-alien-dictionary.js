/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

const isAlienSorted = (words, order) => {
	const alienOrder = {}

	for (let i = 0; i < order.length; i++) {
		alienOrder[order[i]] = i
	}

	const compareWords = (word1, word2) => {
		const length = Math.min(word1.length, word2.length)

		for (let i = 0; i < length; i++) {
			if (alienOrder[word1[i]] > alienOrder[word2[i]]) {
				return false
			} else if (alienOrder[word1[i]] < alienOrder[word2[i]]) {
				return true
			}
		}

		return word1.length <= word2.length
	}

	for (let i = 0; i < words.length - 1; i++) {
		if (!compareWords(words[i], words[i + 1])) {
			return false
		}
	}

	return true
}

console.log(isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz'))
console.log(
	isAlienSorted(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz')
)
console.log(isAlienSorted(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz'))
console.log(
	isAlienSorted(
		[
			'fxasxpc',
			'dfbdrifhp',
			'nwzgs',
			'cmwqriv',
			'ebulyfyve',
			'miracx',
			'sxckdwzv',
			'dtijzluhts',
			'wwbmnge',
			'qmjwymmyox',
		],
		'zkgwaverfimqxbnctdplsjyohu'
	)
)
