// select, create/modify, append

const calcDiv = document.querySelector(".mainContainer");

// select
// this returns an object/dictionary
const calcButton = document.querySelectorAll(".num")
const calcOperator = document.querySelectorAll(".operator")


for (const button of Object.values(calcButton)) {
    button.addEventListener("click", () => {
        console.log(button.value)
    })
}
for (const button of Object.values(calcOperator)) {
    button.addEventListener("click", () => {
        console.log(button.value)
    })
}


