// Hello You! 
// const hello = (name) => {
//     console.log(`Hello, ${name}!`)
// }
// hello("Mustache");



//Hello You! Part 2
const hello = (name) => {
    if (name == undefined) {
        console.log("Hello, world!")
    } else {
    console.log(`Hello, ${name}!`)
    }
}
// hello()



//Madlib 
const madlib = (name, subject) => {
    return `${name}'s favorite subject in school is ${subject}.`
}
// madlib("Jaye", "science")



// Tip Calculator 
function tipAmount(bill, service) {
    if (service == "good") {
        let tip = bill * .2;
        return tip
    }
    if (service == "fair") {
        let tip = bill * .15;
        return tip
    }
    if (service == "bad") {
        let tip = bill * .1;
        return tip
    }
} 
// tipAmount(40, "fair")



// Tip Calculator 2 
function totalAmount(bill, service) {
    function tipAmount(bill, service) {
        if (service == "good") {
            let tip = bill * .2;
            return tip
        }
        if (service == "fair") {
            let tip = bill * .15;
            return tip
        }
        if (service == "bad") {
            let tip = bill * .1;
            return tip
        }
    }
    let tips = tipAmount(bill,service);
    return tips + bill
}
// totalAmount(100, "good")



// Tip Calculator 3
const splitAmount = (bill, service, numppl) => {
    function totalAmount(bill, service) {
        function tipAmount(bill, service) {
            if (service == "good") {
                let tip = bill * .2;
                return tip
            }
            if (service == "fair") {
                let tip = bill * .15;
                return tip
            }
            if (service == "bad") {
                let tip = bill * .1;
                return tip
            }
        }
        let tips = tipAmount(bill,service);
        return tips + bill
    }
    let newTotal = totalAmount(bill, service);
    return newTotal / numppl
}
// splitAmount(40, "fair", 2);