// as a user:
// [x] add a todo in an input list and then click or hit enter to add it to my page.
// [x] I will have the input field cleared out after I submit a todo
// [] I will be able to delete a todo if I add one by clicking a red x next to each todo
// [] I will be able to persist all the data if I am so smart and figured this all out so that my todo survives a refresh

const addButton = document.querySelector(".submit")
const todoList = document.querySelector(".todoList")
const inputValue = document.getElementById("input")
const toLocalStorage = []
const inLocalStorage = localStorage.getItem("todoItems")
console.log(inLocalStorage)

checkLocalStorage()


inputValue.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTodo()
    }
})
addButton.addEventListener("click", addTodo)

function addTodo() {
    const itemContainer = document.createElement("div");
    const item = document.createElement("li");
    const deleteButton = document.createElement("button")

    item.innerHTML = inputValue.value

    toLocalStorage.push(inputValue.value)
    console.log(toLocalStorage)
    localStorage.setItem("todoItems", toLocalStorage)

    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can trash"></i>`

    itemContainer.append(item, deleteButton)
    todoList.append(itemContainer)

    inputValue.value = ""

    deleteButton.addEventListener("click", () => removeTodo(itemContainer))
}

function removeTodo(div) {
div.remove()
}

function checkLocalStorage() {
    
    const inLocalStorage = localStorage.getItem("todoItems")
    console.log(inLocalStorage)
    if (inLocalStorage.length !=0) {
        const storedTodos = inLocalStorage.split(",")
        console.log(storedTodos)
        storedTodos.forEach(todo => {
            const itemContainer = document.createElement("div");
            const item = document.createElement("li");
            const deleteButton = document.createElement("button")
        
            item.innerHTML = todo
        
            deleteButton.innerHTML = `<i class="fa-solid fa-trash-can trash"></i>`
        
            itemContainer.append(item, deleteButton)
            todoList.append(itemContainer)
        
            inputValue.value = ""
        
            deleteButton.addEventListener("click", () => removeTodo(itemContainer))
        })

    }
}