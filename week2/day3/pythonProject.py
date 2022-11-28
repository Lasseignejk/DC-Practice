# Pokemon Python
# Go into the tall grass
# Encounter a pokemon(throw a ball or berry), item(update item count), or a member of Team Rocket(subtract one from the number of pokemon player has)

# Done:
# [x] Basic logic for pokemon encounter
# [x] Randomized which pokemon will appear for the pokemon encounter
# [x] Added the ability to run from a pokemon encounter, in which case that pokemon will remain in the list of wild pokemon and the encounter will randomize again
# [x] User can check their pokedex, to see which pokemon they've caught and which ones remain in the area, and their inventory to keep track of their pokeballs and berries
# [x] Added a quit function to exit the game, and an end condition where if the user runs out of pokeballs, the game ends.
# [x] Added team rocket and item encounters so every encounter isn't a pokemon
# [x] Enhanced the team rocket encounter. If the player has caught any pokemon: the first in the list will be 'stolen' and returned to the wild. If the player hasn't caught any pokemon: team rocket will taunt the player

# Things I still want to do:
# [ ] Look up different stylistic methods
# [ ] Traveling mechanic?
# [ ] If it's an item encounter, randomize if it's pokeballs or berries and how many it gives
# [ ] Add a condition that ends the game if wild pokemon reaches 0 (unlikely but still possible)
# [ ] Add a condition so if the player doesn't have berries, it doesn't give them the option to throw one
# [ ] Once the encounters are done, enhance the catch mechanic so there's a chance a pokemon might flee instead of be caught.
# [ ] Once the catch mechanic is enhanced, make using a berry increase the chances of a pokemon being caught. If too complicated, scrap the berries and just have catch or not catch, and rocket encounters

import random
import time
# , "Rattata", "Spearow", "Ekans", "Pikachu", "Eevee", "Sandshrew", "NidoranBoy", "NidoranGirl", "Clefairy", "Vulpix", "Jigglypuff", "Zubat", "Oddish", "Paras", "Venonat", "Diglett", "Meowth", "Psyduck", "Mankey", "Growlithe", "Poliwag", "Abra", "Machop", "Bellsprout", "Tentacool", "Geodude", "Ponyta", "Slowpoke", "Magnemite", "Farfetch'd",
# "Doduo", "Seel", "Grimer", "Shellder", "Gastly", "Onix", "Drowzee", "Krabby", "Voltorb", "Exeggcute", "Cubone", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Rhyhorn", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Goldeen", "Staryu", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Lapras", "Ditto", "Porygon", "Omanyte", "Kabuto", "Aerodactyl", "Snorlax", "Dratini"]


class CatchPokemon:
    def __init__(self):
        self.wildPokemon = ["Bulbasaur", "Charmander",
                            "Squirtle", "Caterpie", "Weedle", "Pidgey"]
        self.playerPokemon = []
        self.player = [{"name": "name"}, {
            "# of pokeballs": 10}, {"# of berries": 5}]
        self.randomWildPokemon = random.choice(self.wildPokemon)
        self.pokemonItemRocketChance = random.randint(1, 10)

    def menu(self):
        print("****************************************")
        print(
            """What would you like to do? Please type a number from 1 to 3.
    1. Go into the tall grass
    2. Check your Pokedex and inventory
    3. Quit
        """)

    def catchMenu(self):
        print("""
        1. Throw a pokeball
        2. Throw a berry
        3. Run
            """)

    def pokedexAndInventory(self):
        if self.playerPokemon == []:
            print(
                "It looks like you haven't caught any pokemon yet! Get out there and catch 'em all!")
        else:
            print("These are the pokemon you have caught so far:")
            for pokemon in self.playerPokemon:
                print(pokemon)
        time.sleep(2)
        print(
            f"There are {len(userCatchPokemon.wildPokemon)} pokemon still in the wild!")
        time.sleep(2)
        print(
            f"You have {self.player[1]['# of pokeballs']} pokeballs and {self.player[2]['# of berries']} berries left.\n")

    def pokemonEncounter(self):
        print(f"A wild {self.randomWildPokemon} appears!")
        time.sleep(2)
        print("What do you want to do?")
        # for numbers 4-10: Pokemon
        # 2-3: item
        # 1: Rocket grunt

    def throwPokeball(self):
        print("****************************************")
        print(
            f"You throw a pokeball at the wild {self.randomWildPokemon}.")
        print("The ball shakes once...")
        time.sleep(1)
        print("Twice...")
        time.sleep(1)
        print("Three times...")
        time.sleep(1)
        print(
            f"Good job! {self.randomWildPokemon} was caught!\n")
        self.playerPokemon.append(self.randomWildPokemon)
        self.wildPokemon.remove(self.randomWildPokemon)
        self.randomWildPokemon = random.choice(self.wildPokemon)
        self.player[1]['# of pokeballs'] -= 1
        time.sleep(1)
        print(
            f"You have {self.player[1]['# of pokeballs']} pokeballs left.")
        self.pokemonItemRocketChance = random.randint(1, 10)

    def rocketEncounter(self):
        print("Two figures drop down from a tree in front of you.")
        time.sleep(1)
        print("Oh no! It's Team Rocket!")
        time.sleep(2)
        if self.playerPokemon != []:
            print("They cackle at you, before one of their pokemon emits a smokescreen.")
            time.sleep(2)
            print(
                f"When the smokescreen clears, you notice one of your pokeballs is missing! They've stolen {self.playerPokemon[0]}!")
            stolenPokemon = self.playerPokemon.pop(0)
            self.wildPokemon.append(stolenPokemon)
            self.pokemonItemRocketChance = random.randint(1, 10)
        else:
            print("They cackle at you, then notice that you don't have any pokemon.")
            time.sleep(2)
            print(
                "'Ha! How pathetic. This wanna be trainer doesn't have a pokemon to call their own!'")
            time.sleep(2)
            print("They turn and climb back into the tree.")
            time.sleep(2)
            print(
                "'Hopefully the next time we see you you'll be worth robbing. Team Rocket, out!'")
            self.pokemonItemRocketChance = random.randint(1, 10)

    def itemEncounter(self):
        print("You find something burried in the grass.")
        time.sleep(1)
        print("You find 2 pokeballs! Sweet!")
        self.player[1]['# of pokeballs'] += 2
        time.sleep(2)
        print(f"Now you have {self.player[1]['# of pokeballs']} pokeballs.\n")
        self.pokemonItemRocketChance = random.randint(1, 10)

    def run(self):
        print(
            f"You decide not to catch the wild {self.randomWildPokemon} and leave the tall grass. \n")
        self.randomWildPokemon = random.choice(self.wildPokemon)

    def throwBerry(self):
        print("****************************************")
        self.player[2]['# of berries'] -= 1
        print(
            f"You throw a berry at the wild {self.randomWildPokemon}.")
        print(f"{self.player[2]['# of berries']} berries remaining")
        time.sleep(1)
        print(
            f"The wild {self.randomWildPokemon} eats it, eying you cautiously the whole time.\n")
        time.sleep(1)
        print(
            f"The wild {self.randomWildPokemon} looks a little happier -- maybe it will be easier to catch!")
        time.sleep(1)
        print("Would you like to throw another pokeball or run away?")
        print("""
    1. Throw a pokeball
    2. Run
        """)


userCatchPokemon = CatchPokemon()
stillPlaying = "y"
pokemonCaught = "n"

print("****************************************")
print("Welcome to your Pokemon adventure!")
print("For this game, you'll be working to catch as many Pokemon as you can. \n")
# for numbers 4-10: Pokemon
# 2-3: item
# 1: Rocket grunt
while (stillPlaying == "y"):
    time.sleep(2)
    userCatchPokemon.menu()
    choice = input("")
    if choice == "1":
        print("****************************************")
        print("You walk into the tall grass.")
        time.sleep(2)
        if userCatchPokemon.pokemonItemRocketChance <= 2:
            userCatchPokemon.rocketEncounter()
        elif userCatchPokemon.pokemonItemRocketChance <= 5:
            userCatchPokemon.itemEncounter()
        else:
            userCatchPokemon.pokemonEncounter()
            userCatchPokemon.catchMenu()
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
