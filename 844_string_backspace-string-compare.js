/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const returnNewString = function (s) {
	let result = ''
	let temp = 0

	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] !== '#' && temp > 0) {
			temp--
		} else if (s[i] !== '#') {
			result = s[i] + result
		} else {
			temp++
		}
	}

	return result
}

const backspaceCompare = (s, t) => {
	return returnNewString(s) === returnNewString(t)
}

const returnNewStringOptimization = (str) => {
	let stack = []

	for (const char of str) {
		if (char !== '#') {
			stack.push(char)
		} else if (stack.length !== 0) {
			stack.pop()
		}
	}

	return stack.join('')
}

console.log(backspaceCompare('ab#c', 'ad#c'))
console.log(backspaceCompare('ab##', 'ad##'))
console.log(backspaceCompare('a#c', 'b'))
