/**
 * @param {string[]} strs
 * @return {number}
 */

const minDeletionSize = (strs) => {
	let minSize = 0

	for (let i = 0; i < strs[0].length; i++) {
		console.log(`i: ${i}`)
		let index = 0

		while (index < strs.length - 1) {
			console.log(strs[index][i], strs[index + 1][i])
			if (strs[index][i] > strs[index + 1][i]) {
				minSize++
				break
			}

			index++
			console.log(index)
		}
	}

	return minSize
}

// console.log(minDeletionSize(['cba', 'daf', 'ghi']))
// console.log(minDeletionSize(['zyx', 'wvu', 'tsr']))
console.log(minDeletionSize(['cekjd', 'ihpzr', 'zvzzx']))
