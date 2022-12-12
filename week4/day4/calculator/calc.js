// select, create/modify, append

// select
const calcDiv = document.querySelector(".calculator");
const screen = document.querySelector(".numScreen")
const userMathDiv = document.querySelector(".math")
const answerDiv = document.querySelector(".answer")
// this returns an object/dictionary? array?
const calcButton = document.querySelectorAll(".num")
const calcOperator = document.querySelectorAll(".operator")
const result = document.querySelector(".result")
const clear = document.querySelector(".clear")
    
let digits = [];
let equation = [];
const space = " ";

for (const button of Object.values(calcButton)) {
    button.addEventListener("click", () => {
        console.log(button.value);
        userMathDiv.innerText += button.value;
        digits.push(button.value)
    });
    button.addEventListener("mousedown", () => {
        button.classList.add("mouseDown")
    });
    button.addEventListener("mouseup", () => {
        button.classList.remove("mouseDown")
    });
}

for (const button of Object.values(calcOperator)) {
    button.addEventListener("click", () => {
        console.log(button.value)
        userMathDiv.innerText += button.value;
        userMathDiv.innerText += space;
        let userNumber = digits.join('');
        console.log(userNumber);
        equation.push(userNumber);
        equation.push(button.value);
        console.log(equation);
        digits.length = 0;
        userMathDiv.innerText += space;
    });
    button.addEventListener("mousedown", () => {
        button.classList.add("mouseDown")
    });
    button.addEventListener("mouseup", () => {
        button.classList.remove("mouseDown")
    });
}

result.addEventListener("click", () => {
    let lastUserNumber = digits.join('');
    console.log(lastUserNumber)
    equation.push(lastUserNumber)
    let answer = equation.join('');
    let realAnswer = eval?.(`"use strict";(${answer})`)
    console.log(realAnswer)
    answerDiv.innerText = realAnswer
})

result.addEventListener("mousedown", () => {
    result.classList.add("mouseDown")
})
result.addEventListener("mouseup", () => {
    result.classList.remove("mouseDown")
})

clear.addEventListener("click", () => {
    digits.length = 0;
    equation.length = 0;
    answerDiv.innerText = ""
    userMathDiv.innerText = ""
})
clear.addEventListener("mousedown", () => {
    clear.classList.add("mouseDown")
})
clear.addEventListener("mouseup", () => {
    clear.classList.remove("mouseDown")
})
