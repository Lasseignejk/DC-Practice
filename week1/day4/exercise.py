favoriteRestaurants = ["Uchi", "Town", "IronAge KBBQ", "Fadi"]

# # Find me all the restaurants that start with 'U'
# for restaurant in favoriteRestaurants:
#     if restaurant[0] == 'U':
#         print(restaurant)

# # Get me the last restaurant
# print(favoriteRestaurants[len(favoriteRestaurants)-1])

# # Get me the second to last restaurant
# print(favoriteRestaurants[-2])

# # Uppercase all of the restaurants
# for restaurant in favoriteRestaurants:
#     print(restaurant.upper())


# def printMyName():
#     print("Jaye")


# printMyName()

# Write a function that lists every restaurant. This function receives a list of restaurants
# favoriteRestaurants = ["Uchi", "Town", "IronAge KBBQ", "Fadi"]


# def printRestaurants(list):
#     for restaurant in list:
#         print(restaurant)

# # to make ^ more generic,


# def printList(list):
#     for item in list:
#         print(item)


# printRestaurants(favoriteRestaurants)
# printList(favoriteRestaurants)

# Write a function that adds the word apple to the empty list. The function receives no arguments.
listOfFruit = []


def addFruit(fruit):
    listOfFruit.append(fruit)
    print(listOfFruit)


addFruit("apple")
addFruit("banana")
addFruit("orange")
