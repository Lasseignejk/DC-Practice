# Write a function that takes a string as input and returns true if the string is a palindrome(a word, phrase, or sequence that reads the same backwards as forwards).


# abba // true
# tacocat // true
# abbc // false

# loop forwards at each letter, check the letter at the end

# string = "abbc"
string = "A man, a plan, a canal. Panama"


# def palindrome(string):
#     print(string[::1] == string)


# palindrome(string)

def checkCharacters(letter):
    characters = ["*", ",", ".", " ", "!"]
    if letter in characters:
        print("special character found")
        return ""


def palindrome(string):
    filteredString = filter(checkCharacters, string)
    print(filteredString)


palindrome(string)
