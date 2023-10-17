/**
 * @param {string} columnNumber
 * @return {string}
 */

const convertToTitle = (columnNumber) => {
	let result = ''

	while (columnNumber) {
		columnNumber--
		const newLetter = String.fromCharCode((columnNumber % 26) + 65)
		result = newLetter + result
		columnNumber = Math.floor(columnNumber / 26)
	}

	return result
}

console.log(convertToTitle(701))
