// let function1 = () => {
//     return 1;
// }

// function funFunction() {
//     console.log("hello holder");
// }

// // a function by reference. tells you the location 
// let holder = funFunction;

// // a function by value 
// let holder2 = function1();

// What's the difference between a function by reference vs a function by value? good interview question





// What will print out? 
// for (var i = 0; i < 5; i++) {
//     setTimeout(() => console.log(i), 1000);
// }

// It will print out 5 5 5 5 5 each on their own line after waiting for a second. Why? VAR 
// If you change var to let, it'll print 0 1 2 3 4 like you'd think.

// do NOT use var unless you know how it works


// to add arrays together, you can use .concat() or spread
// concat does not change the existing array but returns a new array. 
// spread works with arrays and objects
// syntax is ... and it has to go before whatever it is that you're trying to spread. Think of it like you're removing the ends off your data.
// concat is good for combining two things. spread is good when you want to add multiple things together.
// spread is relatively new, within the last 10 years or so
const students = ["meg", "jessika", "peter"];
const newStudent = ["jaye", "mauro"];
const spreadStudents = [...students, ...newStudent];
const allStudents = students.concat(newStudent);
console.log(allStudents)
console.log(spreadStudents)

// ternary
const temp = "hot"
const howDoesItFeel = temp === "hot" ? "It's really hot" : "It's really cool";
console.log(howDoesItFeel)
// "It's really hot"
// ternary is ONLY for two values. If temp = "cool", it would print "It's really cool." So it checks the first part -- is temp === to hot? Yes, it is. So it prints the first message. If temp = "cool" then the first part will be false and it will print the second part. 

const userStatusLoggedIn = false;
const loginMessage =
userStatusLoggedIn === true ? "Welcome to your dashboard" : "Login please";
console.log(userStatusLoggedIn)
// "Login please"

// logical and operator 
// &&, AND 
joe = "teacher"
ethan = "ta"
if (joe === "teacher" && ethan === "ta") {
    console.log("this is the 11-22 cohort");
}

// logical or operator
// || called pipes 
if (joe === "teacher" || dre === "teacher") {
    console.log("this is the 11-22 cohort");
}

// default arguments in functions
const printAName = (name = "Please enter a name") => {
    // const teacher = "joe"
    // // string interpolation
    // console.log(`${teacher} is your teacher.`)
    if(typeof name !== "string"){
        console.log("enter a valid string");
        return;
    }
    console.log(name);
};
printAName("dre");
// "dre"
printAName();
// "Please enter a name"
printAName(123)
// "enter a valid string"

// Always provide a default argument.


// anonymous function
// third way to make a function. anonymous because it doesn't have a name 
// you only use these functions only once. usually used inside a method (like filter or sort)
// you don't even need the {}. Those are really only used when the code is longer than one line. Don't need a return statement either
// as long as you make i the second argument in an anonymous function, that is the index (in most arrays)
// typically use in array methods

// look up array.reduce()   it's very very powerful. be confident at it