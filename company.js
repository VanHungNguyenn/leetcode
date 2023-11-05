function fetchData(callback) {
	// Giả sử việc lấy dữ liệu từ một API mất 2 giây
	setTimeout(() => {
		let data = 'Here is your data!'
		callback(data)
	}, 2000)
}

fetchData((result) => {
	console.log(result) // "Here is your data!" sẽ được in ra sau 2 giây
})

console.log('hahaha')

// create array have 5 numbers and map it x2, return result
const numbers = [1, 2, 3, 4, 5]

const result = numbers.map((number) => number * 2)

console.log(result)

console.log('abcde'.slice(0, 1) + 'abcde'.slice(3))
