# I should be able to type a phone number
# I should be able to view all the phone numbers I have created up to that point
# I should be able to add phone numbers
# I should be able to see the names of the people attached to each phone number
# I should be able to delete a specific phone number
# I should be able to add phone numbers until I specify a stop and then the game will quiet
# The phone number needs to be in this format 111-111-1111
# You should use classes
# It's due tomorrow morning

userName = ""
userNum = ""
# userName = input("Name: ")
# userNum = input("Number: ")

phoneB = {"Jaye": "123-456-7890", "Hunter": "987-654-3210"}


class Phonebook:
    def __init__(self, name, phoneNumber):
        self.name = name
        self.phoneNumber = phoneNumber

    def addEntry(self):
        name = userName + input("Name: ")
        num = userNum + input("Number: ")
        phoneB[name] = num
        print(f"Entry stored for {name}.")

    def deleteEntry(self):
        name = userName + input("Name: ")
        del phoneB[name]
        print(f"Entry removed for {name}.")

    def lookAtEntry(self):
        name = userName + input("Name: ")
        phoneB[name]
        print(f"Found entry for {name}: {phoneB[name]}")

    def listEntries(self):
        for person in phoneB:
            print(f"Found entry for {person}: {phoneB[person]}")


entry = Phonebook(userName, userNum)
# entry.addEntry()
# print(phoneB)

keepGoing = "y"

while (keepGoing == "y"):
    print("""
    Electronic Phone Book
    =====================
    1. Add an entry
    2. Delete an entry
    3. Look up an entry
    4. List all entries
    5. Quit
    """)
    choice = input(
        "What do you want to do? Please type a number between 1 and 5.\n")
    if (choice == "1"):
        entry.addEntry()
    elif (choice == "2"):
        entry.deleteEntry()
    elif (choice == "3"):
        entry.lookAtEntry()
    elif (choice == "4"):
        entry.listEntries()
    elif (choice == "5"):
        print("Thank you for using the Electronic Phone Book. See you next time!")
        keepGoing = 'n'
    else:
        print("I'm sorry, please choose a valid option.")
    keepGoing = input("Would you like to do something else? Type y or n \n")
