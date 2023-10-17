/**
 * Object containing Roman numeral characters as keys and their corresponding integer values as values.
 * @typedef {Object} RomanTransIntList
 * @property {number} I - The integer value of the Roman numeral character "I".
 * @property {number} V - The integer value of the Roman numeral character "V".
 * @property {number} X - The integer value of the Roman numeral character "X".
 * @property {number} L - The integer value of the Roman numeral character "L".
 * @property {number} C - The integer value of the Roman numeral character "C".
 * @property {number} D - The integer value of the Roman numeral character "D".
 * @property {number} M - The integer value of the Roman numeral character "M".
 */

/**
 * Object containing Roman numeral characters as keys and their corresponding integer values as values.
 * @type {RomanTransIntList}
 */
const romanTransIntList = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
}

const romanToInt = (s) => {
	let sum = 0

	for (let index = 0; index < s.length; index++) {
		const element = s[index]
		console.log(romanTransIntList[element], romanTransIntList[s[index + 1]])

		romanTransIntList[element] < romanTransIntList[s[index + 1]]
			? (sum -= romanTransIntList[element])
			: (sum += romanTransIntList[element])
	}

	return sum
}

console.log(romanToInt('XXIV'))
console.log(romanToInt('MCMXCIV'))
