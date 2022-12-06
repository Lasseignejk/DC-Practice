# Learning Javascript

# Variables

you can define a variable in three ways: let, var, and const.

## let

let is used to define a variable that you can reassign.

## const

same as let, but it stands for constant. It can only be what you define it. You CAN redefine it, but you CAN'T change the data type. So if you define it as a string, you can redefine it, but only as a different string. Recommended to make most variables consts.

## var

DON'T USE VAR. We'll go over why later, but for now, never ever ever use it.

# Functions

Way #1 is to use the keyword function, followed by the name of the function with parenthesis after, then curly braces. Any code in the curly braces will run when you call the function.
Parameter is the argument when you define the function, argument is when you call the function

If you define a funciton and give it one parameter, then when you call it and if you pass 2 arguments, it will only print the first arguement because it's only expecting 1 parameter

If you pass two variables, it'll print them with a space in the middle automatically

Way #2 is called es6 functions or arrow functions. You define the function using const functionName = () => {}

In python, functions return none by default. In Javascript, they return undefined by default.

# Loops

for (const fruit of fruits) {
console.log(fruit)
}
Use for of loops for arrays/lists. This syntax can be shortened by using the below:
fruits.forEach((fruit) => console.log(fruit));

for (const key in object) {

}
Use for in loops for objects/dictionaries
