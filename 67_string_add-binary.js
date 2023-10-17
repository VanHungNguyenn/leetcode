/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

const addBinary = (a, b) => {
	let result = ''
	let carry = 0

	let m = a.length - 1
	let n = b.length - 1

	while (m >= 0 || n >= 0) {
		let sum = carry

		if (m >= 0) sum += parseInt(a[m], 10)
		if (n >= 0) sum += parseInt(b[n], 10)

		result = (sum % 2) + result

		carry = Math.floor(sum / 2)

		m--
		n--
	}

	if (carry) result = carry + result

	return result
}

console.log(addBinary('11', '1'))
console.log(addBinary('1010', '1011'))
