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

    def get_position(self, position):
        current = self.head
        counter = 1

        if position < 1:
            return None

        while current and counter <= position:
            if counter == position:
                return current

            current = current.next
            counter += 1

        return None

    def insert(self, new_element, position):
        if position < 1:
            return

        if position == 1:
            new_element.next = self.head
            self.head = new_element
            return

        current = self.head
        counter = 1

        while current and counter < position - 1:
            current = current.next
            counter += 1

        if current:
            new_element.next = current.next
            current.next = new_element

    def delete(self, value):
        current = self.head
        prev = None

        while current:
            if current.value == value:
                if prev:
                    prev.next = current.next
                else:
                    self.head = current.next

                return

            prev = current
            current = current.next


e1 = Element(10)
e2 = Element(20)
e3 = Element(30)
e4 = Element(40)

linkedList = LinkedList(e1)
linkedList.append(e2)
linkedList.append(e3)
print(linkedList.head.next.next.value)
print(linkedList.get_position(3).value)

linkedList.insert(e4, 3)
print(linkedList.get_position(3).value)

linkedList.delete(10)
print(linkedList.get_position(1).value)
print(linkedList.get_position(2).value)
print(linkedList.get_position(3).value)
