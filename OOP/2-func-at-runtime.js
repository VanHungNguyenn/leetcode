function greet() {
	console.log('Functions are cool!')
}

const myName = 'Andrew'

function introduceMyself() {
	const you = 'student'

	function introduce() {
		console.log(`Hello, ${you}. I'm ${myName}`)
	}

	return introduce()
}

introduceMyself()
