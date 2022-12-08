console.log(window);
console.log(document);
// you have to select what it is you want to change
// select
const helloHeader = document.getElementById("hello");
console.log(helloHeader);
const helloHeader2 = document.getElementsByClassName("hello");
console.log(helloHeader2[0]);

const student = document.getElementsByClassName("vinny");
console.log(student);

const faculty = document.querySelector("#joe");
const faculty2 = document.querySelector(".ethan");
console.log(faculty)
const ethan = document.querySelector(".ethan");
ethan.innerText = "the best TA";


// you then can create, modify, or delete whatever you want on what you selected

// create
ethan.innerText = "the best TA";


//modify



// you then append it back to the DOM 
// append


// SELECT 
const jayesDiv = document.querySelector(".jaye1")

//CREATE
const JayesTitle = document.createElement("h2");
const jayebutton = document.createElement("button");

// MODIFY
JayesTitle.innerText = "student"
jayebutton.innerText = "hi Jaye"

// APPEND
jayesDiv.append(JayesTitle);
jayesDiv.append(jayebutton);

// so why do we bother doing all this? why not just hardcode all of this? 
// Adding something to your cart on a website is a good example. Someone isn't just sitting at a computer somewhere writing up all this html immediately when you click on 'add to cart' on something. that dynamic element is possible because of javascript
// or a weather website. The layout doesn't change for each city/location. the DATA does though. 