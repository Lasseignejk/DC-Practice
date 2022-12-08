// select, create/modify, append



// select
const calcDiv = document.querySelector(".mainContainer");
const screen = document.querySelector(".numScreen")
// this returns an object/dictionary
const calcButton = document.querySelectorAll(".num")
const calcOperator = document.querySelectorAll(".operator")
const result = document.querySelector(".result")

let notResult = true
    
// }
let digits = [];
let equation = []

    for (const button of Object.values(calcButton)) {
        button.addEventListener("click", () => {
            console.log(button.value)
        })
        button.addEventListener("click", () => {screen.innerText += button.value})
        button.addEventListener("click", () => {digits.push(button.value)})
    }

    for (const button of Object.values(calcOperator)) {
        button.addEventListener("click", () => {
            console.log(button.value)
        })
        button.addEventListener("click", () => {screen.innerText += button.value})
        button.addEventListener("click", () => {
            let userNumber = digits.join('');
            console.log(userNumber)
            equation.push(userNumber)
            equation.push(button.value)
            console.log(equation)
        })
        button.addEventListener("click", () => {
            digits.length = 0;
        })
    }

    result.addEventListener("click", () => {
        let lastUserNumber = digits.join('');
        console.log(lastUserNumber)
        equation.push(lastUserNumber)
        let answer = equation.join('');
        let realAnswer = eval?.(`"use strict";(${answer})`)
        console.log(realAnswer)
        screen.innerText = realAnswer
    })



// function userPushEqual() {
    
// }

// function addToScreen() {
// screen.innerText = button.value
// }

