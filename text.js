function generateRandomCustomer() {
	const specificNames = [
		'Huy',
		'Long',
		'Nam',
		'Trung',
		'Nguyen',
		'Vy',
		'Hung',
		'Ngoc',
	]

	const professions = [
		'developer',
		'doctor',
		'teacher',
		'student',
		'engineer',
	]

	const randomNameIndex = Math.floor(Math.random() * specificNames.length)
	const randomName = specificNames[randomNameIndex]
	const randomAge = Math.floor(Math.random() * 50) + 20
	const randomAddress = 'Address ' + Math.floor(Math.random() * 1000)
	const randomEmail =
		randomName.toLowerCase() +
		Math.floor(Math.random() * 1000) +
		'@gmail.com'
	const randomPhoneNumber = '1234567890'
	const randomProfessionIndex = Math.floor(Math.random() * professions.length)
	const randomProfession = professions[randomProfessionIndex]

	return {
		name: randomName,
		age: randomAge,
		address: randomAddress,
		email: randomEmail,
		phoneNumber: randomPhoneNumber,
		profession: randomProfession,
	}
}

const randomCustomers = []

for (let i = 0; i < 5000000; i++) {
	randomCustomers.push(generateRandomCustomer())
}

const batchSize = 10000
for (let i = 0; i < randomCustomers.length; i += batchSize) {
	const batch = randomCustomers.slice(i, i + batchSize)
	db.customers.insertMany(batch)
}
