/**
 * @param {string}
 * @return {number}
 */

const romanToInt = (s) => {
	let sum = 0

	for (let i = 0; i < s.length - 1; i++) {
		console.log(s[i], s[i + 1])

		romanTransIntList[s[i]] < romanTransIntList[s[i + 1]]
			? (sum -= romanTransIntList[s[i]])
			: (sum += romanTransIntList[s[i]])
	}

	return sum + romanTransIntList[s[s.length - 1]]
}

const romanTransIntList = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
}

console.log(romanToInt('XXIV'))
