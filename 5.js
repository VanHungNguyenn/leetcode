/**
 * @param {string} s
 * @return {string}
 */

const longestPalindrome = (s) => {
	let result = ''

	for (let i = 0; i < s.length; i++) {
		let left = i
		let right = i

		if (left > 0 && right < s.length) {
			left--
			right++

			if (left !== right) {
				right - left > result.length ? result : result.splice()
			}
		}
	}
}
