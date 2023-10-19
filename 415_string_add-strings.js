/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

const addStrings = (num1, num2) => {
	let result = ''
	let carry = 0
	let i = num1.length - 1
	let j = num2.length - 1

	while (i >= 0 || j >= 0 || carry) {
		let sum = carry

		if (i >= 0) sum += Number(num1[i--])
		if (j >= 0) sum += Number(num2[j--])

		carry = Math.floor(sum / 10)
		result = (sum % 10) + result
	}

	return result
}

console.log(addStrings('11', '123'))
console.log(addStrings('456', '77'))
