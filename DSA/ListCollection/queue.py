class Queue:
    def __init__(self, head=None):
        self.storage = [head]

    def enqueue(self, new_element):
        self.storage.append(new_element)

    def peek(self):
        return self.storage[0]

    def dequeue(self):
        if self.storage:
            return self.storage.pop(0)
        else:
            return None


q = Queue(1)
q.enqueue(2)
q.enqueue(3)

print(q.peek())
q.enqueue(4)
print(q.dequeue())
