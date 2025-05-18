function findNumbers(nums: number[]): number {
	let count = 0

	for (const num of nums) {
		const str = num.toString()

		if (str.length % 2 === 0) {
			count++
		}
	}

	return count
}

function findNumbersOptimize(nums: number[]): number {
	let count = 0

	for (const num of nums) {
		let digits = 0,
			n = num

		while (n > 0) {
			digits++
			n = Math.floor(n / 10)
		}

		if (digits % 2 === 0) count++
	}

	return count
}
