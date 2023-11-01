/**
 * @param {string} s
 * @return {string}
 */

const removeDuplicates = (s) => {
	const stack = []

	for (const char of s) {
		if (stack && stack.slice(-1)[0] === char) {
			stack.pop()
		} else {
			stack.push(char)
		}
	}

	return stack.join('')
}

console.log(removeDuplicates('abbaca'))
console.log(removeDuplicates('azxxzy'))
