class Classy(object):
     def __init__(self):
        self.items = []
        self.classiness = 0
     def getClassiness(self):
        return self.classiness
     def addItem(self, item):
        if(item == 'tophat'):
           self.items.append(item)
           self.classiness += 2
        elif (item == 'bowtie'):
           self.items.append(item)
           self.classiness += 4
        elif (item == 'monocle'):
           self.items.append(item)
           self.classiness += 5
        else:
           self.items.append(item)
           self.classiness += 0
      
           
# Test cases
me = Classy()

# Should be 0
print(me.getClassiness())

me.addItem("tophat")
# Should be 2
print(me.getClassiness())

me.addItem("bowtie")
me.addItem("jacket")
me.addItem("monocle")
# Should be 11
print(me.getClassiness())

me.addItem("bowtie")
# Should be 15
print(me.getClassiness())

def show_excitement():
   string = ""
   for x in range(5):
      string += "I am super excited for this course! "
      
   return string
   
print(show_excitement())

print('Hello World!')



