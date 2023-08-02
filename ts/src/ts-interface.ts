// extends interfaces
interface Shape {
	width: number
	height: number
}

interface Square extends Shape {
	sideLength: number
}

let square: Square = {
	width: 10,
	height: 10,
	sideLength: 10,
}

interface Person {
	firstName: string
	lastName: string
	age?: number

	getFullName(): string
}

// Hybrid Types
type SringOrNumber = string | number

type Education = {
	degree: string
	school: string
	year: number
}

type User2 = {
	name: string
	age: number
	email: string
	education: Education
}
