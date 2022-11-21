# print("Hello world classes")

# how you define a class in Python


class Student:
    def __init__(self, name, age, ghUsername):
        self.name = name
        self.age = age
        self.ghUsername = ghUsername

    def greeting(self):
        print(f"Hello my name is {self.name}")


jaye = Student("Jaye", 15, "Lasseignejk")
print(jaye.name)
# This is called dot notation.

# using the class
jaye.greeting()
