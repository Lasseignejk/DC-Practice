// as a user:
// [] add a todo in an input list and then click or hit enter to add it to my page.
// [] I will have the input field cleared out after I submit a todo
// [] I will be able to delete a todo if I add one by clicking a red x next to each todo
// [] I will be able to persist all the data if I am so smart and figured this all out so that my todo survives a refresh

const addButton = document.querySelector(".submit")
const todoList = document.querySelector(".todoList")
const inputValue = document.getElementById("input")




addButton.addEventListener("click", getValue)
inputValue.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTodo()
    }
})
addButton.addEventListener("click", addTodo)




function getValue() {
return inputValue.value
}

function addTodo() {
    const item = document.createElement("li");
    item.innerHTML = getValue()
    item.innerHTML += `<i class="fa-solid fa-trash-can trash"></i>`
    todoList.append(item)
    inputValue.value = ""
    const trash = document.querySelector(".trash")
    trash.addEventListener("click", () => removeTodo(item))
}



function removeTodo(item) {

    console.log(item)
}