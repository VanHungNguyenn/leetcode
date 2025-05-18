function sortedSquares(nums: number[]): number[] {
	const newArr = nums.map((num) => num * num)
	console.log(newArr.sort((a, b) => a - b))
	return newArr.sort((a, b) => a - b)
}

sortedSquares([-4, -1, 0, 3, 10])

function sortedSquaresOptimize(nums: number[]): number[] {
	const n = nums.length
	let left = 0,
		right = n - 1

	const result = Array(n)
	let pos = n - 1

	while (left <= right) {
		const leftSq = nums[left] * nums[left]
		const rightSq = nums[right] * nums[right]

		if (leftSq > rightSq) {
			result[pos--] = leftSq
			left++
		} else {
			result[pos--] = rightSq
			right--
		}
	}

	return result
}
