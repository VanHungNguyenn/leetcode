/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = (nums) => {
	const uniqueArray = [...new Set(nums)]

	console.log(uniqueArray)

	for (let i = 0; i < uniqueArray.length; i++) {
		nums[i] = uniqueArray[i]
	}

	return uniqueArray.length
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 3, 3, 4, 5]))
