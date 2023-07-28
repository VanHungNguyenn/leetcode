class Person {
	constructor(name, age = null) {
		this.name = name
		this.age = age
	}

	greet() {
		if (this.age) {
			console.log(
				`Hello, my name is ${this.name} and I am ${this.age} years old.`
			)
		} else {
			console.log(`Hello, my name is ${this.name}.`)
		}
	}
}

const person = new Person('Dac')
const person2 = new Person('Tuan', 20)
person.greet()
person2.greet()

class Employee extends Person {
	constructor(name, age, position) {
		super(name, age)
		this.position = position
	}

	showPosition() {
		console.log(`My position is ${this.position}.`)
	}
}

const john = new Employee('John', 30, 'developer')
john.greet()
john.showPosition()

class Animal {
	constructor(name) {
		this.name = name
	}

	speak() {
		console.log(`${this.name} makes a noise.`)
	}
}

class Dog extends Animal {
	speak() {
		console.log(`${this.name} barks`)
	}
}

const elephant = new Animal('Lala')
elephant.speak()
const lulu = new Dog('Lulu')
lulu.speak()

class Circle {
	constructor(radius) {
		this._radius = radius
	}
}

const a = new Circle(1)
console.log(a._radius)

class Helper {
	static logTwice(message) {
		console.log(message + this.name)
		console.log(message + this.name)
	}
}

Helper.logTwice('This is message')
