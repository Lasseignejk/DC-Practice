function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      if (!timer) {
        func.apply(this, args);
      }
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = undefined;
      }, timeout);
    };
  }
function saveInput(){
    console.log("You are scrolling!");}
const stopBounce = debounce(() => saveInput());
// Small
// Log Button Click -- Create a button that logs "Button Pressed" to the console when clicked 
const container = document.querySelector(".mainContainer");
//create
logButton = document.createElement("button");
//modify
logButton.innerText = "Button"
logButton.addEventListener("click", () => {console.log("Button Pressed")});
//append
container.append(logButton)

//Log Button Pressed -- Create a button that logs "You Left Clicked" to the console when clicked.

pressButton = document.createElement("button");
pressButton.innerText = "Press here";
pressButton.addEventListener("click", ()=> {console.log("You Left Clicked")});
container.append(pressButton)

// Add a scroll event -- Add an event to log "You Changed the Size of the Window!" to the console when a user resizes the browser. The following code is how you would add a 'resize' event. You can use this as a prompt to start the 'scroll' event. 
    // window.addEventListener('scroll', () => {
    //     console.log('You are scrolling!')
    // })
    window.addEventListener('scroll', stopBounce);

// Medium
// Shopping List -- Create a shopping list using event listeners and DOM elements. Use input elements to enter in new items for a shopping list. Add a button to submit inputs and render the input values to the DOM. Add a button to the DOM for each new item in shopping list that can be used to remove the item.
const addButton = document.querySelector(".addItemButton")
addButton.addEventListener("click", getValue);
addButton.addEventListener("click", updateList);

const addButtons = updateList()

itemButton.addEventListener("click", () => {
    console.log("Get this item!")
})

function getValue() {
    let inputValue = document.getElementById("input").value;
    return inputValue;

}
function updateList() {
    let shoppingList = document.querySelector(".shopping")
    itemButton = document.createElement("button")
    itemButton.innerText = getValue()
    itemButton.setAttribute('class', 'b1')
    shoppingList.append(itemButton)
}

function removeItem() {
    document.querySelector("b1").remove()
}
