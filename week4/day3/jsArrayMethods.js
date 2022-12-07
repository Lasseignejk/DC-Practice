const inventory = [
    {name: "bike", price: 100},
    {name: "TV", price: 200},
    {name: "Book", price: 15},
    {name: "Peanut Butter", price: 5},
    {name: "Jacket", price: 20},
    {name: "Computer", price: 250}
]
const numbers = [0, 1, 5, 0, 99, 100, 63, 45]


// .filter
const filteredItems = inventory.filter((item) => {
    // iterate through inventory, filter out each item that has a price less than or equal to 100
    return item.price <= 100;
})
// .filter returns another array and does NOT destroy the original array.
// console.log(filteredItems)
const filteredNumbers = numbers.filter((num) => {
    return num !== 0;
    // return num < 10;
})
// console.log(filteredNumbers)


// .map
const itemNames = inventory.map((item) => {
    // iterate through inventory, take all the names and put them into a new array. This array just has strings in it, no objects.
    return item.name
})
// console.log(itemNames)
const doubleNums = numbers.map((num) => {
    return num * 2
})
// console.log(doubleNums)


// .find
const foundItem = inventory.find((item) => {
    // iterate through inventory, find the item with the name of Peanut Butter and return it. If it doesn't exist, it'll return undefined. So for example, finding "Peanut Butter" will return the dictionary {name: 'Peanut Butter', price: 5}. Be careful! It's not an array anymore!
    return item.name === "Peanut Butter"
})
// console.log(foundItem)
const foundNum = numbers.find((num) => {
    // returns an integer, not an array.
    return num === 5
})
// console.log(foundNum)


// .forEach
// very similar to a for loop, syntax is shorter
// inventory.forEach((item) => {
//     // iterate through inventory, print the names of each item
//     console.log(item.name)
// })
// numbers.forEach((num) => {
//     console.log(num)
// })


// .some
// Different from the ones we've looked at so far, in that it returns true or false.
const hasInexpensiveItems = inventory.some((item) => {
    // iterate through inventory, check if there are any items where the price is less than or equal to 100. As soon as it hits a price that meets that condition, it will return TRUE. It doesn't print out the items that meet the condition, it only tells you that there is at least 1 thing that meets the condition. If nothing meets the condition, it'll return false
    return item.price <= 100
})
// console.log(hasInexpensiveItems)
const hasLowNumber = numbers.some((num) => {
    return num > 1000
})
// console.log(hasLowNumber)


// .every 
// Very similar to .some except that it checks EVERY item against the condition.
const isAppleStore = inventory.every((item) => {
    return item.price > 200
})
// console.log(isAppleStore)
const isLow = numbers.every((num) => {
    return num <= 100
})
// console.log(isLow)


// .reduce
// If you want to get the total price of everything in inventory, usually you'd have to loop through and continually update a new variable. Reduce does that using much less code. 
// iterate through inventory. for each item, add its price to the currentTotal. currentTotal starts at 0, which is that 0 outside of the function, which is actually the 2nd argument. 
const total = inventory.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)
// console.log(total)
const totalNum = numbers.reduce((currentTotal, num) => {
    return num + currentTotal
}, 0)
// console.log(totalNum)


// .includes
// Goes through the array and checks it for the argument. If it finds it, returns true. Is basically the same as .find, but is less complicated so easier to use for simple arrays with just numbers or strings
const includesZero = numbers.includes(0)
console.log(includesZero)