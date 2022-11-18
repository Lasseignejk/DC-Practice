

# def factorial():
#     totalNumber = 0
#     number = int(input("Give me your number: \n"))
#     for num in range(1, number):
#         totalNumber = number * num
#     print("Your number is ", totalNumber)

def factorial():
    num = 1
    totalNumber = 1
    number = int(input("Give me your number: \n"))
    # while num(1) is less than number(7), multiply the totalNumber(1) by num(1) and update totalNumber. Then add 1 to num and repeat.
    # round 1: 1 = 1*num(1)
    # round 2: 2 = 1*num(2)
    # round 3: 6 = 2*num(3)
    # round 4: 24 = 6*num(4)
    while num < number:
        totalNumber += totalNumber * num
        num += 1
    print("Your number is ", totalNumber)


factorial()


# Adam's palindrome code
word = input('Input a word to palindrate \n')

counter = 1
isPalindrome = True
for letter in word:
    if letter != word[-counter]:
        isPalindrome = False
    counter = counter + 1

print(isPalindrome)

# Joe's solution:


def palindrome(word):
    # using :: reverses the word
    if (word == word[::-1]):
        return True
    return False

# Prime Number checker
