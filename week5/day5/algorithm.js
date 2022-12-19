// # You are going to write a function that will take in a string of letters.  You will have to return to me how many times each letter appears in the function.  Please return all your results in an array.
// # check if the string is blank
// # order doesn't matter


// iterate through the string, as you iterate, put letter in dictionary as a key with a value of 1. as you iterate through, if that letter is already in the dictionary, add 1 to the value. At the end, print the key/value pairs

function lettersAppear(string) {
    letterValues = [{}]
    for (const letter of string) {
        letterValues[0][letter] = 1;
    }
    console.log(letterValues)
}

lettersAppear("hello")
