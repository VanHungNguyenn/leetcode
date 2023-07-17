class Node {
	constructor(data) {
		this.data = data
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = null
	}

	add(data) {
		const newNode = new Node(data)

		if (this.head === null) {
			this.head = newNode
		} else {
			let current = this.head

			while (current.next) {
				current = current.next
			}

			current.next = newNode
		}
	}

	remove(data) {
		if (!this.head) {
			return
		}

		let current = this.head
		let prev = null

		if (this.head.data === data) {
			this.head = this.head.next
		} else {
			while (current && current.data !== data) {
				prev = current
				current = current.next
			}

			if (current) {
				prev.next = current.next
			}
		}
	}
}

const linkedList = new LinkedList()
linkedList.add(10)
linkedList.add(20)
linkedList.add(30)
console.log(linkedList)
linkedList.remove(20)
console.log(linkedList)
