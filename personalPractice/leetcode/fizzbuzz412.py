# Given an integer n, return a string array answer (1-indexed) where:
# answer[i] == "FizzBuzz" if i is divisible by 3 and 5
# answer[i] == "Fizz" if i is divisible by 3
# answer[i] == "Buzz" if i is divisible by 5
# answer[i] == i(as a string) if none of the above conditions are true.

def fizzBuzz(n):
    list = []
    answer = []
    start = 1
    while start < n:
        list.append(start)
        start += 1
    list.append(n)
    for number in range(1, n+1):
        if number % 5 == 0 and number % 3 == 0:
            answer.append("FizzBuzz")
        elif number % 5 == 0:
            answer.append("Buzz")
        elif number % 3 == 0:
            answer.append("Fizz")
        else:
            answer.append(str(number))
    return (answer)


fizzBuzz(5)

# Submitted the above to Leetcode, then thought of the below right after


def fizzBuzz(n):
    answer = []
    for number in range(1, n+1):
        if number % 5 == 0 and number % 3 == 0:
            answer.append("FizzBuzz")
        elif number % 5 == 0:
            answer.append("Buzz")
        elif number % 3 == 0:
            answer.append("Fizz")
        else:
            answer.append(str(number))
    return (answer)


fizzBuzz(5)
