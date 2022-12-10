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
    <i class="fas fa-grip-lines"></i>
    </div>
    `

    movieContainer.append(oneMovie);
  })
}


function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
  }
  
  function dragging(event) {
    document.getElementById("demo").innerHTML = "The p element is being dragged";
  }
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "The p element was dropped";
  }