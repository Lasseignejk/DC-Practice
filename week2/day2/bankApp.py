

class BankAccount:
    def __init__(self):
        # self.balance = balance
        # self.name = name
        self.listOfAccounts = [{"name": "Jaye", "balance": 1000}, {
            "name": "Meg", "balance": 1000}]

    def addUser(self):
        userName = input("Please enter the name of the account holder: \n")
        userBalance = input(
            "How much money would you like to add to the account? \n$")
        usersEntry = {"name": userName, "balance": userBalance}
        self.listOfAccounts.append(usersEntry)
        print(f"{userName} has been added as a user.")
        print(self.listOfAccounts)

    def checkBalance(self):
        counter = 0
        for entry in self.listOfAccounts:
            print(f"{counter}. {entry['name']}")
            counter += 1
        userInput = int(input(
            "Who's balance would you like to check? \n"))

        if userInput == 0:
            print(
                f"{self.listOfAccounts[0]['name']} has a balance of {self.listOfAccounts[0]['balance']}")
        else:
            print(
                f"{self.listOfAccounts[1]['name']} has a balance of {self.listOfAccounts[1]['balance']}")

    def transfer(self):
        counter = 0
        for entry in self.listOfAccounts:
            print(f"{counter}. {entry['name']}")
            counter += 1
        personTransfering = int(input(
            "Please type the number associated with your account. \n"))
        amount = int(input("How much would you like to send? $"))
        if self.listOfAccounts[personTransfering]['balance'] >= amount:
            print("Good job, you have enough money!")
            counter2 = 0
            for entry in self.listOfAccounts:
                print(f"{counter2}. {entry['name']}")
                counter2 += 1
            personReceiving = int(input(
                "Who are you sending money to? Please type a number. \n"))
            personTransferingBalance = self.listOfAccounts[personTransfering]['balance'] - amount
            print(
                f"{self.listOfAccounts[personTransfering]['name']}'s new balance is {personTransferingBalance}.")
            personReceivingBalance = self.listOfAccounts[personReceiving]['balance'] + amount
            print(
                f"{self.listOfAccounts[personReceiving]['name']}'s new balance is {personReceivingBalance}.")
        else:
            print("Whoops, you don't have enough money to send that much.")


bankingApp = BankAccount()


userChoice = ""
while (True):
    print("""
    Electronic Banking App
    =====================
    1. Add User
    2. Check balance
    3. Transfer money
    4. Quit
    """)
    choice = input(
        "What do you want to do? Please type a number between 1 and 4.\n")
    if (choice == "1"):
        bankingApp.addUser()
    elif (choice == "2"):
        bankingApp.checkBalance()
    elif (choice == "3"):
        bankingApp.transfer()
    elif (choice == "4"):
        print("Thank you for using the Electronic Banking App. See you next time!")
        break
    userChoice = input(
        "Would you like to return to the top menu? Please type y or n. ")
    if (userChoice == "n"):
        print("Thank you for using the Electronic Banking App. See you next time!")
        break
