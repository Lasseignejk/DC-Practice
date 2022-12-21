// Given an array of integers between 1 and n, inclusive, where n is the length of the array, write a function that returns the first integer that appears more than once (when the array is read from left to right)

// If no integer appears more than once, your function should return -1. 

// 2 for loops
// data structure 
// you can mutate the original array

array = [2, 1, 5, 2, 3, 3, 4]

function firstDuplicate(array) {
    const duplicates = {};
    for (const num of array) {
        duplicates[num] = 1
        if (num in duplicates) {
            duplicates[num] += 1
        }
    }
    console.log(duplicates)
}
firstDuplicate(array)

// function firstDuplicate(array) {

// }
// firstDuplicate(array)

const firstDup = (numberArray) => {
    let myNumberSet = new Set();

    for(const number of numberArray) {
        if (myNumberSet.has(number)) {
            return number;
        } else {
            myNumberSet.add(number);
        }
    }
    console.log(myNumberSet);
    return -1;
}
console.log(firstDup([1, 2, 2, 3, 4, 4]))