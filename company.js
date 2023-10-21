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
