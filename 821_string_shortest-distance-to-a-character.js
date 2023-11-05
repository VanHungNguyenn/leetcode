/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */

const shortestToChar = (s, c) => {
	let res = []
	let temp = -Infinity

	for (let i = 0; i < s.length; i++) {
		if (s[i] === c) {
			res.push(0)
			temp = i
		} else {
			res.push(i - temp)
		}
	}

	temp = Infinity

	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] === c) {
			temp = i
		} else {
			res[i] = Math.min(res[i], temp - i)
		}
	}

	return res
}

const shortestToCharOptimization = function (s, c) {
	let n = s.length
	let res = new Array(n).fill(Infinity)
	let prev = -n

	for (let i = 0; i < n; i++) {
		if (s[i] === c) prev = i
		res[i] = i - prev
	}

	prev = 2 * n
	for (let i = n - 1; i >= 0; i--) {
		if (s[i] === c) prev = i
		res[i] = Math.min(res[i], prev - i)
	}

	return res
}

console.log(shortestToCharOptimization('loveleetcode', 'e'))
// console.log(shortestToChar('aaab', 'b'))
