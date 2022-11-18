# print("Hello World!")

# Data Types in Python:
# 1.   Strings(str)
# A string is a set of human readable letters such as cat, dog, boy, etc.
# Strings are denoted by "" or ''. To create a string, do the following
"Jayelon"

# Variables are used to store data. Variables are generally placed on the
# Left Hand Side(LHS) and the values are placed on the RHS
name = "Jayelon"
# = is an assignment operator which is used to assign a value(RHS) to a variable(LHS).
# ^ "Jayelon" is assigned to name.

# print("Hello, " + name + "!")

# 2.   Numbers are the integer(int) data type. They are whole numbers (1, 2, 3, etc.).
# temperature = 48
# 48 is assigned to temperature

# Numbers can also be floats, which mean they have a decimal point in them.
# 3.   Float is short for Floating Point Integer
# Ex: 3.14, 95.68392048585, 3.9, etc.

gpa = 3.789

# 4.   Next data type is a boolean, which is just a true/false.
# Booleans must start with a capital letter (True/False). Otherwise you'll get an error message.
isRaining = False


# Lists are used to store lots of different values under one variable.
# Floats, Ints, Booleans, etc. can all be stored in the same list.
# Don't get used to that -- some languages will only accept the same data type in a list.
# classroom = ['Kenneth', 'Michael', 'Ethan']


# A function runs a specific order of code that you assign to it.
# If we add another function above sensei, and move the name variable into it, then we'll run into an error in sensei.
# Basically, the computer will run through that new function, then delete the information once the function has run.
# So when we come to sensei, name doesn't exist and isn't defined. So if you want name to work, you HAVE to define it outside the function.
# Scope: variables declared outside of fucntions, loops, etc have a global scope, meaning that they can be accessed by any other line of code within the file it is declared in

# Variables declared insde the function have a local scope, meaning that the variable can only be accessed from within that funciton or loop, and will be deleted after that block of code is completed.

# def sensei():
#     print('Karate Kid -- 空手ガキ')
#     print('Mister Miyagi -- 宮城先生')
#     print('こんにちは皆さん！' + name + ' です。よろしくお願いします！')


# To use a function, we must 'call' it, like below.
# sensei()
# Japan_name = "ジェイロン"
# Inside of the (), we can provide functions with values, these are called parameters.
# When we call a function, any value that is passed is called an argument
# When the value is received by the function, it's called a parameter
# Title is the parameter, where parameter is simply a variable that stores the argument


# def sensei(title):
#     print(title + '-sensei')


# # Name is an argument being passed to the function
# sensei(name)


# Loops are useful for iterating through lists
# For Loop: for each element inside of a list, we can execute a block of code
classroom = ['Kenneth', 'Vinny', 'Peter', 'Jayelon',
             'Jessika', 'Corey', 'Michael', 'Rokhaya', 'Meg', 'Adam', 'Dre', 'Ethan']
# for student in classroom:
#     print(student)

# Conditionals
# We can use conditions to selectively execute blocks of code
# for student in classroom:
#     if student[0] == 'M':
#         print(f"Hello, {student}!")
#     elif student == 'Jayelon':
#         print(f"こんにちは {student}!")
#     elif student == 'Dre' or student == 'Ethan':
#         print("You are an instructor!")
#     else:
#         print(f"Goodbye, {student}!")

# Check multiple conditions on one line
# Python is weird in that you can literally just type out 'and' or 'or' and the computer knows what it is.
# In most languages, you have to use the ampersand for 'and' and another symbol for 'or' etc.
# temperature = -15
# day = 'Friday'
# if temperature <= 0 and day == 'Friday':
#     print("This is a bad day to end the week!")

# Practice Prompt
# Create a list with the name of every person in this class. Anyone who has a name that starts with a vowel, print to the terminal "This person cannot be trusted." If the name starts with a consonant, print, "This person is awesome"
classroom = ['Kenneth', 'Vinny', 'Peter', 'Jayelon',
             'Jessika', 'Corey', 'Michael', 'Rokhaya', 'Meg', 'Adam', 'Dre', 'Ethan']
for student in classroom:
    if student[0] == 'A' or student[0] == 'E' or student[0] == 'I' or student[0] == 'O' or student[0] == 'U':
        # if student[0] == 'A, E, I, O, U':
        # if student[0] == 'AEIOU':
        # if student[0] == 'A' 'E' 'I' 'O' 'U':
        print("This person cannot be trusted.")
    else:
        print("This person is awesome!")
