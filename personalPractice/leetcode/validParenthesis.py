# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.

# s = "()"
# output: true

s = "()[]{}}"

def isValid(s):
    stack = []
    brackets = { ")": "(", "]": "[", "}":"{"}
    for item in s:
        if item in brackets: 
            if stack and stack[-1] == brackets[item]:
                stack.pop()
            else:
                print(False)
        else:
            stack.append(item)
    if stack == []:
        print(stack)
        print(True)
    else:
        print(False)

isValid(s)

