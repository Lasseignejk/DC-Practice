# Pokemon Go
# Catch Pokemon, give a choice to throw a ball or a berry
# Battle Team Rocket? Choose one of your pokemon to battle one of their's?
# Chance to find something in the grass instead of a pokemon?
# Go into the tall grass
# Go to a Pokemon Center
# Encounter a Team Rocket Grunt
# Fantasy choose your own adventure
# Fantasy Quest type game
# Choose between a Fighter, Wizard, and Rogue. Each have different stats.
# Choose from a list which path you want to take, have different attacks(?)
# Have ability to hold items

# Look up:
# How to make text wait before running   import time   seconds_for_sleep = 4    time.sleep(int(seconds_for_sleep))
# Different stylistic methods
# Traveling mechanic?

import random
import time


class CatchPokemon:
    def __init__(self):
        self.wildPokemon = ["Pikachu", "Eevee",
                            "Charmander", "Bulbasaur", "Squirtle", "Pidgy", "Jigglypuff", "Clefairy", "Cubone", "Magikarp", "Caterpie"]
        self.playerPokemon = []
        self.player = [{"name": "name"}, {
            "# of pokeballs": 10}, {"# of berries": 5}]
        self.secondInt = 10
        self.pokemonEncounter = random.randint(0, self.secondInt)

    def menu(self):
        print(
            """What would you like to do? Please type a number from 1 to 3.
    1. Go into the tall grass
    2. Check your Pokedex and inventory 
    3. Quit
        """)

    def pokedexAndInventory(self):
        if self.playerPokemon == []:
            print(
                "It looks like you haven't caught any pokemon yet! Get out there and catch 'em all!")
        else:
            print("These are the pokemon you have caught so far:")
            for pokemon in self.playerPokemon:
                print(pokemon)
        print(f"These are the pokemon that are still available:")
        for pokemon in self.wildPokemon:
            print(pokemon)
        print(
            f"You have {self.player[1]['# of pokeballs']} pokeballs and {self.player[2]['# of berries']} berries left.\n")

    def tallGrass(self):
        print("****************************************")
        print("You walk into the tall grass.")
        print(f"A wild {self.wildPokemon[self.pokemonEncounter]} appears!")
        time.sleep(2)
        print("What do you want to do?")
        # for numbers 4-10: Pokemon
        # 2-3: item
        # 1: Rocket grunt

    def throwPokeball(self):
        print("****************************************")
        self.secondInt -= 1
        print(
            f"You throw a pokeball at the wild {self.wildPokemon[self.pokemonEncounter]}.")
        print("The ball shakes once...")
        time.sleep(1)
        print("Twice...")
        time.sleep(1)
        print("Three times...")
        time.sleep(1)
        print(
            f"Good job! {self.wildPokemon[self.pokemonEncounter]} was caught!\n")
        self.playerPokemon.append(self.wildPokemon[self.pokemonEncounter])
        self.wildPokemon.remove(self.wildPokemon[self.pokemonEncounter])
        self.player[1]['# of pokeballs'] -= 1
        time.sleep(2)
        print(
            f"You have {self.player[1]['# of pokeballs']} pokeballs left.\n")

    def run(self):
        print(
            f"You decide not to catch the wild {self.wildPokemon[self.pokemonEncounter]} and leave the tall grass. \n")
        self.pokemonEncounter = random.randint(0, self.secondInt)

    def throwBerry(self):
        print("****************************************")
        self.player[2]['# of berries'] -= 1
        print(
            f"You throw a berry at the wild {self.wildPokemon[self.pokemonEncounter]}.")
        print(f"{self.player[2]['# of berries']} berries remaining")
        time.sleep(1)
        print(
            f"The wild {self.wildPokemon[self.pokemonEncounter]} eats it, eying you cautiously the whole time.\n")
        time.sleep(1)
        print(
            f"The wild {self.wildPokemon[self.pokemonEncounter]} looks a little happier -- maybe it will be easier to catch!")
        time.sleep(1)
        print("Would you like to throw another pokeball or run away?")
        print("""
    1. Throw a pokeball
    2. Run
        """)


userCatchPokemon = CatchPokemon()
stillPlaying = "y"

print("****************************************")
print("Welcome to your Pokemon adventure!")
print("For this game, you'll be working to catch as many Pokemon as you can. \n")

while (stillPlaying == "y"):
    time.sleep(2)
    userCatchPokemon.menu()
    choice = input("")
    if choice == "1":
        userCatchPokemon.tallGrass()
        print("""
        1. Throw a pokeball
        2. Throw a berry
        3. Run 
            """)
        choice = input("")
        if choice == "1":
            userCatchPokemon.throwPokeball()
        elif choice == "2":
            userCatchPokemon.throwBerry()
            choice = input("")
            if choice == "1":
                userCatchPokemon.throwPokeball()
            else:
                userCatchPokemon.run()
        else:
            userCatchPokemon.run()
    elif choice == "2":
        userCatchPokemon.pokedexAndInventory()
    elif choice == "3":
        print("Thank you for playing! Have a nice day!")
        stillPlaying = "n"
    else:
        print("I'm sorry, please choose a valid option.\n")

    if userCatchPokemon.player[1]['# of pokeballs'] == 0:
        print("Great job!")
        print(
            f"You were able to catch {len(userCatchPokemon.playerPokemon)} pokemon!")
        stillPlaying = input(
            "Would you like to play again? Please type y or n. \n")
