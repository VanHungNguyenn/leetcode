/* create objects */
const myObject = {}
const myObject2 = new Object()

/* object add property */
const cat = {
	age: 2,
	name: 'John',
	meow: function () {
		console.log('Meow!')
	},
	greet: function (name) {
		console.log(`Hello ${name}`)
	},
}

const printer = {}

printer.on = true
printer.mode = 'black and write'
printer['remainingSheets'] = 168
printer.print = function () {
	console.log('The printer is printing!')
}

/* function and method */
const developer = {
	name: 'John',
}

developer.sayHello = function () {
	console.log('Hi there!')
}

const triangle = {
	type: 'scalene',
	identify: function () {
		console.log(`This is a ${this.name} triangle.`)
	},
}

console.log(Object.values(triangle))
