/**
 * @param {number} x
 * @return {boolean}
 */

const reverseString = (str) => {
	return str.split('').reverse().join('')
}

const isPalindrome = (x) => {
	const strX = x.toString()
	const strXReversed = reverseString(strX)

	return strXReversed === strX
}

console.log(isPalindrome(12321))
console.log(isPalindrome(1234567))
