# // Write a function that takes a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.
# // return an array

# // plan for negative numbers. negative times negative is a positive

# //loop through, multiply it by itself, sort ascending
# // sample output [1, 4, 9, 25, 36, 64, 81]

array = [1, 2, 5, 9, 7, -6]

# function squaredArray(array) {
#     const newArray = []
#     array.forEach(num => {
#         newArray.push(num * num)
#     });
#     newArray.sort(function(a,b) {return a-b})
#     return newArray
# }

# squaredArray(array)


def squaredArray(list):
    newList = []
    for num in list:
        newList.append(num * num)
    sortedList = sorted(newList)
    return sortedList


squaredArray(array)
