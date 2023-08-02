class Animal {
	name: string

	constructor(name: string) {
		this.name = name
	}

	makeSound(): void {
		console.log(`${this.name} is making a sound`)
	}
}

const dog = new Animal('Dog')
dog.makeSound()

class Example {
	constructor(private _name: string, public age: number) {
		this._name = _name
		this.age = age
	}

	printName(): void {
		console.log(`${this._name}`)
	}
}

const ex = new Example('Example', 20)
console.log(ex.age)
ex.printName()

// constructor overloading
class Point {
	constructor(x: number, y: string)
	constructor(s: string)
	constructor(xs: any, y?: any) {}
}

// abstract classes
abstract class Animal1 {
	abstract makeSound(): void

	move(): void {
		console.log('Moving...')
	}
}

class Dog extends Animal1 {
	makeSound(): void {
		console.log('Bark..')
	}
}

const d = new Dog()
d.makeSound()

// inheritance and Polymorphism
