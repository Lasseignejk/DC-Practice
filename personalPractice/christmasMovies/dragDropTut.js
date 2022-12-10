const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const richestPeople = [
    "Elon Musk",
    "Bernard Arnault",
    "Gautam Adani",
    "Jeff Bezos",
    "Warren Buffett",
    "Bill Gates",
    "Larry Ellison",
    "Mukesh Ambani",
    "Carlos Slim Helu",
    "Larry Page"
]

// Store list items
const listItems = [];

let dragStartIndex;

//runs the function as soon as the page loads
createList();

// Insert list items into DOM
function createList() {
    // spread is copying the array. Rememeber, we want the original array to stay unchanged because it is the 10 richest people in order.
    [...richestPeople]
    // map takes the old array and makes a new array. This one will have nested objects with the people's names (under value) and a random number that we'll use to shuffle the list every time we reload the page.
    // iterate through the array, 'a' is each item in the array, or their names. Put each a in a dictionary and give it a key/value pair of sort/random#. 
    .map(a => ({ value: a, sort: Math.random() }))
    // based on the random#, sort the array from highest/lowest number.
    .sort((a, b) => a.sort - b.sort)
    // now that we've sorted, go back through that array and just print out each object's value, which is the name. 
    .map(a => a.value)
    .forEach((person, index) => {
        console.log(person);
        const listItem = document.createElement("li");
        
        listItem.setAttribute("data-index", index);

        listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
        <p class="person-name">${person}</p>
        <i class="fas fa-grip-lines"></i>
        </div
        `;
        listItems.push(listItem);

        draggable_list.appendChild(listItem);

        addEventListeners();
    })
}

function dragStart() {
    // console.log("Event: ", "dragstart")
}
function dragEnter() {
    // console.log("Event: ", "dragenter")
    // this is a keyword that references the item... being entered?
    this.classList.add("over");
}
function dragLeave() {
    // console.log("Event: ", "dragleave")
    this.classList.remove("over");
}
function dragOver() {
    // console.log("Event: ", "dragover")
}
function dragDrop() {
    // console.log("Event: ", "drop")
}


function addEventListeners() {
    const draggables = document.querySelectorAll(".draggable");
    const dragListItems = document.querySelectorAll(".draggable-list li");

    draggables.forEach(draggable => {
        draggable.addEventListener("dragstart", dragStart);
    })

    dragListItems.forEach(item => {
        item.addEventListener("dragover", dragStart);
        item.addEventListener("drop", dragDrop);
        item.addEventListener("dragenter", dragEnter);
        item.addEventListener("dragleave", dragLeave);
    })
}