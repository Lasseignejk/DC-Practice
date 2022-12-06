// Medium

// Madlib
// Write a madlib function, which is given a name and a subject. It will return (not print) a new string: (name)'s favorite subject in school is (subject).
function madlib(name, subject) {
    let sentence = `${name}'s favorite subject in school is ${subject}.`;
    return sentence;
}
// madlib('Jaye', 'science');

// Tip Calculator
// Write a function called tipAmount that is given the bill amount and the level of service (good, fair, and poor) and returns the dollar amount for the tip. Based on: good --> 20%   fair --> 15%   bad --> 10%
function tipAmount(bill, service) {
    if (service === "good") {
        let tip = bill * .2;
        return tip
    }
    if (service === "fair") {
        let tip = bill * .15;
        return tip
    }
    if (service === "bad") {
        let tip = bill * .1;
        return tip
    }
} 
// tipAmount(40, "fair")

// Tip Calculator 2
// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.
function totalAmount(bill, service) {
    function tipAmount(bill, service) {
        if (service === "good") {
            let tip = bill * .2;
            return tip
        }
        if (service === "fair") {
            let tip = bill * .15;
            return tip
        }
        if (service === "bad") {
            let tip = bill * .1;
            return tip
        }
    }
    let tips = tipAmount(bill,service);
    let total = tips + bill;
    return total
}
// totalAmount(100, "good")

// Print Numbers 
// Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line. Write two versions of this function, one with a while loop and the other using a for loop.

const printNumbers = (startnum, endnum) => {
    for (let i = startnum; i < endnum + 1; i++) {
        console.log(i);
    }
}
// printNumbers(1, 10)
const printNumbers2 = (startnum, endnum) => {
    while (num < endnum + 1) {
        console.log(num);
    }
}
// printNumbers(1, 10)

// Print a Square 
// Write a function printSquare which is given a size and prints a square of that size using asterisks. 
const printSquare = (size) => {
    let string = "*"
    for (let i = 1; i < size + 1; i++) {
        console.log(string.repeat([size]))
    }
}
// printSquare(5)

// Print a box 
// Write a function printBox which is given a width and height and prints a hollow box of those given dimensions.
const printBox = (width, height) => {
    let squareW = "--"
    let squareH = "|"
    let space = " "
    console.log(space + squareW.repeat([width]) + space)
    for (let i = 1; i < height + 1; i++) {
            console.log(squareH + space.repeat([width*2]) + squareH)}
    console.log(space + squareW.repeat([width]) + space)
}
// printBox(3, 3)

// Print a Banner
// Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.
const printBanner = (text) => {
    let border = "-"
    let space = " "
    let newText = border + space + text + space + border
    console.log(border.repeat([newText.length]))
    console.log(newText)
    console.log(border.repeat([newText.length]))
}

// printBanner("Hello")

// Leetspeak
// Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions: 
// A --> 4   E --> 3   G --> 6   I --> 1   O --> 0   S --> 5   T --> 7
const leetspeak = (string) => {
    let lower = string.toLowerCase();
    // .replace will only replace the first instance of whatever you're wanting to replace. To get around that, put the thing-you're-searching-for in / / with a g after it. The g marks it as global, meaning it will search the whole thing and replace all instances.
    let leet = lower.replace(/a/g, 4).replace(/e/g, 3).replace(/g/g, 6).replace(/i/g, 1).replace(/o/g, 0).replace(/s/g, 5).replace(/t/g, 7)
    console.log(leet)
}


leetspeak("YEET")