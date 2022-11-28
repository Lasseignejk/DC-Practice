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
# [x] Added a condition so if the player doesn't have berries, it doesn't give them the option to throw one


# Things I still want to do:
# [ ] Look up different stylistic methods
# [ ] Traveling mechanic?
# [ ] Add a condition that ends the game if wild pokemon reaches 0 (unlikely but still possible)
# [ ] Once the encounters are done, enhance the catch mechanic so there's a chance a pokemon might flee instead of be caught.
# [ ] Let players choose what environment they want to go to

import random
import time


logo = """

                                  ,'\/
    _.----.        ____         ,'  _\   ___    ___     ____
_,-'       `.     |    |  /`.   \,-'    |   \  /   |   |    \  |`.
\      __    \    '-.  | /   `.  ___    |    \/    |   '-.   \ |  |
 \.    \ \   |  __  |  |/    ,','_  `.  |          | __  |    \|  |
   \    \/   /,' _`.|      ,' / / / /   |          ,' _`.|     |  |
    \     ,-'/  /   \    ,'   | \/ / ,`.|         /  /   \  |     |
     \    \ |   \_/  |   `-.  \    `'  /|  |    ||   \_/  | |\    |
      \    \ \      /       `-.`.___,-' |  |\  /| \      /  | |   |
       \    \ `.__,'|  |`-._    `|      |__| \/ |  `.__,'|  | |   |
        \_.-'       |__|    `-._ |              '-.|     '-.| |   |
                                `'                            '-._|
                                """


class CatchPokemon:
    def __init__(self):
        self.wildPokemon = {"cave": ["Sandshrew", "Zubat", "Paras", "Diglett", "Geodude", "Magnemite", "Onix", "Hitmonlee", "Hitmonchan",
                            "Koffing", "Rhyhorn", "Electabuzz", "Magmar", "Omanyte", "Kabuto", "Aerodactyl", "Kangaskhan", "Jynx", "Machop"],
                            "beach": ["Squirtle", "Poliwag", "Tentacool", "Slowpoke", "Seal", "Shellder", "Krabby", "Horsea", "Goldeen", "Staryu", "Magikarp", "Lapras", "Dratini", "Psyduck", "Eevee", "Spearow", "Mr. Mime", "Jigglypuff"],
                            "forest": ["Bulbasaur", "Caterpie", "Weedle", "Pidgey", "Rattata", "Ekans", "Pikachu", "Oddish", "Venonat", "Meowth", "Bellsprout", "Farfetch'd", "Doduo", "Exeggcute", "Chansey", "Tangela", "Scyther", "Pinsir", "Snorlax"],
                            "ruins": ["Clefairy", "Vulpix", "Growlithe", "Abra", "Ponyta", "Charmander", "Grimer", "Gastly", "Drowzee", "Voltorb", "Cubone", "Porygon", "Tauros", "Lickitung", "Ditto", "Nidoran", "Mankey"]}
        self.cavePokemon = []
        self.playerPokemon = []
        self.player = [{
            "# of pokeballs": 10}, {"# of berries": 5}]
        # self.randomWildPokemon = random.choice(self.wildPokemon[self.location])
        self.pokemonItemRocketChance = random.randint(1, 10)
        self.pokemonCatchChance = random.randint(1, 10)
        self.wildPokemonLength = len(self.wildPokemon["cave"]) + len(self.wildPokemon["beach"]) + len(
            self.wildPokemon["forest"]) + len(self.wildPokemon["ruins"])
        self.pokemonCaught = "n"
        self.location = ""
        self.stayHere = "y"

    def randomWildPokemon(self, location):
        self.randomWildPokemon = random.choice(self.wildPokemon[location])

    def menu(self):
        print("****************************************")
        print("What would you like to do?\n")
        time.sleep(2)
        print(
            """
    1. Look for a pokemon
    2. Check your Pokedex and inventory
    3. Quit
        """)

    def catchMenu(self):
        print("""
        1. Throw a pokeball
        2. Throw a berry
        3. Run
            """)

    def mapMenu(self):
        print("****************************************")
        print("Where would you like to go pokemon hunting?")
        time.sleep(2)
        print(
            """
    1. A cave
    2. The beach
    3. A forest
    4. The ruins
        """)

    def atLocationMenu(self):
        print("****************************************")
        print("What would you like to do?\n")
        time.sleep(2)
        print(f"""
    1. Catch a pokemon
    2. Check your Pokedex and inventory
    3. Leave the {self.location}
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
            f"There are {self.wildPokemonLength} pokemon still in the wild!")
        time.sleep(2)
        print(
            f"You have {self.player[0]['# of pokeballs']} pokeballs and {self.player[1]['# of berries']} berries left.\n")

    def pokemonEncounter(self):
        self.randomWildPokemon(self.location)
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

    def atLocation(self):
        while self.stayHere == "y":
            if self.pokemonItemRocketChance == 1:
                self.rocketEncounter()

            elif self.pokemonItemRocketChance <= 3:
                self.itemEncounter()

            else:
                self.pokemonCaught = "n"
                self.pokemonEncounter()
                self.throwPokeballOrBerry()

            leave = input(
                f"Do you want to leave the {self.location}? Type y or n. \n")
            if leave == "n":
                self.atLocationMenu()
                choice = input("")
                if choice == "1":
                    self.stayHere == "y"
                elif choice == "2":
                    self.pokedexAndInventory()
                elif choice == "3":
                    print(f"You decide to leave the {self.location}.")
                    self.location = ""
                    self.stayHere == "n"
            else:
                print(f"You decide to leave the {self.location}.")
                self.location = ""
                self.stayHere == "n"

    def throwPokeball(self):
        print("****************************************")
        print(
            f"You throw a pokeball at the wild {self.randomWildPokemon}.")
        self.player[0]['# of pokeballs'] -= 1
        time.sleep(1)
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
                    self.wildPokemon[self.location].remove(
                        self.randomWildPokemon)
                    # self.wildPokemon.remove([self.location][self.randomWildPokemon])
                    # self.randomWildPokemon[self.location]
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
        if self.player[1]['# of berries'] > 0:
            self.player[1]['# of berries'] -= 1
            print(
                f"You throw a berry at the wild {self.randomWildPokemon}.")
            print(f"You have {self.player[1]['# of berries']} berries left.")
            self.pokemonCatchChance += 2
            time.sleep(2)
            print(
                f"The wild {self.randomWildPokemon} eats it, eying you cautiously the whole time.")
            time.sleep(2)
            print(
                f"The wild {self.randomWildPokemon} looks a little happier -- maybe it will be easier to catch!")
            time.sleep(3)
            print("Would you like to throw another pokeball or run away?")
            time.sleep(2)
            print("""
        1. Throw a pokeball
        2. Run
            """)
        else:
            print("Oh no! It looks like you don't have any berries to throw.")
            time.sleep(1)
            print("Would you like to throw a pokeball or run away?")
            time.sleep(2)
            print("""
        1. Throw a pokeball
        2. Run
            """)

    def rocketEncounter(self):
        counter = 1
        print("Two figures drop down from a tree in front of you.")
        time.sleep(1)
        print("Oh no! It's Team Rocket!")
        time.sleep(2)
        if self.playerPokemon != []:
            print("They cackle at you, before one of their pokemon emits a smokescreen.")
            time.sleep(2)
            print(
                f"When the smokescreen clears, you notice one of your pokeballs is missing! They've stolen {self.playerPokemon[0]}!")
            time.sleep(2)
            stolenPokemon = self.playerPokemon.pop(0)
            self.wildPokemon.append(stolenPokemon)
            self.pokemonItemRocketChance = random.randint(1, 10)
            if counter == 1:
                print("*ring ring ring*")
                time.sleep(1)
                print("Someone is calling you!")
                time.sleep(1)
                print(f"Hello, Trainer {name}? This is Professor Jaye.")
                time.sleep(2)
                print(
                    "I see you've just had an encounter with that terrible Team Rocket.")
                time.sleep(3)
                print("Don't worry!")
                time.sleep(1)
                print(
                    "If they steal a Pokemon from you, you can still catch it again in the wild.")
                time.sleep(3)
                print("Good luck!")
                time.sleep(1)
                print("*click*")
                time.sleep(1)
                counter += 1
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
            print("You find something buried by a rock.")
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
            f"You decide not to catch the wild {self.randomWildPokemon}. \n")
        self.randomWildPokemon = random.choice(self.wildPokemon)

    def ending(self):
        print("*ring ring ring*")
        time.sleep(2)
        print("Professor Jaye is calling you!")
        time.sleep(2)
        print(f"   Great job, Trainer {name}!")
        time.sleep(1)
        print(
            f"   You were able to catch {len(userCatchPokemon.playerPokemon)} pokemon!")
        time.sleep(2)
        print("   Thank you for your help with my research.")
        time.sleep(1)
        print("   I couldn't have done it without you!")
        time.sleep(2)
        print("*click*")
        time.sleep(1)


userCatchPokemon = CatchPokemon()
stillPlaying = "y"

# print(logo)
print("***********************************************************************")
print("   Hello there!")
name = "Jaye"
# time.sleep(2)
# print("   Welcome to the world of Pokemon!")
# time.sleep(2)
# print("   My name is Jaye.")
# time.sleep(2)
# print("   People call me the Pokemon Prof!")
# time.sleep(2)
# print("   I study Pokemon for a living.")
# time.sleep(2)
# name = input("   What might your name be? \n")
# print(f"   Welcome to your Pokemon adventure, Trainer {name}!")
# time.sleep(2)
# print("   Please help me with my research and catch as many Pokemon as you can!")
# time.sleep(3)
# print("   But be careful, Team Rocket has been seen in the area.")
# time.sleep(2)
# print(
#     f"   Good luck on your adventure, Trainer {name}! I can't wait to see what exciting Pokemon you catch!")
# time.sleep(3)
# print("Professor Jaye gives you 10 pokeballs and 5 berries to start your journey.")
time.sleep(3)
print("You leave Professor Jaye's lab. Adventure awaits! \n")
time.sleep(2)
while (stillPlaying == "y"):
    time.sleep(2)
    userCatchPokemon.menu()
    choice = input("")
    if choice == "1":
        userCatchPokemon.mapMenu()
        mapChoice = input("")
        if mapChoice == "1":
            userCatchPokemon.location = "cave"
            userCatchPokemon.stayHere = "y"
            print("Armed with a flashlight, you walk into a dark cave.")
            time.sleep(2)
            userCatchPokemon.atLocation()
        elif mapChoice == "2":
            userCatchPokemon.location = "beach"
            userCatchPokemon.stayHere = "y"
            print("You grab a hat and some sunscreen and head to the beach.")
            time.sleep(2)
            userCatchPokemon.atLocation()
        elif mapChoice == "3":
            userCatchPokemon.location = "forest"
            userCatchPokemon.stayHere = "y"
            print("You go to run into the forest, then run back and grab your bugspray.")
            time.sleep(2)
            userCatchPokemon.atLocation()
        elif mapChoice == "4":
            userCatchPokemon.location = "ruins"
            userCatchPokemon.stayHere = "y"
            print("You grab an extra pair of underwear before heading into the ruins.")
            time.sleep(2)
            userCatchPokemon.atLocation()
        else:
            print("I'm sorry, please enter a valid number.")
    elif choice == "2":
        userCatchPokemon.pokedexAndInventory()
    elif choice == "3":
        if userCatchPokemon.playerPokemon != []:
            userCatchPokemon.ending()
            stillPlaying = "n"
        else:
            print("Thank you for playing! Have a nice day!")
        stillPlaying = "n"
    else:
        print("I'm sorry, please choose a valid option.\n")

    if userCatchPokemon.player[0]['# of pokeballs'] == 0:
        userCatchPokemon.ending()
        stillPlaying = input(
            "Would you like to play again? Please type y or n. \n")
