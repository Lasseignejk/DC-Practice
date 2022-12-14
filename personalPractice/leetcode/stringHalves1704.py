# 1st leetcode challenge, 11/30, 21:46 to complete
# You are given a string s of even length. Split this string into two halves of equal lenghts, and let a be the first half and be be the second half.
# Two strings are alike if they have the same number of vowels.
# Return true if a and b are alike, else return false

def halvesAreAlike(s):
    newS = s.lower()
    aVowel = 0
    bVowel = 0
    sLength = len(s)
    half = int(sLength / 2)
    a = slice(half)
    b = slice(half, (len(s)+1))
    for letter in newS[a]:
        if letter == "a" or letter == "e" or letter == "i" or letter == "o" or letter == "u":
            aVowel += 1
    for letter in newS[b]:
        if letter == "a" or letter == "e" or letter == "i" or letter == "o" or letter == "u":
            bVowel += 1
    if aVowel == bVowel:
        print(True)
    else:
        print(False)


halvesAreAlike("Mississippi")

# Overall, thought this was pretty easy. The slicing kinda tripped me up a bit. Wish I could make those loops shorter, but I don't think I can use enumerate with this, even though I don't quite understand enumerate. For time, decided to just finish the problem and not worry about Big O stuff.


# # This solution was found in the comments
# def halvesAreAlike(self, s: str) -> bool:
#     # // means floor division, which I'm doing above by dividing the string length by 2 and making it an integer.
#     mid = len(s) // 2
#     # A colon used on the left side of the index will display everything before the particular index as an output. This will display the index mentioned in the code.
#     a = s[:mid]
#     # A colon on the right side on the index will display everything after that particular index as an output. This will not display the index that is mentioned in the code.
#     b = s[mid:]
#     count = 0
#     vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
#     for i in a:
#         if i in vowels:
#             count += 1

#     for j in b:
#         if j in vowels:
#             count -= 1
#     # iterating through a and adding each time it comes across a variable, then going through b and subtracting each time it comes across a variable. So if the halves have the same amount of values, count should equal 0.
#     return True if count == 0 else False
