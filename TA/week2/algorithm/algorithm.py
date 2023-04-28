# can't use if/else

# def fizzBuzz(n):
#     answer = []
#     for i in range(1, n+1):
#         if i % 3 == 0 and i % 5 == 0:
#             answer.append("FizzBuzz")
#         elif i % 3 == 0:
#             answer.append("Fizz")
#         elif i % 5 == 0:
#             answer.append("Buzz")
#         else:
#             answer.append(i)
#     print(answer)


# fizzBuzz(15)

# for each number between 1 and n,
# make an object, store values in there. then print values up to n
# loop through, divide all numbers by 3, filter out floats
# loop through, divide all numbers by 5, filter out floats
# loop through, divide each number by 3 and 5, compare to 0


# def fizzBuzz(n):
#     answer = []
#     for i in range(1, n+1):


# write a function that takes an array of strings as an argument and returns a new array with all the strings sorted in alphabetical order.

fruits = ["apple", "banana", "orange", "grape", "kiwi"]
fruits2 = ["a", "z", "aaa", "b", "g", "bb"]


def alphabetizeFruits(arr):
    sortedArr = []
    for i in range(0, len(arr)):
        minFruit = arr.index(min(arr))
        sortedArr.append(arr[minFruit])
        arr.pop(minFruit)
    print(sortedArr)


alphabetizeFruits(fruits2)
