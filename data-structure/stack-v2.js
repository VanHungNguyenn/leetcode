class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = null
	}

	append(node) {
		let current = this.head

		if (this.head) {
			while (current.next) {
				current = current.next
			}

			current.next = node
		} else {
			this.head = node
		}
	}

	insertFirst(node) {
		if (this.head) {
			let current = this.head
			this.head = node
			this.head.next = current
		} else {
			this.head = node
		}
	}

	deleteFirst() {
		if (this.head) {
			this.head = this.head.next
		}
	}
}

const e1 = new Node(10)
const e2 = new Node(20)
const e3 = new Node(30)

const linkedList = new LinkedList()
linkedList.append(e1)
linkedList.append(e2)
console.log(linkedList)

linkedList.append(e3)
console.log(linkedList)

const e4 = new Node(40)
linkedList.insertFirst(e4)
console.log(linkedList)

linkedList.deleteFirst()
console.log(linkedList)

class Stack {
	constructor() {
		this.linkedList = new LinkedList()
	}

	push(node) {
		this.linkedList.insertFirst(node)
	}

	pop(node) {
		this.linkedList.deleteFirst()
	}
}

const stack = new Stack()
s1 = new Node(10)
s2 = new Node(20)
s3 = new Node(30)
stack.push(s1)
stack.push(s2)
stack.push(s3)
console.log(stack)

stack.pop()

console.log(stack)
