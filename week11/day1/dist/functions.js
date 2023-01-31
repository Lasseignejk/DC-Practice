"use strict";
const sayHello = () => {
    console.log("hello");
};
const chooseRandomNumber = (number) => {
    if (number)
        return number;
    const randomNumber = Math.random();
    const stringedNumber = randomNumber.toString();
    return stringedNumber;
};
console.log(chooseRandomNumber());
