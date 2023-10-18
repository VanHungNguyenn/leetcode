/**
 * @param {string} columnTitle
 * @return {number}
 */

const titleToNumber = (columnTitle) => {
	let result = 0
	let a = 0

	for (let i = columnTitle.length - 1; i >= 0; i--) {
		const number = columnTitle[i].charCodeAt(0) - 64

		result += 26 ** a * number

		a++
	}

	return result
}

const titleToNumberOptimal = (columnTitle) => {
	let result = 0

	for (const element of columnTitle) {
		const number = element.charCodeAt(0) - 64
		result = result * 26 + number
	}

	return result
}

console.log(titleToNumberOptimal('AB'))
console.log(titleToNumberOptimal('ZY'))
