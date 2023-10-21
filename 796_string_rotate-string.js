/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

const rotateString = function (s, goal) {
	let temp = s
	let count = s.length
	while (count > 0) {
		temp = [...temp].pop() + temp.slice(0, s.length - 1)

		if (temp === goal) {
			return true
		}

		count--
	}

	return false
}

const rotateStrinOptimization = function (s, goal) {
	return s.length === goal.length && (s + s).includes(goal)
}

console.log(rotateString('abcde', 'cdeab'))
console.log(rotateString('abcde', 'abced'))
