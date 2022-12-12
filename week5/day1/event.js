const buttons = document.querySelectorAll(".numberButtons")
let numbersToAdd = [];
const total = document.querySelector(".total")
const totalTag = document.querySelector(".totalTag")

const calculation = (number) => {
    numbersToAdd.push(number)
    console.log(numbersToAdd)
}

const calcTotal = () => {
    console.log(totalTag);
    console.log(totalTag.childNodes);
    totalTag.innerHTML = "";
    const firstNumber = Number(numbersToAdd[0]);
    const secondNumber = Number(numbersToAdd[2]);
    const sum = firstNumber + secondNumber;
    const newText = sum;

    totalTag.append(newText);
    console.log(sum);
    numbersToAdd = [];
}

total.addEventListener("click", calcTotal);

for (const button of buttons) {
    // if you write it like below, it will immediately console log. You add the anonymous function to delay the console log until the click
    // button.addEventListener("click", console.log("button clicked"))
    button.addEventListener("click", (e) => (calculation(e.target.innerText)))
}
// same as a for/of loop
// buttons.forEach(button => console.log(button))