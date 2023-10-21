/**
 * @param {string[]} words
 * @return {number}
 */

const morseCodes = [
	'.-',
	'-...',
	'-.-.',
	'-..',
	'.',
	'..-.',
	'--.',
	'....',
	'..',
	'.---',
	'-.-',
	'.-..',
	'--',
	'-.',
	'---',
	'.--.',
	'--.-',
	'.-.',
	'...',
	'-',
	'..-',
	'...-',
	'.--',
	'-..-',
	'-.--',
	'--..',
]

const uniqueMorseRepresentation = (words) => {
	const listTransformations = []

	for (const word of words) {
		let morseWord = word
			.split('')
			.map((char) => morseCodes[char.charCodeAt(0) - 97])
			.join('')

		listTransformations.push(morseWord)
	}

	const set = new Set(listTransformations)

	return set.size
}

const uniqueMorseRepresentationOptimization = (words) => {
	let transformationsSet = new Set()

	for (const word of words) {
		let morseWord = word
			.split('')
			.map((char) => morseCodes[char.charCodeAt(0) - 97])
			.join('')

		transformationsSet.add(morseWord)
	}

	return transformationsSet.size
}

console.log(uniqueMorseRepresentation(['gin', 'zen', 'gig', 'msg']))
