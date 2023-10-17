/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLastWord = (s) => {
	return s.trim().split(' ').pop().length
}

const lengthOfLastWordVersion2 = (s) => {
	let length = 0
	let i = s.length - 1

	while (i >= 0 && s[i] === ' ') {
		i--
	}

	while (i >= 0 && s[i] !== ' ') {
		length++
		i--
	}

	return length
}

console.log(lengthOfLastWordVersion2('Hello World'))
console.log(lengthOfLastWordVersion2('   fly me   to quote   '))
