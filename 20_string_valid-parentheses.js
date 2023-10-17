/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = (s) => {
	if (!s.length) return true

	if (s.length % 2 === 1) return false

	for (let i = 0; i < s.length; i++) {
		const element = s[i]
	}
}

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
console.log(isValid('({}[])'))
console.log(isValid('(]{}[)'))
