class Queue {
	constructor() {
		this.items = []
	}

	enqueue(element) {
		this.items.push(element)
	}

	dequeue() {
		if (this.isEmpty()) {
			return 'Queue is empty'
		}

		return this.items.shift()
	}

	isEmpty() {
		return this.items.length === 0
	}

	size() {
		return this.items.length
	}

	front() {
		if (this.isEmpty()) {
			return 'Queue is empty'
		}

		return this.items[0]
	}
}

const queue = new Queue()

queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)

console.log(queue)

queue.dequeue()

console.log(queue)
