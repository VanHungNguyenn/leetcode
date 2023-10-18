/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = (s) => {
	if (!s.length) return true

	if (s.length % 2 === 1) return false
}

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
console.log(isValid('({}[])'))
console.log(isValid('(]{}[)'))
