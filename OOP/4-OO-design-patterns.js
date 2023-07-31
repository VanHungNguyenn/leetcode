const duck = {
	hasBill: true,
}
const beaver = {
	hasTail: true,
}
const otter = {
	hasFur: true,
	feet: 'webbed',
}

const platypus = Object.assign(duck, beaver, otter)
console.log(platypus)
console.log(duck)
console.log(platypus === duck)

class MyClass {
	constructor() {
		this._privateProp = 42
	}
}

const myObj = new MyClass()
console.log(myObj._privateProp)

function myCounter() {
	let count = 0

	return function () {
		count = count + 1
		return count
	}
}

let counter = myCounter()
console.log(counter.count)
