/**
 * @param {string} words
 * @return {string[]}
 */

const commonChars = function (words) {
	const charList = words[0].split('')

	const checkCharAllWord = (char, words) => {
		for (const word of words) {
			if (!word.includes(char)) {
				return false
			}
		}

		return true
	}

	const result = []

	for (const element of charList) {
		console.log(element)
		const check = checkCharAllWord(element, words.slice(1))
		console.log(check)

		if (check) {
			result.push(element)

			for (let i = 1; i < words.length; i++) {
				words[i] = words[i].replace(element, '')
			}
		}

		console.log(words)
	}

	return result
}

console.log(commonChars(['bella', 'label', 'roller']))
