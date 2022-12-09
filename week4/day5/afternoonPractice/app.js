

const button = document.querySelector(".button")

// event listener
// clicks, mouse scroll, hover, onchange, etc.
const speak = () => {
    const input = document.querySelector(".inputfield").value;
    console.log(input);
}
// e.target.value will trap the input from an input field
// input.addEventListener("change", (e) => console.log(e.target.value));
button.addEventListener("click", () => speak());
