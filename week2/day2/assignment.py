# Create a new file called "assignment.py" in your week2 day 2 folder

# 1. Write a function called "nameFunction" have it print out your name. invoke the function
def nameFunction():
    print("Jaye")


nameFunction()

# 2. Define variable named Joe that is the string Joe
joe = "Joe"

# 3 Reinitialize Joe so that it is now the integer 4
joe = 4

# 4 Change Joe into a float
joe = 4.0

# 5. Create a list named students that includes 5 people from this class
students = ["Meg", "Jessika", "Rokhaya", "Vinny", "Peter"]
# 5a print the first item from the list(bonus for more than one way)
print(students[0])
print(students[-5])
# print(students.pop(0))   commented out so it doesn't change the list
# 5b print the last item from the list(bonus for more than one way)
print(students[4])
print(students[-1])
# print(students.pop(4))   commented out so it doesn't change the list
# 5c How do I get the third item from the list?
print(students[2])
# 5d print the entire list not in brackets [student1, student2, etc...]
for student in students:
    print(student)
# 5e add "is cool" to the end of each name
for student in students:
    print(student + " is cool")
# 5f if the students name is your name add "IT ME!!" to the end
for student in students:
    print(student + " is cool")
if "Jaye" in students:
    print("Jaye IT ME!!")
else:
    print("I guess I'm not cool.")
# 5g if you are not in the list print "I guess I'm not cool"
for student in students:
    print(student + " is cool")
if "Jaye" in students:
    print("Jaye IT ME!!")
else:
    print("I guess I'm not cool.")
# 5h list some methods to remove things from a list
# Remove Vinny
students.pop(3)
students.remove("Vinny")

# 6 Create a dictionary with keys "Digital Crafts" ,"Instructor", "TA" and values "Bootcamp" ,"Joe" ,"Ethan"
webDev = {"Digital Crafts": "Bootcamp", "Instructor": "Joe", "TA": "Ethan"}
# 6a return the value of "Digital Crafts"
print(webDev["Digital Crafts"])


# 7 Write a class named Cars with attributes make,model,year, and type(sedan,truck,crossover, sportscar, etc....)
class Cars:
    def __init__(self, make, model, year, type):
        self.make = make
        self.model = model
        self.year = year
        self.type = type

    def makeAndModel(self):
        print(f"make: {self.make}   model: {self.model}")

    def honkHorn(self):
        print("Beep Beep")


# 7a Instantiate 3 new Cars
dadsCar = Cars("Totota", "Prius", "2015", "Hatchback")
momsCar = Cars("Honda", "Civic", "2013", "Sedan")
huntersCar = Cars("Volkswagen", "Golf", "2010", "Hatchback")
# 7b Add a method that allows you to see the make and model of a car in your terminal
dadsCar.makeAndModel()
# 7c Use the above method on the second car
momsCar.makeAndModel()
# 7d Add a method that is called "honkHorn" that prints "Beep Beep"
huntersCar.honkHorn()
