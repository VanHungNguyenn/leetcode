const quickSort = (array) => {
	if (array.length <= 1) {
		return array
	}

	const pv = array[0]
	const left = []
	const right = []

	for (let i = 1; i < array.length; i++) {
		if (array[i] < pv) {
			left.push(array[i])
		} else {
			right.push(array[i])
		}
	}

	const sortedLeft = quickSort(left)
	const sortedRight = quickSort(right)

	return sortedLeft.concat(pv, sortedRight)
}

test = [21, 4, 1, 3, 9, 20, 25, 6, 21, 14]
console.log(quickSort(test))
