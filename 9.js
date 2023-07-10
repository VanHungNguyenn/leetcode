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

	if (strXReversed === strX) {
		return true
	}

	return false
}

console.log(isPalindrome(12321))
