function findMaxConsecutiveOnes(nums: number[]): number {
	let max = 0
	let count = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 1) {
			count++
		} else {
			count = 0
		}

		if (count > max) {
			max = count
		}
	}

	return max
}

function findMaxConsecutiveOnesOptimize(nums: number[]): number {
	let max = 0,
		count = 0
	for (const num of nums) {
		count = num === 1 ? count + 1 : 0
		max = Math.max(max, count)
	}
	return max
}
