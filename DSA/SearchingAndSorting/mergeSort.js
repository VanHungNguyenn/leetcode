const merge = (left, right) => {
	console.log(left, right)

	let mergeArray = []
	let leftIndex = 0
	let rightIndex = 0

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] <= right[rightIndex]) {
			mergeArray.push(left[leftIndex])
			leftIndex++
		} else {
			mergeArray.push(right[rightIndex])
			rightIndex++
		}
	}

	while (leftIndex < left.length) {
		mergeArray.push(left[leftIndex])
		leftIndex++
	}

	while (rightIndex < right.length) {
		mergeArray.push(right[rightIndex])
		rightIndex++
	}

	return mergeArray
}

const mergeSort = (array) => {
	if (array.length <= 1) {
		return array
	}

	const middle = Math.floor(array.length / 2)
	const left = array.slice(0, middle)
	const right = array.slice(middle)

	const sortedLeft = mergeSort(left)
	const sortedRight = mergeSort(right)

	return merge(sortedLeft, sortedRight)
}

const array = [5, 2, 9, 1, 7, 6, 3]
const sortedArray = mergeSort(array)
console.log(sortedArray)
