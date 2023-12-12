/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

const convert = (s, numRows) => {
	if (numRows === 1) return s

	const resultArray = new Array(numRows).fill('')

	let key = 0
	let isIncrease = true

	for (let i = 0; i < s.length; i++) {
		resultArray[key] = resultArray[key] + s[i]

		key = isIncrease ? key + 1 : key - 1

		if (key === numRows - 1) {
			isIncrease = false
		} else if (key === 0) {
			isIncrease = true
		}
	}

	return resultArray.join('')
}

console.log(convert('PAYPALISHIRING', 3))
