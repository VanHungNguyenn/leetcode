function SoftwareDeveloper(name) {
	console.log(this)
	this.favoriteLanguage = 'Js'
	this.name = name
	this.introduce = function () {
		console.log('My name is ' + this.name)
	}
}

let developer = new SoftwareDeveloper('Join')

console.log(developer)
developer.introduce()

const dog = {
	bark: function () {
		console.log('Woof!')
	},

	backTwice: function () {
		this.bark()
		this.bark()
		console.log(this)
	},
}

dog.bark()
console.log(this)
dog.backTwice()

function multiply(n1, n2) {
	return n1 * n2
}

multiply(3, 4)
multiply.call(window, 3, 4)

const mockingbird = {
	title: 'To kill a Mockingbird',
	describe: function () {
		console.log(`${this.title} is a classic novel`)
	},
}

mockingbird.describe()

const pride = {
	title: 'Pride and Prejudice',
}

mockingbird.describe.call(pride)
