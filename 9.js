/**
 * @param {number} x
 * @return {boolean}
 */

const reverseString = (str) => {
	return str.split('').reverse().join('')
}

const isPalindrome = (x) => {
	const strX = x.toString()
	console.log(strX)
	const strXReversed = reverseString(strX)
	console.log(strXReversed)

	if (strXReversed === strX) {
		return true
	}

	return false
}

console.log(isPalindrome(12321))
console.log(isPalindrome(1234567))
