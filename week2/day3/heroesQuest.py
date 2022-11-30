import time
import random


class Characters:
    def __init__(self, attack, defense, health):
        self.attack = attack
        self.defense = defense
        self.health = health

    def heroAttacked(self, attack):
        self.health -= attack
        print(
            f"You were hit for {attack} points of damage. Your new health is {self.health}.")
        if self.health <= 0:
            print("Oh no! Your health as reached 0. You lose!")

    def villainAttacked(self, attack):
        self.health -= attack
        print(
            f"You hit your enemy for {attack} points of damage. Their new health is {self.health}.")
        if self.health <= 0:
            print("Yes! Your enemy's health has dropped to 0. You win!")


knight = Characters(8, 5, 25)
mage = Characters(5, 8, 15)
rogue = Characters(7, 7, 20)

goblin = Characters(5, 5, 15)
orc = Characters(7, 6, 25)
skeleton = Characters(8, 7, 20)


stillPlaying = "y"

while stillPlaying == "y":
    heroChoice = input("""Welcome to Hero Fight!
Please choose your hero:
    Knight
    Mage
    Rogue \n""").lower()
    print(f"You chose the {heroChoice}!")
    time.sleep(2)
    if heroChoice == "knight":
        hero = knight
    elif heroChoice == "mage":
        hero = mage
    elif heroChoice == "rogue":
        hero = rogue
    else:
        print("Please choose a valid option.")
    villainChoice = input("""Who do you want to fight?
    Goblin
    Orc
    Skeleton \n""").lower()
    print(f"You chose the {villainChoice}!")
    time.sleep(2)
    if villainChoice == "goblin":
        villain = goblin
    elif villainChoice == "orc":
        villain = orc
    elif villainChoice == "skeleton":
        villain = skeleton
    else:
        print("Please choose a valid option.")
    print("Let's fight!")
    time.sleep(2)
    goFirst = random.randint(1, 2)
    if goFirst == 1:
        print(f"You attack first!")
        time.sleep(2)
        villain.villainAttacked(hero.attack)
        time.sleep(2)
    else:
        print(f"The {villainChoice} will attack first!")
        time.sleep(2)
        hero.heroAttacked(villain.attack)
        time.sleep(2)
    while hero.health >= 0 and villain.health >= 0:
        goNext = random.randint(1, 2)
        if goNext == 1:
            villain.villainAttacked(hero.attack)
            time.sleep(2)
        else:
            hero.heroAttacked(villain.attack)
            time.sleep(2)
    stillPlaying = "n"
