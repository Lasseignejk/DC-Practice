# You are going to write a function that will take in a string of letters.  You will have to return to me how many times each letter appears in the function.  Please return all your results in an array.
# check if the string is blank
# order doesn't matter

# iterate through the string, as you iterate, put letter in dictionary as a key with a value of 1. as you iterate through, if that letter is already in the dictionary, add 1 to the value. At the end, print the key/value pairs


# What I submitted
# If I had more time I would fix line 12, the length, and add code to catch uppercase letters
# Code: incorrect
# Explanation: correct
# Study python syntax. don't rely on autofill and google. learn the basic functions

def lettersAppear(string):
    letterValues = [{}]
    if len(letterValues[0]) > 0:
        for letter in string:
            if letter in letterValues[0]:
                letterValues[0][letter] += 1
            else:
                letterValues[0][letter] = 1
    else:
        return

    return (letterValues)


# lettersAppear("Halloween")


# What I got working


def lettersAppear2(string):
    letterValues = [{}]
    for letter in string:
        if letter in letterValues[0]:
            letterValues[0][letter] += 1
        else:
            letterValues[0][letter] = 1
    if len(letterValues[0]) == 0:
        return []

    return (letterValues)


lettersAppear2("hello")
