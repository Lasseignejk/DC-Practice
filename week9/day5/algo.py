# balanced brackets 
# use a stack

# START AT 10:15

# write a function taht takes in a tring made up of brackets (,[,{}]) and other optional characters. The function should return a boolean representing whether the string is balanced with regards to brackets. 

# A string is said to be balanced if it has as many opening brackets of a certain type as it has closing brackets of that type and if no bracket is unmatched. Note that an opening bracket can't match a corresponding closing bracket that comes before it, and similarly, a closing bracket can't match a corresponding opening bracket that comes after it. Also, brackets can't overlap each other as in [(])

# sample input
# string = "([])(){}(())()()"

# string = "()"
# string = "(]"
# string = "()[]{}"
# string = "({)}"
# string = "()()((}}"

string = "()()[{()})]"
# string:"()(agawg)[{()gawggaw})]"
# should return false but returns true with my current code. passed 18/24 test cases


# def isBalanced(string):
#     stack = []
#     if string == "":
#         print(False)
#     else:
#         for character in string:
#             if character == "{" or character == "[" or character == "(":
#                 stack.append(character)
#             elif character == "}" and stack[-1] == "{" or character == ")" and stack[-1] == "(" or character == "]" and stack[-1] == "[":
#                 stack.pop()
            
#     if stack == []:
#         print(True)
#     else:
#         print(False)

# isBalanced(string)

# joe's solution
def isBalanced(string):

    openingBrackets = '([{'
    closingBrackets = '}])'
    hashTable = {
        "]": "[",
        ")": "(",
        "}": "{"
    }

    stack = []
    for character in string:
        # check if the character is in our openingbrackets 
        if openingBrackets.includes(character):
            stack.append(character)
        elif closingBrackets.includes(character):
            if stack[len(stack)-1] == hashTable[character]:
                stack.pop()
            else:
                print(False)
    if len(stack) == 0:
        print(True)
