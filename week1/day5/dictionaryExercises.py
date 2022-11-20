# # Exercise 1: Given the following dictionary, representing a mapping from names to phone numbers:

# phonebook_dict = {'Alice': '703-493-1834',
#                   'Bob': '857-384-1234',
#                   'Elizabeth': '484-584-2923'}

# # Print Elizabeth's phone number.
# print(phonebook_dict['Elizabeth'])
# # Add an entry to the dictionary: Kareem's number is 938-489-1234.
# phonebook_dict["Kareem"] = "938-489-1234"
# # Delete Alice's phone entry.
# del phonebook_dict["Alice"]
# # Change Bob's phone number to '968-345-2345'.
# phonebook_dict["Bob"] = "968-345-2345"
# # Print all the phone entries.
# print(phonebook_dict)
# # In this exercise, are you using dynamic keys or fixed keys?


# # Exercise 2: Nested Dictionaries
# ramit = {'name': 'Ramit',
#          'email': 'ramit@gmail.com',
#          'interests': ['movies', 'tennis'],
#          'friends': [{'name': 'Jasmine', 'email': 'jasmine@yahoo.com', 'interests': ['photography', 'tennis']
#                       },
#                      {'name': 'Jan', 'email': 'jan@hotmail.com',
#                          'interests': ['movies', 'tv']}
#                      ]
#          }

# # Write a python expression that gets the email address of Ramit.
# print(ramit["email"])
# # Write a python expression that gets the first of Ramit's interests.
# print(ramit["interests"][0])
# # Write a python expression that gets the email address of Jasmine.
# print(ramit["friends"][0]["email"])
# # Write a python expression that gets the second of Jan's two interests.
# print(ramit["friends"][1]["interests"][1])
# # In this exercise, are you using dynamic keys or fixed keys?

# # Exercise 3: Letter Summary
# # Write a letter_histogram program that asks the user for input, and prints a dictionary containing the tally of how many times each letter in the alphabet was used in the word. For example:
# # $ python letter_histogram.py Please enter a word: banana {'a': 3, 'b': 1, 'n': 2}
# # In this exercise, are you using dynamic keys or fixed keys?

# def letter_histogram():
#     letterDictionary = {}
#     word = input("Please enter a word: ")
#     dictionaryKeys = letterDictionary.keys()
#     for letter in word:
#         if letter not in dictionaryKeys:
#             letterDictionary[letter] = 1
#         elif letter in dictionaryKeys:
#             letterDictionary[letter] += 1

#     print(letterDictionary)


# letter_histogram()

# Exercise 4: Word Summary
# Write a word_histogram program that asks the user for a sentence as its input, and prints a dictionary containing the tally of how many times each word in the alphabet was used in the text. For example:
# $ python word_histogram.py Please enter a sentence: To be or not to be {'to': 2, 'be': 2, 'or': 1, 'not': 1}
# In this exercise, are you using dynamic keys or fixed keys?

# def word_histogram():
#     wordDictionary = {}
#     dictionaryKeys = wordDictionary.keys()
#     sentence = input("Please enter a sentence: ")
#     newList = sentence.split()
#     for word in newList:
#         if word not in dictionaryKeys:
#             wordDictionary[word] = 1
#         elif word in dictionaryKeys:
#             wordDictionary[word] += 1

#     print(wordDictionary)


# word_histogram()

# # Exercise 5: Bonus Challenge
# # Given a histogram tally (one returned from either letter_histogram or word_summary), print the top 3 words or letters.

def histogram_tally():
    # This is a sort key, which has nothing to do with a dictionary key. This goes into the 'key' part of sorted(), which takes a callback function. A callback function is a function that's passed as an argument to another function.
    def get_value(item):
        return item[1]
    letterDictionary = {}
    word = input("Please enter a word with at least 3 letters: ")
    dictionaryKeys = letterDictionary.keys()
    while len(word) >= 3:
        for letter in word:
            if letter not in dictionaryKeys:
                letterDictionary[letter] = 1
            elif letter in dictionaryKeys:
                letterDictionary[letter] += 1
        # So on the next line of code, we're sorting letterDictionary by the values. To do that, we're first using items() to retrieve they key/value pairs in tuples. Once we have those, we pass get_value in the key section. The 'items' are the tuples, which are indexed, and we access the values by using index 1. Those values are then sorted highest to lowest because reverse=True.
        # If we don't have a key in the below, or the reverse=True, they're sorted alphabetically based on the key only.
        tally = sorted(letterDictionary.items(), key=get_value, reverse=True)
        print(
            f"The top three letters in the word '{word}' are: \n {tally[0]}\n {tally[1]} \n {tally[2]}")
        return
    print("I'm sorry, please enter a valid word.")


histogram_tally()
