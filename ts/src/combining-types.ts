/* union type */
function combine(input1: string | number, input2: string | number) {
	return input1.toString() + input2.toString()
}

/* intersection type */
type typeA = { name: string }
type typeB = { age: number }

type typeAB = typeA & typeB

const ab: typeAB = {
	name: 'Van Hung Nguyen',
	age: 30,
}

/* type alias */
type Name = string
type Age = number
type User = { name: Name; age: Age }

const user: User = { name: 'Join', age: 30 }

/* keyof operator */
interface NewUser {
	name: string
	age: number
	location: string
}

type UserKeys = keyof NewUser
const key: UserKeys = 'name'

/**
 *  type guards / narrowing
 */

// instanceof
class Bird {
	fly() {
		console.log('Flying...')
	}

	layEggs() {
		console.log('Laying eggs...')
	}
}

const pet = new Bird()

if (pet instanceof Bird) {
	pet.fly()
} else {
	console.log('pet is not a bird')
}

// typeof

let value1: string | number = 'hello world'

if (typeof value1 === 'string') {
	console.log('value is a string')
} else {
	console.log('value is not a string')
}

// equality
function example(x: string | number, y: string | boolean) {
	if (x === y) {
		x.toUpperCase()
		y.toUpperCase()
	} else {
		console.log(x)
		console.log(y)
	}
}

example('should', 'should')

// truthiness

function getUsersOnlineMessage(numUsersOnline: number) {
	if (numUsersOnline) {
		return `There are ${numUsersOnline} users online`
	}

	return `Nobody's here!`
}

console.log(getUsersOnlineMessage(5))

// type predicates
function isString(value: unknown): value is string {
	return typeof value === 'string'
}

function example1(x: unknown) {
	if (isString(x)) {
		// We can now call any 'string' method on 'x'.
		x.toUpperCase()
	} else {
		console.log(x)
	}
}

example1('Hahaha')
