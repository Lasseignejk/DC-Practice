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
# [x] Randomized the item encounter so it will either be pokeballs or berries. The quantity has also been randomized.
# [x] Enhanced the berry mechanic so that it increases the chances of a pokemon being caught.


# Things I still want to do:
# [ ] Look up different stylistic methods
# [ ] Traveling mechanic?
# [ ] Add a condition that ends the game if wild pokemon reaches 0 (unlikely but still possible)
# [ ] Add a condition so if the player doesn't have berries, it doesn't give them the option to throw one
# [ ] Once the encounters are done, enhance the catch mechanic so there's a chance a pokemon might flee instead of be caught.

import random
import time
# , "Rattata", "Spearow", "Ekans", "Pikachu", "Eevee", "Sandshrew", "NidoranBoy", "NidoranGirl", "Clefairy", "Vulpix", "Jigglypuff", "Zubat", "Oddish", "Paras", "Venonat", "Diglett", "Meowth", "Psyduck", "Mankey", "Growlithe", "Poliwag", "Abra", "Machop", "Bellsprout", "Tentacool", "Geodude", "Ponyta", "Slowpoke", "Magnemite", "Farfetch'd",
# "Doduo", "Seel", "Grimer", "Shellder", "Gastly", "Onix", "Drowzee", "Krabby", "Voltorb", "Exeggcute", "Cubone", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Rhyhorn", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Goldeen", "Staryu", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Lapras", "Ditto", "Porygon", "Omanyte", "Kabuto", "Aerodactyl", "Snorlax", "Dratini"]


class CatchPokemon:
    def __init__(self):
        self.wildPokemon = ["Bulbasaur", "Charmander",
                            "Squirtle", "Caterpie", "Weedle", "Pidgey"]
        self.playerPokemon = []
        self.player = [{
            "# of pokeballs": 10}, {"# of berries": 5}]
        self.randomWildPokemon = random.choice(self.wildPokemon)
        self.pokemonItemRocketChance = random.randint(1, 10)
        self.pokemonCatchChance = random.randint(1, 10)
        self.pokemonCaught = "n"

    def menu(self):
        print("****************************************")
        print(
            """What would you like to do? Please type a number from 1 to 3.\n
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
            f"You have {self.player[0]['# of pokeballs']} pokeballs and {self.player[1]['# of berries']} berries left.\n")

    def pokemonEncounter(self):
        print(f"A wild {self.randomWildPokemon} appears!")
        time.sleep(2)
        print("What do you want to do?")
        # for numbers 4-10: Pokemon
        # 2-3: item
        # 1: Rocket grunt

    def throwPokeballOrBerry(self):
        while self.pokemonCaught == "n":
            self.catchMenu()
            choice = input("")
            if choice == "1":
                self.throwPokeball()
            elif choice == "2":
                self.throwBerry()
                choice = input("")
                if choice == "1":
                    self.throwPokeball()
                else:
                    self.run()
                    self.pokemonCaught = "y"
            else:
                self.run()
                self.pokemonCaught = "y"

    def throwPokeball(self):
        print("****************************************")
        print(
            f"You throw a pokeball at the wild {self.randomWildPokemon}.")
        self.player[0]['# of pokeballs'] -= 1
        print("The ball shakes once...")
        time.sleep(1)
        if self.pokemonCatchChance == 1:
            self.pokemonBreaksOut()
        else:
            print("Twice...")
            time.sleep(2)
            if self.pokemonCatchChance <= 3:
                self.pokemonBreaksOut()
            else:
                print("Three times...")
                time.sleep(3)
                if self.pokemonCatchChance == 4:
                    self.pokemonBreaksOut()
                else:
                    print(
                        f"Good job! {self.randomWildPokemon} was caught!\n")
                    self.playerPokemon.append(self.randomWildPokemon)
                    self.wildPokemon.remove(self.randomWildPokemon)
                    self.randomWildPokemon = random.choice(
                        self.wildPokemon)
                    time.sleep(1)
                    print(
                        f"You have {self.player[0]['# of pokeballs']} pokeballs left. \n")
                    self.pokemonItemRocketChance = random.randint(
                        1, 10)
                    self.pokemonCatchChance = random.randint(1, 10)
                    self.pokemonCaught = "y"

    def pokemonBreaksOut(self):
        print(
            f"Oh no! The wild {self.randomWildPokemon} broke out of the pokeball!")
        time.sleep(1)
        print(
            f"You have {self.player[0]['# of pokeballs']} pokeballs left. \n")
        time.sleep(1)
        print("What do you want to do?")
        self.pokemonCatchChance = random.randint(1, 10)

    def throwBerry(self):
        print("****************************************")
        self.player[1]['# of berries'] -= 1
        print(
            f"You throw a berry at the wild {self.randomWildPokemon} ({self.player[1]['# of berries']} berries remaining)")
        self.pokemonCatchChance += 2
        time.sleep(2)
        print(
            f"The wild {self.randomWildPokemon} eats it, eying you cautiously the whole time.")
        time.sleep(2)
        print(
            f"The wild {self.randomWildPokemon} looks a little happier -- maybe it will be easier to catch!")
        time.sleep(2)
        print("Would you like to throw another pokeball or run away?")
        print("""
    1. Throw a pokeball
    2. Run
        """)

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
        itemFound = random.randint(1, 2)
        numItems = random.randint(2, 3)
        if itemFound == 1:
            print("You find something buried by a tree.")
            time.sleep(1)
            print(f"You uncover {numItems} pokeballs!")
            self.player[0]['# of pokeballs'] += numItems
            time.sleep(2)
            print(
                f"You now have {self.player[0]['# of pokeballs']} pokeballs.\n")
            self.pokemonItemRocketChance = random.randint(1, 10)
        else:
            print("You stumble upon a berry bush.")
            time.sleep(1)
            print(f"You collect {numItems} berries!")
            self.player[1]['# of berries'] += numItems
            time.sleep(2)
            print(f"You now have {self.player[1]['# of berries']} berries.")
            self.pokemonItemRocketChance = random.randint(1, 10)

    def run(self):
        print("****************************************")
        print(
            f"You decide not to catch the wild {self.randomWildPokemon} and leave the tall grass. \n")
        self.randomWildPokemon = random.choice(self.wildPokemon)


userCatchPokemon = CatchPokemon()
stillPlaying = "y"

print("****************************************")
name = input("Hello! What is your name? \n")
print(f"Welcome to your Pokemon adventure, Trainer {name}!")
time.sleep(2)
print("Your goal, as always, is to catch 'em all.")
time.sleep(2)
print("But be careful, Team Rocket has been seen in the area!")
time.sleep(2)
print(f"Good luck on your adventure, Trainer {name}! \n")
time.sleep(2)
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
        if userCatchPokemon.pokemonItemRocketChance == 1:
            userCatchPokemon.rocketEncounter()
        elif userCatchPokemon.pokemonItemRocketChance <= 3:
            userCatchPokemon.itemEncounter()
        else:
            userCatchPokemon.pokemonCaught = "n"
            userCatchPokemon.pokemonEncounter()
            userCatchPokemon.throwPokeballOrBerry()
    elif choice == "2":
        userCatchPokemon.pokedexAndInventory()
    elif choice == "3":
        if userCatchPokemon.playerPokemon != []:
            print(f"Great job, Trainer {name}!")
            time.sleep(1)
            print(
                f"You were able to catch {len(userCatchPokemon.playerPokemon)} pokemon!")
            time.sleep(1)
            print("Thank you for playing! Have a nice day!")
        else:
            print("Thank you for playing! Have a nice day!")
        stillPlaying = "n"
    else:
        print("I'm sorry, please choose a valid option.\n")

    if userCatchPokemon.player[0]['# of pokeballs'] == 0:
        print(f"Great job, Trainer {name}!")
        print(
            f"You were able to catch {len(userCatchPokemon.playerPokemon)} pokemon!")
        stillPlaying = input(
            "Would you like to play again? Please type y or n. \n")
