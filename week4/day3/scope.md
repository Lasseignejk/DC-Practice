# Scope

Global variables are variables that you can access anywhere. They are usually defined at the top of a document because computers read things top to bottom. No matter where you are in the document, you can access it. In python, all variables are global variables.

If you define a variable inside a function, it can only be accessed within that function.

// global scope variable
const globalName = "joe";

function consoleLogAName() {
// local scope variable
const ta = "ethan";
console.log(globalName);
}

console.log(ta); ta is a local variable attached to consoleLogAName. If you try to console.log it like this, you'll get an error 'ta is not defined.'

When you define a variable/function with var, it is hoisted to the top of the program in a different way. let and const will stay in a block/local scope, but var can get hoisted up in a different way. It can mess stuff up or make it act in a way you don't expect. That's why we don't really use var.
