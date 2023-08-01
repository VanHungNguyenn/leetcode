/**
 * primitive types
 * ----------------
 * boolean, number, string, void, undefined, null
 */
let isTrue: boolean = true
let isFalse: boolean = false

let intValue: number = 40
let floatValue: number = 3.14

let fullName: string = 'John Smith'

function noop() {
	return
}

/**
 * object types
 * ----------------
 * interface, class, enum, arrays, tuples
 */

class Car {
	make: string
	model: string
	year: number

	constructor(make: string, model: string, year: number) {
		this.make = make
		this.model = model
		this.year = year
	}

	drive(): void {
		console.log(`Driving my ${this.year} ${this.make} ${this.model}`)
	}
}

enum Direction {
	Up = 1,
	Down,
	Left,
	Right,
}

console.log(Direction.Left)

const listNumber: number[] = [1, 2, 3, 4, 5]

for (let index = 0; index < listNumber.length; index++) {
	const element = listNumber[index]

	console.log(element)
}

type StringNumberPair = [string, number]

const pair: StringNumberPair = ['hello', 32]

console.log(pair[0])
console.log(pair[1])

pair[0] = 'hahaha'
console.log(pair)

/**
 * Other types
 * --------------
 * any, object, unknown, never
 */

let variable: any = 'Hello'
variable = 10
variable = true

let obj: object = { name: 'Join', age: 30 }

function printCoord(pt: { x: number; y: number }) {
	console.log(`The coordinate's x value is ${pt.x}`)
	console.log(`The coordinate's y value is ${pt.y}`)
}

printCoord({ x: 3, y: 7 })

let value: unknown = 'Hello'
if (typeof value === 'string') {
	console.log(value.toUpperCase())
}

function throwError(): never {
	throw new Error('Error parsing')
}

function infiniteLoop(): never {
	while (true) {
		console.log('Looping...')
	}
}

/**
 * Assetions type
 * --------------
 * as const, as [type], as any
 */
const colors = ['red', 'green', 'blue'] as const
// colors is now of type readonly
let num: any = 42
let str = num as string
// string is now of type string
let anyValue: any = 42
anyValue = 'hello world'
anyValue = true

/**
 * type compatibiltity
 */
interface Point {
	x: number
	y: number
}

let p1: Point = { x: 10, y: 20 }
let p2: { x: number; y: number } = p1
console.log(p2.x)
