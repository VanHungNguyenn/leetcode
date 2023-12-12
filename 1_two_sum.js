const twoSum = (nums, target) => {
	const map = new Map()

	for (let i = 0; i < nums.length; i++) {
		const remainingNumber = target - nums[i]

		if (map.has(remainingNumber)) {
			return [map.get(remainingNumber), i]
		}

		map.set(nums[i], i)
	}
}

console.log(twoSum([2, 7, 11, 15], 9))
