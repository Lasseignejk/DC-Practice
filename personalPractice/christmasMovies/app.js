// const oldMovies = document.getElementsByClassName("old").value
// const newMovies = document.getElementsByClassName("new").value

// for (const movie of oldMovies) {

// }
const movieContainer = document.querySelector(".mainContainer")

const movies = ["Grinch", "Klaus", "The Holiday", "A Knight Before Christmas", "Elf", "Holidate", "Falling for Christmas", "A Christmas Prince", "White Christmas", "Miracle on 34th Street"]

createList();

function createList(){
  movies.forEach((movie, index) => {
    const oneMovie = document.createElement("div");

    oneMovie.setAttribute("data-index", index);
    oneMovie.classList.add("oneMovie")

    oneMovie.innerHTML = `
    <span class="number">${index+1}</span>
    <div class="draggable" draggable="true">
    <p class="movie-name">${movie}</p>
    <i class="fa-solid fa-gift"></i>
    </div>
    `

    movieContainer.append(oneMovie);
  })
  addEventListeners();
}

function addEventListeners() {
  const draggables = document.querySelectorAll(".draggable");
  const oneMovie = document.querySelectorAll(".oneMovie");
  
  draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", dragStart);
  })
  oneMovie.forEach(item => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
  })
}

function dragStart() {
  dragStartIndex = +this.closest(".oneMovie").getAttribute("data-index");
}

function dragOver(e) {
e.preventDefault();
}

function dragDrop() {
  const dragEndIndex = +this.getAttribute("data-index");
  swapItems(dragStartIndex, dragEndIndex);
  this.classList.remove("over");
}

function dragEnter() {
  this.classList.add("over");
}

function dragLeave() {
  this.classList.remove("over");
}

function swapItems(fromIndex, toIndex) {
  const oneMovie = document.querySelectorAll(".oneMovie");
  const itemOne = oneMovie[fromIndex].querySelector(".draggable");
  const itemTwo = oneMovie[toIndex].querySelector(".draggable");

  oneMovie[fromIndex].appendChild(itemTwo);
  oneMovie[toIndex].appendChild(itemOne);
}