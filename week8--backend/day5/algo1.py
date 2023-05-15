#  write a function that takes in an array of strings and groups anagrams together. Anagrams are strings made up of exactly the same letters, where order doesn't matter. For example, 'cinema' and 'iceman' are anagrams. Your function should return a list of anagram groups, in no particular order.

# words = ['yo','act','flop','tac','foo','cat','oy','oflp']
# expected output: [['yo', 'oy'], ['flop', 'olfp'], ['act', 'tac', 'cat'], ['foo']]

# sort the array by length. then, separate into different arrays by length and check letters

# def groupAnagrams(words):
#     def findLength(words):
#         return len(words)
#     if words == []:
#         return []
#     words.sort(key=findLength)
    # words = [yo, oy, act, tac, foo, cat, flop, oflp]
    # result = []
    # firstWord = words.pop(0)
    # # firstWord = yo
    # result[0].append(firstWord)

    # while len(words)-1 > 0:
    #     result.append([])
    #     for i in range(len(words)):
    #         if len(words[i]) == len(firstWord):
    #             popWord = words.pop(i)
    #             result[i].append(popWord)
    #         else: 
    #             break
    #     break

    # for i in range(len(words)):
    #     if len(words[i]) == len(firstWord):
    #         result[0].append(words[i])
    #     else: 
    #         nextArray = []
    #         checkWord = words[i]
    #         nextArray.append(words[i])
    #         result.append(nextArray)
#     print(result)



# groupAnagrams(words)


# solution
# one method is to go through each string and alphabatize them, then sort them alphabetically. Then if two strings are equal, they are anagrams. However, then you have the problem of all the strings are the same. The expected output is the words from the original array. Once you alphabatize the words, how do you get the original words back? 
# Make a secondary array with indexs of the sorted array., which is the same indexes as the original array. 
# method 2 is to use a hash table(essentially an object). iterate through the array, alphabatize each word, then put it in a hash table. Turn yo into 'oy', do we have 'oy' in our hash table, no, then put it in the hash table. turn 'act' into 'act', is act in our hash table, no, add it to the hash table. ect. turn 'tac' into 'act' do we have 'act' in the hash table, yes, then append it on that part of the hash table. 
words = ['yo','act','flop','tac','foo','cat','oy','oflp']

def groupAnagrams(words):
    anagrams = {}
    for word in words:
        sortedWord = "".join(sorted(word))
        # sortedWord = oy, act, flop, act, foo, act, oy, flop
        # so this line alphabatizes each word
        if sortedWord in anagrams:
            anagrams[sortedWord].append(word)
            # if oy is in anagrams, append the WORD at that key
        else:
            anagrams[sortedWord] = [word]
            # if oy is NOT in anagrams, put a new key/value pair in anagrams, where the sorted word, oy, is the key, and the WORD, yo, is the value

    # anagrams = {oy: [yo, oy], act: [act, tac, cat], flop: [flop, oflp], foo: [foo]}
    print(list(anagrams.values()))

groupAnagrams(words)