/**
 * @param {character[]} s
 * @return {void}
 */

const reverseString = (s) => {
	return s.reverse()
}

const reverseStringOptimal = (s) => {
	let left = 0
	let right = s.length - 1

	while (left < right) {
		let temp = s[left]
		s[left] = s[right]
		s[right] = temp

		left++
		right--
	}

	console.log(s)
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']))
