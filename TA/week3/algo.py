# You will be given a random string of letters.  The letters are in any order and can be capitalized or lowercase.  You are going to return an object that lets me know how many times each letter appeared in the string I gave you.


# For example: If I give a string "aabbcc", this should return {
#     a: 2, b: 2, c: 2
# } as the return value

# My version: string can contain capital letters and spaces

# make a hash map, if it's not in the hash map add it, if it is, increase the value

# loop through, check each value against the hash map

string = "abcABCABBacc d"
# string = "aa    b"


def howManyLetters(string):
    hashMap = {}
    for letter in string:
        if letter == " ":
            pass
        elif letter in hashMap:
            hashMap[letter] += 1
        else:
            hashMap[letter] = 1
    arr = []
    for key in hashMap:
        arr.append(hashMap[key])
    maxNum = max(arr)
    print(maxNum)
    print(arr)

    # print(hashMap)


howManyLetters(string)
