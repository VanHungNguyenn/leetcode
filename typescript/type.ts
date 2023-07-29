let age: number = 29
age = 20

const student: {
	name: string
	age: number
	school: string
	hobbies: string[]
	height: number
} = {
	name: 'Van Hung',
	age: 30,
	school: 'Cao Thang',
	hobbies: ['Badminton', 'Coding'],
	height: 30,
}

const hobbies: string[] = ['Badminton', 'Coding', 'Hahah']

let age2: number | string = '30'
age2 = 20

let myName: unknown
myName = 'frontend developer'
if (typeof myName === 'string') {
	console.log(myName.includes('dev'))
}

function sayHi(): void {
	console.log('Hello...')
}

let something: void = undefined

const student1: [string, number] = ['evondev', 12]
console.log(student1[1])
student1.push(2)
console.log(student1)

const students: [number, string][] = [
	[1, 'a'],
	[2, 'b'],
	[3, 'c'],
]

enum Time {
	SECOND = 1000,
	MINUTE = 1000 * 60,
	HOUR = 1000 * 60 * 60,
}

const oneHour: Time = Time.HOUR

type Role = 'Admin' | 'User' | 'Guest'
const role1: Role = 'Admin'
const role2: Role = 'User'
