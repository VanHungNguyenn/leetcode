/**
 * @param {string} s
 * @return {boolean}
 */

const isPalidrome = (s) => {
	const newString = removeNonAlphanumeric(s).toLowerCase()

	if (newString === '') return true

	const length = newString.length

	for (let i = 0; i < length; i++) {
		if (newString[i] !== newString[length - 1 - i]) {
			return false
		}
	}

	return true
}

const removeNonAlphanumeric = (s) => {
	return s.replace(/[^a-zA-Z0-9]/g, '')
}

console.log(isPalidrome('A man, a plan, a canal: Panama'))
