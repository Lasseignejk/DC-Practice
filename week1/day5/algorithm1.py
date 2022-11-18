# end result: numbers = [1,2,2,2,3,5,7,9,0,0,0,0]
numbers = [1, 2, 5, 0, 7, 0, 9, 0, 2, 0, 2, 3]

numbers.sort()
# [0 0 0 0 1 2 2 2 3 5 7 9]
# So next, move the 0s to the right side of the list

for num in numbers:
    if num == 0:
        numbers.remove(numbers[0])
        numbers.append(0)

print(numbers)

# numbers.remove(0) will only remove 2, because when that code runs it's not picking up anymore 0s.
# So it looks at the 1st 0, deletes the second, loops again. Looks at the 3rd 0, deletes the fourth. There are no more 0s so it ends.
# If you don't have the remove() line of code, then you add a 0 to the end and as you loop through, there will always always always be another 0 so you get caught in an infinite loop

# numbers.append(numbers.pop(num))   also work
