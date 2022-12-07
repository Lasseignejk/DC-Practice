const numbers = [1, 2, 3, 6, 9, 7, 3, 6, 9, 5, 0, 6, 34, 0, 0, 2, 0, 4, 0];
// in javascript
// remove all zeros 
// sort the list in descending order (highest to lowest)
// at the very end, add your name to the end of the array as a string
// return that array
// will also be testing with an empty array

num = []

function problem(arr = "Please type an array") {
    //     for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === 0) {
    //         arr.splice(i, 1);
    //     }
    // }
    // console.log(arr)

        arr.sort(function(a,b){return b-a});
        arr = arr.filter(function(item) {
            return item !== 0
        })
        arr.push("Jaye")
        console.log(arr)
    // return arr;
}

problem(numbers);


// a solution
function problem(arr){
    const newArr = arr?.filter((item) => item !==0).sort((a,b) => b - a);
    newArr.push("joe");
    console.log(newArr);
    return newArr;
}



