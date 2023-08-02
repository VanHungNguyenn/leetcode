function classDecorator(constructor: Function) {
	console.log('Class decorator called.')
}

function methodDecorator(
	target: any,
	propertyKey: string,
	descriptor: PropertyDescriptor
) {
	console.log('Method decorator called')
}

// @classDecorator
class MyClass {
	// @methodDecorator
	myMethod() {
		console.log('Executing myMethod.')
	}
}

const myObj = new MyClass()
myObj.myMethod()
