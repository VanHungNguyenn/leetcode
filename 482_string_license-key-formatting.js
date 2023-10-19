/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

const licenseKeyFormatting = (s, k) => {
	let result = ''

	let len = s.length - 1
	let count = k

	for (let i = len; i >= 0; i--) {
		if (count === 0) {
			count = k
			result = '-' + result
		}

		if (s[i] !== '-') {
			result = s[i].toUpperCase() + result
			count--
		}
	}

	return result[0] === '-' ? result.slice(1) : result
}

const licenseKeyFormattingOptimization = (s, k) => {
	const clearStr = s.replace('-', '').toUpperCase()

	const len = clearStr.length

	let firstGroupLen = len % k || k

	let result = clearStr.slice(0, firstGroupLen)

	for (let i = firstGroupLen; i < len; i += k) {
		result += '-' + clearStr.slice(i, i + k)
	}

	return result
}

console.log(licenseKeyFormatting('5F3Z-2e-9-w', 4))
console.log(licenseKeyFormatting('2-5g-3-J', 2))
