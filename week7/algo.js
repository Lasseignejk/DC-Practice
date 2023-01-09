// curried sum 
// curriedSum() // 0
//curriedSum(1) // 1
// curriedSum(1)(3) // 4
// curriedSum(1)(3)(5)(8) // 17

// hint1 
// what is being returned? is it += total? can you return a function? think recursion

// const curriedSum = (num1) => {
//     let total = 0
//     if (num1 === undefined) {
//         console.log(total)
//     } else {
//         total += num1
//         curriedSum()
//     }
//     console.log(total)
// }

// curriedSum(3)

// const curriedSum = (num1, num2) => {
//     if (num1 === undefined) {
//         console.log(0)
//     } else {
//         if (num2 === undefined) {
//             console.log(num1)
//         } else {
//             console.log(num1 + num2)
//         }
//     }
// }
// curriedSum(4, 3)

//binary sort 
// length of this array is 9
array = [0,1,21,33,45,61,71,72,73]
target = 21
// should return 3

function binarySort(array, targetNum) {
    let num = 0;
    while (num !== targetNum) {
        let length = array.length
        let index = Math.floor(length / 2) - 1
        let num = array[index]
        if (num === targetNum) {
            console.log(index)
            break
        } else if (num > targetNum) {
            let newArray = array.slice(0,index)
            let newIndex = Math.floor(newArray.length / 2)
            let num = newArray[newIndex]
            if (num === targetNum) {
                console.log("Good job, you found the target num")
                console.log(newIndex)
                break
            } else {
                console.log("Not yet, try again")
                break
            }
        } 
        // else {
        //     let newArray = array.slice(index + 1)
        //     let newIndex = Math.floor(newArray.length / 2)
        //     let num = newArray[newIndex]
        //     console.log(num)
        //     break
        // }
    }
}


binarySort(array, target)

