// print statement
console.log("Hello World")

// let is used to define a variable that you can reassign.
let houston = "hot";
houston = 2;
console.log(houston);

// const is the same but it stands for CONSTANT. It can only be what you define it.
const ethan = "a cool dude";
console.log(ethan);

// functions
// def is how we wrote it in python. in javascript, we have two ways.
// we also don't use a colon after the parenthesis. we use curly braces.

function printMyName(name) {
    console.log(name)
}
printMyName(1, 5);

// es6 function or arrow function
const ethanIsCool = (firstMsg, secondMsg) => {
    console.log(firstMsg, secondMsg)
}
ethanIsCool("hippity hoppity", "get off my property");

// arrays
let fruits = ["banana", "apple", "cowboy"];
console.log(fruits[2]);
console.log(fruits[1]);
// use .push to add something to the end of an array
fruits.push("strawberry");
console.log(fruits);

// filter below says go into the array fruits, if there's something equal to strawberry, filter it out and put it in the new variable newfruit. throw out everything else. Will print out everything that meets the condition you set. 
const newfruit = fruits.filter((fruit) => fruit === "strawberry");

// const newfruit = fruits.filter((fruit) => {
//     if(fruit === "strawberry"){
//         return 1;
//     }
// })
console.log(newfruit);

// loops
// python:   for singular in plural: blah blah
// for of loops are for arrays/lists
for (const fruit of fruits) {
    console.log(fruit)
}
// This is the same as the for of loop, just a shorter syntax
fruits.forEach((fruit) => console.log(fruit));

// for in loops are for objects/dictionaries
// for (const key in object) {
// }

//objects
const student = {
    name: "Jaye",
};
console.log(student["name"]);
console.log(student.name);

student.lastName = "Lasseigne"
student["age"] = "20";
console.log(student);

// to loop through an object...
for (const key in student) {
    console.log(student[key]);
}
// this will print out keys/values/key-value pairs in arrays.
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

// if statements 
// python: if this then that
const teacher = "Joe"
if(teacher === "Joe") {
    console.log(`${teacher} is your teacher.`)
} else {
    console.log(`${teacher} is your teacher.`)
}

console.log(teacher + " is the teacher");