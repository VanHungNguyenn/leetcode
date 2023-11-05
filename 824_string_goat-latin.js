/**
 * @param {string} sentence
 * @return {string}
 */

const toGoatLatin = (sentence) => {
	const words = sentence.split(' ')
	const vowels = ['a', 'e', 'i', 'o', 'u']
	let result = []

	for (let i = 0; i < words.length; i++) {
		if (vowels.includes(words[i][0].toLowerCase())) {
			result.push(words[i] + 'ma' + 'a'.repeat(i + 1))
		} else {
			result.push(
				words[i].slice(1) + words[i][0] + 'ma' + 'a'.repeat(i + 1)
			)
		}
	}

	return result.join(' ')
}

const toGoatLatinOptimization = function (sentence) {
	const isVowel = (char) =>
		['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())

	return sentence
		.split(' ')
		.map((word, index) => {
			if (isVowel(word[0])) {
				return word + 'ma' + 'a'.repeat(index + 1)
			} else {
				return word.slice(1) + word[0] + 'ma' + 'a'.repeat(index + 1)
			}
		})
		.join(' ')
}

console.log(toGoatLatin('I speak Goat Latin'))
console.log(toGoatLatin('The quick brown fox jumped over the lazy dog'))
