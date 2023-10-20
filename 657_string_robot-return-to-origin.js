/**
 * @param {string} moves
 * @return {boolean}
 */

const judgeCircle = (moves) => {
	const charCount = []

	for (const move of moves) {
		charCount[move] = (charCount[move] || 0) + 1
	}

	return (
		(charCount['L'] || 0) === (charCount['R'] || 0) &&
		(charCount['D'] || 0) === (charCount['U'] || 0)
	)
}

const judgeCircleOptimization = (moves) => {
	let x = 0
	let y = 0

	for (const move of moves) {
		if (move === 'L') {
			x++
		} else if (move === 'R') {
			x--
		} else if (move === 'U') {
			y++
		} else if (move === 'D') {
			y--
		}
	}

	return x === 0 && y === 0
}

console.log(judgeCircle('UD'))
console.log(judgeCircle('LL'))
console.log(judgeCircle('DURDLDRRLL'))
