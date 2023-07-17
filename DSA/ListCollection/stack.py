class Element:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self, head=None):
        self.head = head

    def append(self, new_element):
        current = self.head

        if self.head:
            while current.next:
                current = current.next
            current.next = new_element
        else:
            self.head = new_element

    def insert_first(self, new_element):
        if self.head:
            current = self.head
            self.head = new_element
            self.head.next = current
        else:
            self.head = new_element

    def delete_first(self):
        if self.head:
            self.head = self.head.next


class Stack:
    def __init__(self, top=None):
        self.ll = LinkedList(top)

    def push(self, new_element):
        self.ll.insert_first(new_element)

    def pop(self):
        if self.ll.head:
            popped_element = self.ll.head
            self.ll.delete_first()
            return popped_element
        else:
            return None


e1 = Element(1)
e2 = Element(2)
e3 = Element(3)
e4 = Element(4)

stack = Stack(e1)
stack.push(e2)
stack.push(e3)

print(stack.pop().value)
print(stack.pop().value)
print(stack.pop().value)
stack.push(e4)
print(stack.pop().value)
