// --------------------hamburger menu------------------
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))

// -----------------------------other--------------------------
const button = document.querySelector(".btn")

button.addEventListener("mousedown", () => {
    button.classList.add("mousedown")
    console.log("mousedown")
})

button.addEventListener("mouseup", () => {
    button.classList.remove("mousedown")
})