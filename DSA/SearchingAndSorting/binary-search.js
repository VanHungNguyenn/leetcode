const binarySearch = (inputArray, value) => {
	let low = 0
	let high = inputArray.length - 1

	while (low <= high) {
		let mid = Math.floor((low + high) / 2)

		if (inputArray[mid] === value) {
			return mid
		} else if (inputArray[mid] < value) {
			low = mid + 1
		} else {
			high = mid - 1
		}
	}

	return -1
}

const testList = [1, 3, 9, 11, 15, 19, 29]
const value1 = 25
const value2 = 15
console.log(binarySearch(testList, value1))
console.log(binarySearch(testList, value2))
