# name = input("What is your name? ")
# print(f"Good morning {name}!")

# data types
# strings, integers, floats, booleans
# floats suck XD
# Computers don't understand rounding, they don't know when to round. So be careful with floats. It might be better to use strings instead.

# tuple
# multiple items in a single list that cannot be modified
coordinates = (121212121, 12121212)

# list or array
# square brackets always
# Can contain any type of data and lots of that data
# Computers start at zero just 'cause. So the first index is 0, not 1
listOfStudents = ["joe", "ethan"]

# loops
# goes through each item of the list
# there is a variable after for
# that gets assigned to each value from start to finish
# for loops have a definite stop point. It goes until the list ends
# for student in listOfStudents:
#     print(student)

# # while
# # Be careful of infinite loops!
# counter = 0
# while (counter < 4):
#     print("Joe is tall")
#     counter += 1

listOfAddresses = ["123 Main st", "123 deckland", "345 House"]
counter = 0
while (counter < len(listOfAddresses)):
    print(listOfAddresses[counter])
    counter += 1
