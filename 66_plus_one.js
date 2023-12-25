/**
 * @param {number[]} digits
 * @return {number[]}
 */

const plusOne = (digits) => {
	let carry = 1
	let i = digits.length - 1

	while (carry && i >= 0) {
		let sum = digits[i] + carry
		digits[i] = sum % 10
		carry = Math.floor(sum / 10)
		i--
	}

	if (carry) digits.unshift(carry)

	return digits
}

console.log(plusOne([1, 2, 3])) // [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])) // [4, 3, 2, 2]
console.log(plusOne([9])) // [1, 0]
