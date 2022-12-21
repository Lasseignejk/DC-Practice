// Write a function that takes a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order. 
// return an array

// plan for negative numbers. negative times negative is a positive

//loop through, multiply it by itself, sort ascending
// sample output [1, 4, 9, 25, 36, 64, 81]

array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// solution i submitted
// so comparing this one with joe's solution, I didn't need to make a new array to push to and i could've just sorted and returned on the same row
function squaredArray(array) {
    const newArray = []
    array.forEach(num => {
        newArray.push(num * num)
    });
    newArray.sort(function(a,b) {return a-b})
    return newArray
}

squaredArray(array)

// solution i submitted without sort
// function squaredArray2(array) {
//     const newArray = []
//     for (let i=0; i < array.length; i++) {
//         let nextNum = i+1
//         if (nextNum > i) {
//             newArray.push(nextNum * nextNum)
//         }
//     }
//     console.log(newArray)
// }

// squaredArray2(array)

// messing with the indexes and stuff
// function squaredArray3(array) {
//     const newArray = []
//     for (let i=0; i < array.length; i++) {
//         let nextNum = array[i+1];
//         if (nextNum > array[i]) {
//             newArray.push(nextNum * nextNum)
//         }
//     }
//     console.log(newArray)
// }
// squaredArray3(array)

//joe's solution 
// const sortSquareArray = (array) => {
//     for(let i=0; i<array.length; i++) {
//         array[i]* -1;
//         array[i] = array[i] * array[1]
//     }
//     return array.sort((a,b) => a-b);
// }