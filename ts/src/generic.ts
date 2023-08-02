function identity<T>(arg: T): T {
	return arg
}

let output = identity<string>('Hello')

class GenericNumber<T> {
	zeroValue: T = {} as T
	add: (x: T, y: T) => T = (x: T, y: T) => {
		return {} as T
	}
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
	return x + y
}
