/**
 * @param {character[][]} board
 * @return {boolean}
 */

const isValidSudoku = (board) => {
	const rows = new Array(9).fill(null).map(() => new Set())
	const columns = new Array(9).fill(null).map(() => new Set())
	const boxes = new Array(9).fill(null).map(() => new Set())

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			const num = board[i][j]

			if (num !== '.') {
				let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)

				if (
					rows[i].has(num) ||
					columns[j].has(num) ||
					boxes[boxIndex].has(num)
				) {
					return false
				}

				rows[i].add(num)
				columns[j].add(num)
				boxes[boxIndex].add(num)
			}
		}
	}

	return true
}

console.log(
	isValidSudoku([
		['5', '3', '.', '.', '7', '.', '.', '.', '.'],
		['6', '.', '.', '1', '9', '5', '.', '.', '.'],
		['.', '9', '8', '.', '.', '.', '.', '6', '.'],
		['8', '.', '.', '.', '6', '.', '.', '.', '3'],
		['4', '.', '.', '8', '.', '3', '.', '.', '1'],
		['7', '.', '.', '.', '2', '.', '.', '.', '6'],
		['.', '6', '.', '.', '.', '.', '2', '8', '.'],
		['.', '.', '.', '4', '1', '9', '.', '.', '5'],
		['.', '.', '.', '.', '8', '.', '.', '7', '9'],
	])
)

console.log(
	isValidSudoku([
		['8', '3', '.', '.', '7', '.', '.', '.', '.'],
		['6', '.', '.', '1', '9', '5', '.', '.', '.'],
		['.', '9', '8', '.', '.', '.', '.', '6', '.'],
		['8', '.', '.', '.', '6', '.', '.', '.', '3'],
		['4', '.', '.', '8', '.', '3', '.', '.', '1'],
		['7', '.', '.', '.', '2', '.', '.', '.', '6'],
		['.', '6', '.', '.', '.', '.', '2', '8', '.'],
		['.', '.', '.', '4', '1', '9', '.', '.', '5'],
		['.', '.', '.', '.', '8', '.', '.', '7', '9'],
	])
)
